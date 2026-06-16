# Animation Basics

## What is Animation?

Animation is the technique of creating the illusion of motion by displaying a sequence of static images. In Spine, animation is achieved through keyframes and interpolation.

## Animation Modes

### Pose Mode

- Used for adjusting bone positions
- Does not create keyframes
- Suitable for initial pose setup

### Animate Mode

- Used for creating animations
- Can add keyframes
- Main animation editing mode

### Setup Mode

- Used for initial skeleton building
- Set up bones and images
- Preparation before animation

## Creating Animations

### New Animation

1. Click **Animations** panel
2. Click **New** button
3. Enter animation name
4. Click **Create**

### Animation Naming

- Use meaningful names
- Like `idle`, `walk`, `run`, `attack`
- Avoid special characters

## Keyframes

### What are Keyframes?

Keyframes define poses at specific time points in an animation. Spine automatically interpolates between keyframes.

### Adding Keyframes

1. Move time slider to target frame
2. Adjust bones to target pose
3. Click **Key** button or press K
4. Keyframe will appear on timeline

### Keyframe Types

| Type | Description |
|------|-------------|
| Position Keyframe | Records bone position |
| Rotation Keyframe | Records bone rotation |
| Scale Keyframe | Records bone scale |
| Color Keyframe | Records color and opacity |

### Editing Keyframes

#### Selecting Keyframes

- Click keyframe icon to select
- Hold Shift for multiple selection
- Box select multiple keyframes

#### Moving Keyframes

1. Select keyframes
2. Drag to new position
3. Or use arrow keys for fine adjustment

#### Copying Keyframes

1. Select keyframes
2. Ctrl+C to copy
3. Move to target frame
4. Ctrl+V to paste

#### Deleting Keyframes

1. Select keyframes
2. Press Delete key

## Timeline Controls

### Playback Controls

- **Play/Pause**: Space key
- **Stop**: Return to first frame
- **Loop**: Loop animation

### Frame Navigation

- **Previous Frame**: Left key
- **Next Frame**: Right key
- **Previous Keyframe**: Ctrl+Left
- **Next Keyframe**: Ctrl+Right

### Time Settings

- **Frame Rate**: Set animation frame rate (e.g., 24fps, 30fps)
- **Duration**: Set total animation frames
- **Start/End**: Set playback range

## Animation Curves

### What are Animation Curves?

Animation curves control interpolation between keyframes, affecting animation rhythm and feel.

### Curve Types

#### Linear

- Constant speed motion
- Simplest interpolation
- Suitable for uniform motion

#### Bezier

- Customizable curves
- Controls acceleration and deceleration
- Most commonly used curve type

#### Stepped

- No interpolation
- Direct jump to next keyframe
- Suitable for stop-motion animation

### Editing Curves

1. Select keyframe
2. Find **Curve** setting in properties panel
3. Select curve type
4. Adjust curve control points

## Animation Layers

### What are Animation Layers?

Animation layers allow playing multiple animations simultaneously for complex animation combinations.

### Creating Layers

1. Click **Animations** panel
2. Click **New Layer** button
3. Enter layer name
4. Set layer properties

### Layer Properties

| Property | Description |
|----------|-------------|
| Name | Layer name |
| Weight | Layer weight |
| Pose | Pose mode |

### Layer Blending

- **Override**: Overrides lower layer animation
- **Additive**: Adds to lower layer animation
- **Average**: Average blending

## Animation Preview

### Preview Controls

- **Play**: Space key
- **Loop**: Enable/disable loop
- **Speed**: Adjust playback speed

### Preview Range

- Set preview start frame
- Set preview end frame
- Loop specific parts

## Official Video: Animation Basics

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Create Simple Animation

1. Create new animation `idle`
2. Set initial pose
3. Add keyframes
4. Adjust animation curves
5. Preview animation

### Exercise 2: Create Walk Animation

1. Create new animation `walk`
2. Set leg movement
3. Set arm swing
4. Adjust animation rhythm
5. Loop playback test

## FAQ

### Q: How to make animation smoother?

A: Increase keyframe count, adjust animation curves, use bezier curves.

### Q: How to make animation loop?

A: Ensure first and last frames have same pose, enable loop playback.

### Q: How to adjust animation curves?

A: Select keyframe, find Curve setting in properties panel, select curve type and adjust control points.

## Next Steps

- [IK & Constraints](/en/guide/ik-constraints) - Learn to use IK and constraints

