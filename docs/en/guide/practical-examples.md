# Practical Examples

## Examples Overview

This chapter provides complete game character animation examples that apply all the knowledge learned in previous chapters.

## Example 1: 2D Character Idle Animation

### Goal

Create a simple 2D character idle animation.

### Steps

#### 1. Prepare Assets

- Character body part images (head, body, arms, legs)
- Ensure transparent background
- Consistent image naming

#### 2. Create Skeleton

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
│   │   │   ├── left-upper-arm
│   │   │   └── left-forearm
│   │   └── right-arm
│   │       ├── right-upper-arm
│   │       └── right-forearm
│   └── head
```

#### 3. Import Images and Bind

1. Import all body part images
2. Bind images to corresponding bones
3. Adjust image position and size

#### 4. Create Mesh (Optional)

1. Select images that need deformation
2. Create mesh
3. Paint weights

#### 5. Create Idle Animation

1. Create new animation `idle`
2. Set initial pose
3. Add breathing animation (subtle body movement)
4. Add slight arm sway
5. Adjust animation curves

#### 6. Export and Test

1. Export in JSON format
2. Export texture atlas
3. Test in game engine

### Key Tips

- Idle animation should be subtle
- Use bezier curves for natural animation
- Ensure seamless loop

## Example 2: 2D Character Walk Animation

### Goal

Create a smooth walk cycle animation.

### Steps

#### 1. Analyze Walk Motion

- Legs alternate movement
- Arms swing naturally
- Body slightly moves up and down
- Head stays stable

#### 2. Create Animation

1. Create new animation `walk`
2. Set keyframe poses

#### 3. Keyframe Settings

| Frame | Legs | Arms | Body |
|-------|------|------|------|
| 0 | Left forward, right back | Right forward, left back | Highest point |
| 12 | Legs cross | Arms pass body | Lowest point |
| 24 | Right forward, left back | Left forward, right back | Highest point |

#### 4. Adjust Animation Curves

- Leg movement uses smooth curves
- Body movement uses sine curves
- Arm swing uses bezier curves

#### 5. Test Loop

- Ensure first and last frames match
- Test loop smoothness
- Adjust unnatural parts

### Key Tips

- Walk animation should reference real movement
- Pay attention to weight transfer
- Arm swing should be natural

## Example 3: 2D Character Attack Animation

### Goal

Create an impactful attack animation.

### Steps

#### 1. Analyze Attack Motion

- Charging phase
- Attack phase
- Recovery phase

#### 2. Create Animation

1. Create new animation `attack`
2. Set keyframe poses

#### 3. Keyframe Settings

| Frame | Motion | Description |
|-------|--------|-------------|
| 0 | Charge | Arm pulled back, body twisted |
| 6 | Attack | Arm swings forward, body leans |
| 12 | Hit | Arm reaches target position |
| 18 | Recovery | Arm retracts, body recovers |

#### 4. Add Events

1. Create `attack-start` event
2. Create `attack-hit` event
3. Create `attack-end` event
4. Add events at corresponding frames

#### 5. Add Sound Effects

1. Create audio events
2. Set sound effect file names
3. Add sound effects at attack frames

### Key Tips

- Attack animation should feel impactful
- Use speed contrast for emphasis
- Events and sound effects should sync precisely

## Example 4: 2D Character Jump Animation

### Goal

Create a smooth jump animation.

### Steps

#### 1. Analyze Jump Motion

- Jump preparation
- Jump ascent
- Air pose
- Descent
- Landing buffer

#### 2. Create Animation

1. Create new animation `jump`
2. Set keyframe poses

#### 3. Keyframe Settings

| Frame | Motion | Description |
|-------|--------|-------------|
| 0 | Prepare | Squat down |
| 4 | Jump | Legs extend, body rises |
| 12 | Air | Body extends, legs bend |
| 20 | Fall | Body contracts, prepare for landing |
| 24 | Land | Legs buffer, body descends |

#### 4. Add Events

1. Create `jump-start` event
2. Create `jump-peak` event
3. Create `jump-land` event

### Key Tips

- Jump animation should feel gravity
- Jump and landing should have buffer
- Air pose should be natural

## Complete Project: Character Animation Set

### Goal

Create a complete character animation set.

### Animation List

| Animation | Description | Loop |
|-----------|-------------|------|
| idle | Idle | Yes |
| walk | Walk | Yes |
| run | Run | Yes |
| jump | Jump | No |
| attack | Attack | No |
| hurt | Hurt | No |
| death | Death | No |

### Workflow

1. **Create Skeleton**: Build complete character skeleton
2. **Import Images**: Import all body part images
3. **Bind Images**: Bind images to bones
4. **Create Meshes**: Create meshes for deformable parts
5. **Paint Weights**: Adjust weight values
6. **Create Animations**: Create animations one by one
7. **Add Events**: Add events to animations
8. **Export and Test**: Export and test in game engine

### Best Practices

- Create basic animations first (idle, walk)
- Then create complex animations (attack, jump)
- Finally add details and optimize
- Continuously test and adjust

## Official Video: Practical Examples

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Summary

Congratulations on completing the Spine Pro 2D 4.3 beginner tutorial!

### What You Learned

- ✅ Spine interface and workflow
- ✅ Skeleton system and hierarchy management
- ✅ Image import and mesh creation
- ✅ Keyframe animation creation
- ✅ IK and constraint usage
- ✅ Skinning and weight painting
- ✅ Event and audio addition
- ✅ Animation export and engine integration

### Next Steps

- Explore more Spine features
- Reference official documentation for deeper learning
- Join Spine community for discussion
- Practice with more projects

## Resource Recommendations

### Official Resources

- [Spine Official Website](https://esotericsoftware.com)
- [Spine Documentation](https://esotericsoftware.com/spine-docs)
- [Spine Forum](https://esotericsoftware.com/forum)

### Learning Resources

- [Spine YouTube Channel](https://www.youtube.com/@Spine2D)
- [Spine Example Projects](https://github.com/EsotericSoftware/spine-runtimes)

### Community Resources

- [Spine Discord](https://discord.gg/spine)
- [Reddit r/Spine2D](https://www.reddit.com/r/Spine2D/)

## Happy Learning!

Hope this tutorial has been helpful. If you have questions, feel free to open an Issue on GitHub.

