#!/usr/bin/env python3
"""Scaffold README and manifest files for the Vite demo case catalog."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "docs" / ".vitepress" / "theme" / "data" / "demoCases.ts"
OUT = ROOT / "spine-demos"


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "demo"


def parse_cases() -> list[dict[str, object]]:
    current_track = ""
    current_prefix = ""
    track_index = -1
    case_index = 0
    cases: list[dict[str, object]] = []

    for line in DATA.read_text(encoding="utf-8").splitlines():
        track_match = re.search(r"track: '([^']+)'", line)
        if track_match:
            current_track = track_match.group(1)
            track_index += 1
            case_index = 0
            continue

        prefix_match = re.search(r"folderPrefix: '([^']+)'", line)
        if prefix_match:
            current_prefix = prefix_match.group(1)
            continue

        case_match = re.search(
            r"\['([^']+)', '([^']+)', '([^']+)', '([^']+)', \[(.*?)\]\],",
            line.strip(),
        )
        if not case_match or not current_track or not current_prefix:
            continue

        number = f"{track_index * 12 + case_index + 1:03d}"
        features = re.findall(r"'([^']+)'", case_match.group(5))
        deliverable = case_match.group(4)
        folder = OUT / f"{number}-{current_prefix}-{slugify(deliverable)}"
        cases.append(
            {
                "id": f"{current_prefix}-{number}",
                "number": number,
                "title": case_match.group(1),
                "track": current_track,
                "difficulty": case_match.group(2),
                "time": case_match.group(3),
                "deliverable": deliverable,
                "features": features,
                "folder": folder,
            }
        )
        case_index += 1

    return cases


def write_case(case: dict[str, object]) -> None:
    folder = Path(case["folder"])
    folder.mkdir(parents=True, exist_ok=True)
    (folder / "images").mkdir(exist_ok=True)

    manifest = {
        "id": case["id"],
        "title": case["title"],
        "track": case["track"],
        "difficulty": case["difficulty"],
        "estimatedTime": case["time"],
        "deliverable": case["deliverable"],
        "spineVersion": "4.3",
        "features": case["features"],
        "status": "scaffold",
        "expectedFiles": [
            "source .spine file",
            "images/",
            "export json/skel",
            "atlas + packed png",
            "notes.md",
        ],
    }
    (folder / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    feature_text = ", ".join(case["features"])
    readme = f"""# {case['number']} {case['title']}

Track: {case['track']}
Difficulty: {case['difficulty']}
Estimated time: {case['time']}
Deliverable: `{case['deliverable']}`
Spine version: 4.3

## Focus

{feature_text}

## Work Order

1. Build the `.spine` source file in this folder.
2. Put source attachments in `images/`.
3. Export JSON and `.skel` into `export/`.
4. Record binding, animation, event, mesh, and runtime issues in `notes.md`.

## Acceptance

- The animation or rig can be opened in Spine 4.3.
- Naming follows the course convention.
- At least one runtime export is produced.
- Any events are documented with frame numbers and gameplay purpose.
"""
    (folder / "README.md").write_text(readme, encoding="utf-8")


def main() -> None:
    cases = parse_cases()
    catalog_dir = OUT / "_catalog"
    catalog_dir.mkdir(parents=True, exist_ok=True)
    catalog = []
    for case in cases:
        write_case(case)
        clean = {key: value for key, value in case.items() if key != "folder"}
        clean["folder"] = str(Path(case["folder"]).relative_to(ROOT)).replace("\\", "/")
        catalog.append(clean)

    (catalog_dir / "demo-cases.json").write_text(
        json.dumps(catalog, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    (catalog_dir / "README.md").write_text(
        "# Demo Case Catalog\n\n"
        "Generated from `docs/.vitepress/theme/data/demoCases.ts` by `tools/scaffold_demo_cases.py`.\n"
        "Each numbered folder is a Spine 4.3 exercise scaffold.\n",
        encoding="utf-8",
    )
    print(f"Scaffolded {len(cases)} demo case folders.")


if __name__ == "__main__":
    main()
