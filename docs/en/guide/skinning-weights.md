# Skinning & Weights

## What is Skinning?

Skinning is the process of binding meshes to the skeletal system, enabling meshes to follow bone movement and produce deformation.

## Skinning Types

### Linear Blend Skinning

- Most commonly used skinning method
- Each vertex is influenced by multiple bones
- Influence controlled by weights

### Linear Blend Formula

```
final_position = Σ(weight_i * bone_i_transform * original_position)
```

## Weight Painting

### What are Weights?

Weights define how much a mesh vertex is influenced by bones.

### Weight Value Range

- **0.0**: Completely unaffected
- **1.0**: Completely affected
- **0.5**: 50% influence

### Weight Painting Steps

1. Select mesh
2. Select **Weight** tool
3. Select bone to paint
4. Drag on vertices to paint weights

### Weight Painting Modes

| Mode | Description |
|------|-------------|
| Add | Add weight |
| Replace | Replace weight |
| Subtract | Subtract weight |
| Smooth | Smooth weight |

## Weight Painting Tips

### Using Smooth Tool

1. Select **Smooth** mode
2. Drag in weight transition areas
3. Smooth weight value transitions

### Avoiding Weight Sudden Changes

- Weight changes should be smooth
- Avoid large weight differences between adjacent vertices
- Use smooth tool to correct

### Testing Deformation

1. Test mesh in different poses
2. Check for stretching or tearing
3. Adjust weights to fix issues

## Auto Weight

### Using Auto Weight

1. Select mesh
2. Click **Auto Weight** button
3. Spine will auto-calculate weights
4. Manually adjust inaccurate parts

### Auto Weight Limitations

- May not be precise enough
- Complex meshes need manual adjustment
- Recommend manual optimization after auto weight

## Weight Optimization

### Reducing Bone Influence Count

- Each vertex influenced by max 4 bones
- Remove weights with minimal influence
- Optimize performance

### Weight Normalization

- Ensure all weights sum to 1.0
- Use **Normalize** function for auto-normalization
- Avoid weight anomalies

### Weight Mirroring

- Use **Mirror** function to mirror weights
- Maintain left-right symmetry
- Save painting time

## Skinning Workflow

### Complete Workflow

1. **Create Bones**: Build skeleton structure
2. **Import Images**: Import character images
3. **Create Meshes**: Convert images to meshes
4. **Bind Meshes**: Bind meshes to bones
5. **Paint Weights**: Adjust weight values
6. **Test Deformation**: Test in different poses

### Best Practices

- Create complete skeleton first
- Then import images and create meshes
- Finally paint weights
- Test while painting

## Official Video: Skinning & Weights

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Arm Skinning

1. Create arm bones
2. Import arm images
3. Create mesh
4. Paint weights
5. Test bending effect

### Exercise 2: Leg Skinning

1. Create leg bones
2. Import leg images
3. Create mesh
4. Paint weights
5. Test walking effect

## FAQ

### Q: Stretching after weight painting, what to do?

A: Adjust weight values, ensure smooth transitions, use smooth tool to correct.

### Q: How to quickly paint symmetrical weights?

A: Use mirror function. Paint one side first, then mirror to the other side.

### Q: Max bones per vertex?

A: Recommended max 4, more affects performance and results.

## Next Steps

- [Events & Audio](/en/guide/events-audio) - Learn to add events and audio

