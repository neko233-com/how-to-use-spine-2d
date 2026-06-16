# Events & Audio

## What are Events?

Events are markers in Spine animations used to trigger specific behaviors during animation playback.

## Event Types

### Basic Events

- **Event**: Generic event
- **Audio**: Audio event
- **Particle**: Particle event

### Event Properties

| Property | Description |
|----------|-------------|
| Name | Event name |
| Int | Integer value |
| Float | Float value |
| String | String value |

## Creating Events

### Steps

1. Click **Events** panel
2. Click **New** button
3. Enter event name
4. Set event properties
5. Click **Create**

### Event Naming

- Use meaningful names
- Like `footstep`, `attack-hit`, `sound-effect`
- Avoid special characters

## Adding Events to Animations

### Steps

1. Select target frame on timeline
2. Select event in Events panel
3. Click **Add** button
4. Event will appear on timeline

### Event Property Settings

#### Int Value

- Used for integer parameters
- Like attack damage, animation index

#### Float Value

- Used for float parameters
- Like volume size, speed multiplier

#### String Value

- Used for string parameters
- Like audio file name, message content

## Audio Events

### What are Audio Events?

Audio events play sound effects or music during animation playback.

### Creating Audio Events

1. Create regular event
2. Set String property to audio file name
3. Add event in animation

### Audio File Formats

- **MP3**: Most common audio format
- **OGG**: Open source format, commonly used in games
- **WAV**: Lossless format, larger file size

### Audio Properties

| Property | Description |
|----------|-------------|
| Volume | Volume (0-1) |
| Balance | Left-right channel balance |
| Delay | Playback delay |

## Particle Events

### What are Particle Events?

Particle events trigger particle effects during animation playback.

### Creating Particle Events

1. Create regular event
2. Set particle parameters
3. Add event in animation

### Particle Parameters

| Parameter | Description |
|-----------|-------------|
| Name | Particle system name |
| Duration | Duration |
| Count | Particle count |
| Speed | Speed |

## Event Callbacks

### Listening to Events in Games

#### Unity (C#)

```csharp
skeletonAnimation.AnimationState.Event += (entry, e) => {
    if (e.Data.Name == "footstep") {
        // Play footstep sound
        AudioSource.Play(footstepSound);
    }
};
```

#### Unreal (C++)

```cpp
void AMyCharacter::OnSpineEvent(FString EventName) {
    if (EventName == "footstep") {
        // Play footstep sound
        UGameplayStatics::PlaySound2D(this, FootstepSound);
    }
}
```

#### Cocos2d (C++)

```cpp
void MyScene::onSpineEvent(spTrackEntry* entry, spEvent* event) {
    if (strcmp(event->data->name, "footstep") == 0) {
        // Play footstep sound
        CocosDenshion::SimpleAudioEngine::getInstance()->playEffect("footstep.mp3");
    }
}
```

## Event Best Practices

### Naming Conventions

- Use lowercase letters and hyphens
- Like `footstep`, `attack-hit`, `jump-start`
- Keep consistency

### Parameter Usage

- Use Int for integer parameters
- Use Float for float parameters
- Use String for string parameters

### Performance Considerations

- Avoid too many events
- Use audio events reasonably
- Optimize particle effects

## Official Video: Events & Audio

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Create Footstep Event

1. Create `footstep` event
2. Set audio file name
3. Add event in walk animation
4. Test audio playback

### Exercise 2: Create Attack Event

1. Create `attack-hit` event
2. Set damage value parameter
3. Add event in attack animation
4. Test event callback

## FAQ

### Q: How to add sound effects to animation?

A: Create audio event, set audio file name, add event in animation.

### Q: How to pass event parameters to game engine?

A: Through event callback function to get event object, read Int, Float, String properties.

### Q: How to optimize event performance?

A: Avoid too many events, use audio events reasonably, optimize particle effects.

## Next Steps

- [Export & Integration](/en/guide/export-integration) - Learn to export and integrate animations

