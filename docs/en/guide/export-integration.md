# Export & Integration

## Export Formats

### Spine Native Formats

| Format | Description | File Extension |
|--------|-------------|----------------|
| JSON | Universal format, easy to read and edit | .json |
| Binary | Small size, fast loading | .skel |

### Export Options

| Option | Description |
|--------|-------------|
| Pretty JSON | Formatted JSON, easy to read but larger |
| Nonessential | Export non-essential data |
| Pack textures | Pack texture atlases

## Export Steps

### Basic Export

1. Click **Export** button
2. Select export format (JSON or Binary)
3. Set export options
4. Select export directory
5. Click **Export**

### Export Settings

#### JSON Format

- **Pretty JSON**: Formatted output, easy to debug
- **Nonessential**: Includes extra data

#### Binary Format

- Smaller size
- Faster loading
- Harder to debug

### Texture Atlas

#### What is a Texture Atlas?

A texture atlas packs multiple images into one large image, reducing draw calls and improving performance.

#### Exporting Texture Atlas

1. Check **Pack textures** in export settings
2. Set atlas parameters
3. Export atlas files

#### Atlas Parameters

| Parameter | Description |
|-----------|-------------|
| Size | Atlas size |
| Padding | Image spacing |
| Bleed | Edge expansion |
| Rotation | Allow rotation |

## Game Engine Integration

### Unity

#### Installing Spine Runtime

1. Download Spine Unity runtime
2. Import into Unity project
3. Configure import settings

#### Importing Animations

1. Place exported files in Unity project
2. Create Spine component
3. Configure animation parameters

#### Playing Animations

```csharp
// Get Spine component
var skeletonAnimation = GetComponent<SkeletonAnimation>();

// Play animation
skeletonAnimation.AnimationState.SetAnimation(0, "walk", true);

// Blend animations
skeletonAnimation.AnimationState.SetAnimation(0, "idle", true);
skeletonAnimation.AnimationState.AddAnimation(0, "walk", true, 0);
```

### Unreal Engine

#### Installing Spine Plugin

1. Download Spine Unreal plugin
2. Install to Unreal project
3. Enable plugin

#### Importing Animations

1. Place exported files in Unreal project
2. Create Spine component
3. Configure animation parameters

#### Playing Animations

```cpp
// Get Spine component
USpineSkeletonComponent* SpineComp = GetSpineComponent();

// Play animation
SpineComp->SetAnimation("walk", true);

// Blend animations
SpineComp->SetAnimation("idle", true);
SpineComp->AddAnimation("walk", true, 0);
```

### Cocos2d-x

#### Installing Spine Runtime

1. Download Spine Cocos2d-x runtime
2. Integrate into project
3. Configure build settings

#### Importing Animations

1. Place exported files in project resource directory
2. Create Spine node
3. Configure animation parameters

#### Playing Animations

```cpp
// Create Spine node
auto skeletonNode = SkeletonAnimation::createWithFile("spineboy.json", "spineboy.atlas");

// Play animation
skeletonNode->setAnimation(0, "walk", true);

// Blend animations
skeletonNode->setAnimation(0, "idle", true);
skeletonNode->addAnimation(0, "walk", true, 0);
```

## Event Listening

### Unity Event Listening

```csharp
skeletonAnimation.AnimationState.Event += (entry, e) => {
    Debug.Log("Event: " + e.Data.Name);
};
```

### Unreal Event Listening

```cpp
SpineComp->OnSpineEvent.AddDynamic(this, &AMyCharacter::OnSpineEvent);
```

### Cocos2d-x Event Listening

```cpp
skeletonNode->setEventListener([](spTrackEntry* entry, spEvent* event) {
    CCLOG("Event: %s", event->data->name);
});
```

## Performance Optimization

### Texture Optimization

- Use texture atlases
- Set reasonable atlas size
- Compress texture format

### Animation Optimization

- Reduce keyframe count
- Use animation caching
- Avoid too many bones

### Memory Optimization

- Release unused animations promptly
- Use object pooling
- Monitor memory usage

## Official Video: Export & Integration

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Export Animation

1. Open previous animation project
2. Export in JSON format
3. Export texture atlas
4. Check exported files

### Exercise 2: Unity Integration

1. Create Unity project
2. Import Spine runtime
3. Import Spine animation
4. Play animation

## FAQ

### Q: JSON or Binary format, which is better?

A: JSON is easier to debug, Binary is smaller and faster. Choose based on needs.

### Q: What does texture atlas do?

A: Reduces draw calls, improves rendering performance.

### Q: How to optimize Spine animation performance?

A: Use texture atlases, reduce keyframes, use animation caching, avoid too many bones.

## Next Steps

- [Practical Examples](/en/guide/practical-examples) - Reinforce learning through complete examples

