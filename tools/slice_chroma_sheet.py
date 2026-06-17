#!/usr/bin/env python3
"""Slice a chroma-key Spine source sheet into transparent PNG parts.

The tool removes a flat background color, finds connected opaque islands, crops
each island with padding, and writes a manifest that is convenient for importing
the result into Spine's Images folder.
"""

from __future__ import annotations

import argparse
import json
from collections import deque
from pathlib import Path
from typing import Iterable

from PIL import Image


def parse_hex_color(value: str) -> tuple[int, int, int]:
    value = value.strip().lstrip("#")
    if len(value) != 6:
        raise argparse.ArgumentTypeError("color must be RRGGBB or #RRGGBB")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def load_names(path: Path | None) -> list[str]:
    if not path:
        return []
    return [
        line.strip()
        for line in path.read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.strip().startswith("#")
    ]


def neighbors(x: int, y: int, w: int, h: int) -> Iterable[tuple[int, int]]:
    if x > 0:
        yield x - 1, y
    if x + 1 < w:
        yield x + 1, y
    if y > 0:
        yield x, y - 1
    if y + 1 < h:
        yield x, y + 1


def is_key(pixel: tuple[int, int, int, int], key: tuple[int, int, int], threshold: int) -> bool:
    return (
        abs(pixel[0] - key[0]) <= threshold
        and abs(pixel[1] - key[1]) <= threshold
        and abs(pixel[2] - key[2]) <= threshold
    )


def component_bounds(mask: list[bytearray], min_area: int) -> list[tuple[int, int, int, int, int]]:
    h = len(mask)
    w = len(mask[0]) if h else 0
    visited = [bytearray(w) for _ in range(h)]
    bounds: list[tuple[int, int, int, int, int]] = []

    for y in range(h):
        for x in range(w):
            if not mask[y][x] or visited[y][x]:
                continue

            q: deque[tuple[int, int]] = deque([(x, y)])
            visited[y][x] = 1
            min_x = max_x = x
            min_y = max_y = y
            area = 0

            while q:
                cx, cy = q.popleft()
                area += 1
                min_x = min(min_x, cx)
                max_x = max(max_x, cx)
                min_y = min(min_y, cy)
                max_y = max(max_y, cy)

                for nx, ny in neighbors(cx, cy, w, h):
                    if mask[ny][nx] and not visited[ny][nx]:
                        visited[ny][nx] = 1
                        q.append((nx, ny))

            if area >= min_area:
                bounds.append((min_x, min_y, max_x + 1, max_y + 1, area))

    bounds.sort(key=lambda b: (b[1] // 64, b[0]))
    return bounds


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--out-dir", required=True, type=Path)
    parser.add_argument("--key", default="#00ff00", type=parse_hex_color)
    parser.add_argument("--threshold", default=24, type=int)
    parser.add_argument("--min-area", default=96, type=int)
    parser.add_argument("--padding", default=4, type=int)
    parser.add_argument("--names", type=Path)
    parser.add_argument("--prefix", default="part")
    args = parser.parse_args()

    image = Image.open(args.input).convert("RGBA")
    w, h = image.size
    pixels = image.load()
    mask = [bytearray(w) for _ in range(h)]

    for y in range(h):
        for x in range(w):
            pixel = pixels[x, y]
            if is_key(pixel, args.key, args.threshold) or pixel[3] == 0:
                pixels[x, y] = (pixel[0], pixel[1], pixel[2], 0)
            else:
                mask[y][x] = 1

    args.out_dir.mkdir(parents=True, exist_ok=True)
    names = load_names(args.names)
    manifest = {
        "source": str(args.input),
        "key": "#{:02x}{:02x}{:02x}".format(*args.key),
        "parts": [],
    }

    for index, (x0, y0, x1, y1, area) in enumerate(component_bounds(mask, args.min_area), start=1):
        x0p = max(0, x0 - args.padding)
        y0p = max(0, y0 - args.padding)
        x1p = min(w, x1 + args.padding)
        y1p = min(h, y1 + args.padding)
        name = names[index - 1] if index <= len(names) else f"{args.prefix}_{index:03d}"
        out_path = args.out_dir / f"{name}.png"
        crop = image.crop((x0p, y0p, x1p, y1p))
        crop.save(out_path)
        manifest["parts"].append(
            {
                "name": name,
                "file": out_path.name,
                "sourceBounds": [x0, y0, x1, y1],
                "trimmedBounds": [x0p, y0p, x1p, y1p],
                "area": area,
                "size": [x1p - x0p, y1p - y0p],
            }
        )

    (args.out_dir / "slice-manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Sliced {len(manifest['parts'])} parts into {args.out_dir}")


if __name__ == "__main__":
    main()
