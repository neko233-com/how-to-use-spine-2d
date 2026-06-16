# IK & Constraints

## What is IK?

IK (Inverse Kinematics) is an animation technique that automatically calculates middle bone angles by specifying the end position.

### IK vs FK

| Type | Description | Use Cases |
|------|-------------|-----------|
| FK (Forward Kinematics) | Adjust bones one by one from root to end | Arm swinging, tail wagging |
| IK (Inverse Kinematics) | Specify end position, auto-calculate middle bones | Leg walking, hand grabbing |

## Creating IK Constraints

### Steps

1. Select **Create IK** tool
2. Click IK chain start bone (e.g., thigh)
3. Click IK chain end bone (e.g., foot)
4. Set IK properties in properties panel

### IK Properties

| Property | Description |
|----------|-------------|
| Name | IK name |
| Target | Target bone |
| Bones | Bones in IK chain |
| Mix | IK influence (0-1) |
| Bend Direction | Bend direction |
| Compress | Allow compression |
| Stretch | Allow stretching |

## IK Usage Tips

### Leg IK

1. Create leg bone chain: hip → thigh → calf → foot
2. Create IK constraint: from thigh to foot
3. Create IK target at foot position
4. Move IK target, leg will auto-adjust

### Arm IK

1. Create arm bone chain: shoulder → upper-arm → forearm → hand
2. Create IK constraint: from upper-arm to hand
3. Create IK target at hand position
4. Move IK target, arm will auto-adjust

### Bend Direction

- **Clockwise**: Bend clockwise
- **Counter-Clockwise**: Bend counter-clockwise
- **Mix**: Mix both directions

## Constraint Types

### Transform Constraint

Controls bone transformation relative to another bone.

#### Properties

| Property | Description |
|----------|-------------|
| Target | Target bone |
| Bones | Affected bones |
| Mix | Influence |
| Offset | Offset |

#### Use Cases

- Weapon follows hand movement
- Shield follows arm rotation

### Path Constraint

Makes bones move along a path.

#### Properties

| Property | Description |
|----------|-------------|
| Target | Path |
| Bones | Affected bones |
| Mix | Influence |
| Position | Position |
| Spacing | Spacing |

#### Use Cases

- Snake movement
- Rope swinging
- Character moving along path

### Physics Constraint

Simulates physics effects.

#### Properties

| Property | Description |
|----------|-------------|
| Bones | Affected bones |
| Inertia | Inertia |
| Strength | Strength |
| Damping | Damping |
| Mass | Mass |
| Wind | Wind |

#### Use Cases

- Hair movement
- Cloth swaying
- Tail wagging

## Constraint Priority

### Setting Priority

1. Adjust constraint order in outliner
2. Upper constraints have higher priority
3. Priority affects constraint application order

### Blending Constraints

- Multiple constraints can affect same bone
- Use Mix property to control each constraint's influence
- Test different constraint combinations

## Official Video: IK & Constraints

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Create Leg IK

1. Create leg bone chain
2. Create IK constraint
3. Add IK target
4. Test IK effect

### Exercise 2: Create Arm IK

1. Create arm bone chain
2. Create IK constraint
3. Set bend direction
4. Test IK effect

### Exercise 3: Use Physics Constraint

1. Create hair bones
2. Add physics constraint
3. Adjust physics parameters
4. Test movement effect

## FAQ

### Q: Which is better, IK or FK?

A: No absolute answer. Choose based on animation needs. Legs suit IK, arm swinging suits FK.

### Q: How to set IK bend direction?

A: Based on character's natural pose. Legs usually bend backward, arms usually bend forward.

### Q: How to mix IK and FK?

A: Use Mix property to control IK influence, achieving IK and FK blending.

## Next Steps

- [Skinning & Weights](/en/guide/skinning-weights) - Learn skinning and weight painting

