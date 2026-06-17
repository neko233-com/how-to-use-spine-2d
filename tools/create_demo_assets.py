#!/usr/bin/env python3
"""Create transparent placeholder PNGs for the Spine 4.3 demo curriculum."""

from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "spine-demos"


def ellipse(path: Path, size: tuple[int, int], fill: str, outline: str = "#25222b") -> None:
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    margin = max(3, min(size) // 14)
    d.ellipse((margin, margin, size[0] - margin, size[1] - margin), fill=fill, outline=outline, width=3)
    d.ellipse((size[0] * 0.28, size[1] * 0.18, size[0] * 0.52, size[1] * 0.36), fill=(255, 255, 255, 52))
    img.save(path)


def rect(path: Path, size: tuple[int, int], fill: str, outline: str = "#25222b", radius: int = 14) -> None:
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    box = (4, 4, size[0] - 4, size[1] - 4)
    d.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=3)
    d.line((size[0] * 0.18, size[1] * 0.25, size[0] * 0.82, size[1] * 0.22), fill=(255, 255, 255, 58), width=3)
    img.save(path)


def polygon(path: Path, size: tuple[int, int], points: list[tuple[float, float]], fill: str, outline: str = "#25222b") -> None:
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    pts = [(x * size[0], y * size[1]) for x, y in points]
    d.polygon(pts, fill=fill)
    d.line(pts + [pts[0]], fill=outline, width=3)
    img.save(path)


def slash(path: Path, size: tuple[int, int], fill: str) -> None:
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for i in range(6):
        alpha = 210 - i * 28
        d.arc((8 + i * 7, 8 + i * 4, size[0] - 8, size[1] - 10), 200, 330, fill=fill + f"{alpha:02x}", width=max(2, 12 - i))
    img.save(path)


def ensure(path: Path) -> Path:
    path.mkdir(parents=True, exist_ok=True)
    return path


