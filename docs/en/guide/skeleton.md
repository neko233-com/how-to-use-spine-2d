# Skeleton System

## What are Bones?

Bones are the foundation of Spine's animation system. They define the structure and movement of characters.

### Bone Hierarchy

Bones form parent-child hierarchical relationships:

```
root
├── hip
│   ├── left-leg
│   │   ├── left-thigh
│   │   └── left-calf
│   └── right-leg
│       ├── right-thigh
│       └── right-calf
├── spine
│   ├── chest
│   │   ├── left-arm
│   │   └── right-arm
│   └── head
```

### Parent-Child Relationships

- Child bones follow parent bone movement
- Moving parent bones affects all child bones
- Child bones can have independent movement

## Creating Bones

### Steps

1. Select **Create Bone** tool
2. Click in viewport to set bone start point
3. Drag mouse to set bone direction and length
4. Click to complete creation

### Tips

- Start from the character's root (e.g., hips)
- Create hierarchy following natural body structure
- Use reference images for positioning

## Editing Bones

### Selecting Bones

- Click bone to select
- Hold Shift for multiple selection
- Click in outliner to select

### Moving Bones

1. Select **Move** tool
2. Drag bone to new position
3. Child bones will follow

### Rotating Bones

1. Select **Rotate** tool
2. Drag to rotate bone
3. Child bones will follow

### Adjusting Bone Length

1. Select bone
2. Modify **Length** value in properties panel
3. Or drag bone end control point

## Bone Properties

### Basic Properties

| Property | Description |
|----------|-------------|
| Name | Bone name |
| Parent | Parent bone |
| Position | Position (X, Y) |
| Rotation | Rotation angle |
| Scale | Scale (X, Y) |
| Length | Bone length |

### Advanced Properties

| Property | Description |
|----------|-------------|
| Shear | Shear deformation |
| Transform | Transform mode |
| Color | Bone color |

## Bone Hierarchy Management

### Reordering

- Drag bones in outliner
- Adjust parent-child relationships
- Affects animation inheritance

### Copying Bones

1. Select bone
2. Ctrl+D to copy
3. Adjust copied bone position

### Deleting Bones

1. Select bone
2. Press Delete key
3. Confirm deletion

::: warning Note
Deleting a parent bone will also delete all child bones.
:::

## IK Bones

IK (Inverse Kinematics) bones can simplify animation creation.

### Creating IK Bones

1. Select **Create IK** tool
2. Click IK chain start bone
3. Click IK chain end bone
4. Set IK constraint

### IK Advantages

- Moving end point automatically calculates middle bone angles
- Suitable for leg and arm animations
- Reduces keyframe count

## Official Video: Skeleton System

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Create Simple Humanoid Skeleton

1. Create new project
2. Start creating bones from hips
3. Create leg bones (left and right)
4. Create spine and arm bones
5. Create head bone

### Exercise 2: Adjust Bone Hierarchy

1. Open Exercise 1 project
2. Adjust bone parent-child relationships
3. Test bone inheritance effects

## FAQ

### Q: How to adjust bone position after creation?

A: Use Move tool to drag bone, or modify Position value in properties panel.

### Q: How to make child bones not follow parent rotation?

A: Set Transform to **Only Translation** in properties panel.

### Q: Any naming conventions for bones?

A: Use meaningful English names like `left-arm`, `right-leg`.

## Next Steps

- [Images & Meshes](/en/guide/images-meshes) - Learn to import images and create meshes

