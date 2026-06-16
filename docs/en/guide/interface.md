# Interface Overview

## Main Interface Layout

Spine's interface consists of the following main areas:

```
┌─────────────────────────────────────────────────────────┐
│  Menu Bar                                                │
├──────────────┬──────────────────────────┬───────────────┤
│  Tools       │      Viewport            │   Properties  │
│              │                          │               │
│              │                          │               │
│              │                          │               │
│              │                          │               │
├──────────────┴──────────────────────────┴───────────────┤
│  Outliner                                                │
├─────────────────────────────────────────────────────────┤
│  Timeline                                                │
└─────────────────────────────────────────────────────────┘
```

## Menu Bar

### File

- **New**: Create new project
- **Open**: Open existing project
- **Save**: Save project
- **Export**: Export animation

### Edit

- **Undo**: Undo action
- **Redo**: Redo action
- **Preferences**: Settings

### View

- **Zoom In/Out**: Zoom viewport
- **Reset View**: Reset viewport
- **Show Grid**: Show grid

### Spine

- **New Skeleton**: Create new skeleton
- **New Animation**: Create new animation
- **New Skin**: Create new skin

## Tools

### Selection Tools

- **Select**: Select bones, images, etc.
- **Move**: Move objects
- **Rotate**: Rotate objects
- **Scale**: Scale objects

### Bone Tools

- **Create Bone**: Create bones
- **Create IK**: Create IK constraints

### Edit Tools

- **Create Mesh**: Create meshes
- **Edit Mesh**: Edit mesh vertices

## Viewport

The viewport is the main area where you view and edit skeletons.

### View Controls

- **Mouse Wheel**: Zoom viewport
- **Middle Mouse Drag**: Pan viewport
- **Right Mouse Drag**: Rotate viewport (3D mode)

### View Modes

- **Pose**: Pose mode for adjusting bone positions
- **Animate**: Animation mode for creating keyframes
- **Setup**: Setup mode for initial skeleton building

## Outliner

The outliner displays the hierarchical structure of the skeleton.

### Bone Hierarchy

- Parent bones above, child bones below
- Drag to adjust hierarchy
- Right-click to add, delete, rename

### Image List

- Displays all imported images
- Images can be bound to bones

## Properties Panel

The properties panel displays detailed properties of the selected object.

### Bone Properties

- **Position**: Position (X, Y)
- **Rotation**: Rotation angle
- **Scale**: Scale ratio
- **Length**: Bone length

### Image Properties

- **Position**: Position
- **Rotation**: Rotation
- **Scale**: Scale
- **Color**: Color and opacity

## Timeline

The timeline is the core area for animation editing.

### Timeline Controls

- **Play/Pause**: Preview animation
- **Time Slider**: Move to specific frame
- **Keyframe Buttons**: Add/delete keyframes

### Keyframes

- Diamond icons indicate keyframes
- Can select, move, copy keyframes
- Supports bezier curve adjustment

## Official Video: Interface Introduction

<iframe width="560" height="315" src="https://www.youtube.com/embed/GRQqNufqfMQ" frameborder="0" allowfullscreen></iframe>

## Quick Reference

| Function | Shortcut |
|----------|----------|
| Undo | Ctrl+Z |
| Redo | Ctrl+Y |
| Save | Ctrl+S |
| Select All | Ctrl+A |
| Delete | Delete |
| Play | Space |
| Previous Frame | Left |
| Next Frame | Right |

## Next Steps

- [Skeleton System](/en/guide/skeleton) - Learn to create and manage bones