def write_manifest(project: Path, title: str, parts: list[str], lessons: list[str]) -> None:
    (project / "manifest.json").write_text(
        json.dumps(
            {
                "title": title,
                "spineVersion": "4.3",
                "imageFolder": "images",
                "parts": parts,
                "lessons": lessons,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )


def project_first_rig() -> None:
    project = ensure(OUT / "01-first-rig" / "images")
    parts = {
        "head": ((96, 104), "#f0b58f"),
        "hair_front": ((112, 74), "#2f2630"),
        "hair_back": ((118, 88), "#241d26"),
        "torso": ((118, 150), "#416d9f"),
        "pelvis": ((96, 78), "#5b4637"),
        "upper_arm_l": ((58, 118), "#416d9f"),
        "forearm_l": ((50, 110), "#f0b58f"),
        "hand_l": ((46, 42), "#f0b58f"),
        "upper_arm_r": ((58, 118), "#416d9f"),
        "forearm_r": ((50, 110), "#f0b58f"),
        "hand_r": ((46, 42), "#f0b58f"),
        "thigh_l": ((62, 130), "#334766"),
        "calf_l": ((54, 126), "#3d536f"),
        "foot_l": ((78, 42), "#2b2d35"),
        "thigh_r": ((62, 130), "#334766"),
        "calf_r": ((54, 126), "#3d536f"),
        "foot_r": ((78, 42), "#2b2d35"),
        "sword": ((42, 190), "#c9d7e8"),
        "shield": ((104, 122), "#8b3944"),
    }
    for name, (size, color) in parts.items():
        if name == "sword":
            polygon(project / f"{name}.png", size, [(0.5, 0.02), (0.68, 0.72), (0.55, 0.98), (0.45, 0.98), (0.32, 0.72)], color)
        elif name == "shield":
            polygon(project / f"{name}.png", size, [(0.5, 0.04), (0.92, 0.24), (0.78, 0.82), (0.5, 0.98), (0.22, 0.82), (0.08, 0.24)], color)
        elif "hand" in name or "head" in name:
            ellipse(project / f"{name}.png", size, color)
        else:
            rect(project / f"{name}.png", size, color)
    write_manifest(project.parent, "01 First Rig", list(parts), ["bone hierarchy", "image binding", "origin placement"])


def project_walk_ik() -> None:
    base = OUT / "02-walk-run-ik" / "images"
    ensure(base)
    colors = ["#547aa5", "#cfa06f", "#2f3442", "#9b4c4c"]
    names: list[str] = []
    for side in ("l", "r"):
        for index, (part, size) in enumerate(
            [
                ("upper_arm", (54, 116)),
                ("forearm", (48, 112)),
                ("hand", (44, 40)),
                ("thigh", (58, 132)),
                ("calf", (50, 130)),
                ("foot", (76, 42)),
            ]
        ):
            name = f"{part}_{side}"
            names.append(name)
            ellipse(base / f"{name}.png", size, colors[index % len(colors)]) if part in {"hand", "foot"} else rect(base / f"{name}.png", size, colors[index % len(colors)])
    for name, size, color in [("torso", (112, 146), "#547aa5"), ("pelvis", (94, 76), "#5b4637"), ("head", (92, 98), "#d9a27d"), ("root_shadow", (180, 44), "#00000055")]:
        names.append(name)
        ellipse(base / f"{name}.png", size, color) if "head" in name or "shadow" in name else rect(base / f"{name}.png", size, color)
    write_manifest(base.parent, "02 Walk Run IK", names, ["contact poses", "passing poses", "foot IK", "root motion notes"])


def project_mesh() -> None:
    base = OUT / "03-mesh-face-cape" / "images"
    ensure(base)
    parts: list[str] = []
    for name, size, points, color in [
        ("cape_upper", (170, 150), [(0.18, 0.04), (0.82, 0.04), (0.94, 0.96), (0.08, 0.96)], "#9b3141"),
        ("cape_lower", (190, 220), [(0.12, 0.02), (0.86, 0.02), (0.98, 0.98), (0.5, 0.82), (0.02, 0.98)], "#7d2434"),
        ("face_base", (112, 112), [(0.5, 0.02), (0.86, 0.22), (0.82, 0.8), (0.5, 0.98), (0.18, 0.8), (0.14, 0.22)], "#f0b58f"),
        ("mouth", (56, 28), [(0.08, 0.38), (0.92, 0.38), (0.72, 0.76), (0.28, 0.76)], "#7d3034"),
    ]:
        polygon(base / f"{name}.png", size, points, color)
        parts.append(name)
    for name, size, color in [("eye_l", (28, 22), "#f6f1e8"), ("eye_r", (28, 22), "#f6f1e8"), ("brow_l", (42, 18), "#2a2228"), ("brow_r", (42, 18), "#2a2228"), ("tear", (22, 38), "#72b8d8")]:
        ellipse(base / f"{name}.png", size, color)
        parts.append(name)
    write_manifest(base.parent, "03 Mesh Face Cape", parts, ["mesh vertices", "weight gradients", "deform keys", "skin placeholders"])


def project_combat() -> None:
    base = OUT / "04-combat-events" / "images"
    ensure(base)
    parts: list[str] = []
    for i, color in enumerate(["#ffe08a", "#ffba52", "#f06d45", "#b73e50"], start=1):
        name = f"impact_{i:02d}"
        ellipse(base / f"{name}.png", (72 + i * 14, 72 + i * 14), color)
        parts.append(name)
    for i in range(1, 9):
        name = f"slash_{i:02d}"
        slash(base / f"{name}.png", (180, 112), "#cde9ff")
        parts.append(name)
    for i in range(1, 7):
        name = f"dust_{i:02d}"
        ellipse(base / f"{name}.png", (70 + i * 8, 38 + i * 5), "#b8aaa0")
        parts.append(name)
    for name, size, color in [("sword_blade", (38, 210), "#cbd8e8"), ("sword_handle", (86, 34), "#6e4832"), ("hitbox_debug", (120, 70), "#ff445566")]:
        rect(base / f"{name}.png", size, color)
        parts.append(name)
    write_manifest(base.parent, "04 Combat Events", parts, ["anticipation", "hit events", "attachment swaps", "VFX timing"])


def project_boss() -> None:
    base = OUT / "05-boss-constraints" / "images"
    ensure(base)
    parts: list[str] = []
    for i in range(1, 7):
        name = f"stone_segment_{i:02d}"
        rect(base / f"{name}.png", (90 + i * 7, 58 + i * 5), "#747a83", radius=10)
        parts.append(name)
    for name, size, color in [
        ("core", (86, 86), "#65d0e6"),
        ("head", (132, 108), "#727781"),
        ("fist_l", (96, 86), "#676d76"),
        ("fist_r", (96, 86), "#676d76"),
        ("foot_l", (116, 54), "#555b64"),
        ("foot_r", (116, 54), "#555b64"),
    ]:
        ellipse(base / f"{name}.png", size, color)
        parts.append(name)
    for i in range(1, 13):
        angle = i / 12 * math.tau
        name = f"magic_orbit_{i:02d}"
        ellipse(base / f"{name}.png", (34 + int(8 * math.sin(angle) ** 2), 34), "#7ce3ff")
        parts.append(name)
    write_manifest(base.parent, "05 Boss Constraints", parts, ["transform constraints", "path follow", "secondary motion", "performance budget"])


def project_export_pack() -> None:
    base = ensure(OUT / "06-export-runtime-pack")
    (base / "README.md").write_text(
        "# 06 Export Runtime Pack\n\n"
        "Use this folder for exported `.json`, `.skel`, `.atlas`, and packed `.png` files from Spine 4.3. "
        "Keep source images in the lesson folders and put runtime exports here so integration tests stay tidy.\n",
        encoding="utf-8",
    )


def main() -> None:
    project_first_rig()
    project_walk_ik()
    project_mesh()
    project_combat()
    project_boss()
    project_export_pack()
    print(f"Demo assets written to {OUT}")


if __name__ == "__main__":
    main()
