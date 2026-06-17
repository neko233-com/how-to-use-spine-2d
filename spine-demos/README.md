# Spine 4.3 Demo Lab

This folder contains import-ready image folders for the Chinese Spine 4.3 course.
Each lesson is designed to become a real `.spine` project that you build inside
the Spine editor.

## Folders

| Folder | Focus |
| --- | --- |
| `_catalog` | Generated 96-case catalog for long-term practice |
| `001-*` to `096-*` | Large-scale scaffolded Spine 4.3 exercises |
| `01-first-rig` | First cutout character rig, slots, draw order, origins |
| `02-walk-run-ik` | Walk/run loops, foot contact, IK targets |
| `03-mesh-face-cape` | Mesh vertices, weights, deform keys, face swaps |
| `04-combat-events` | Anticipation, hit events, weapon/VFX attachment swaps |
| `05-boss-constraints` | Transform/path constraints, orbit parts, performance budget |
| `06-export-runtime-pack` | Put Spine runtime exports here for engine integration |

## How To Use

1. Open Spine 4.3.
2. Create a new project.
3. Set the Images path to one lesson's `images` folder.
4. Build the skeleton and animations by following `docs/zh/projects`.
5. Export runtime files into `06-export-runtime-pack`.

The checked-in PNGs are simple training placeholders. Use
`assets/image2/prompts/gpt-image2-spine-pack.jsonl` with GPT image2, then process
the generated sheets through `tools/slice_chroma_sheet.py` to replace them with
polished art.

## Large Demo Catalog

Run this whenever `docs/.vitepress/theme/data/demoCases.ts` changes:

```bash
python tools/scaffold_demo_cases.py
```

The script regenerates `spine-demos/_catalog/demo-cases.json` and scaffold
folders for every case displayed in the Vite + Vue Demo Lab.
