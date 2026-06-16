# Images & Meshes

## Importing Images

### Supported Image Formats

- **PNG**: Supports transparency
- **JPG**: No transparency support
- **BMP**: Bitmap format

### Import Steps

1. Click **Images** panel
2. Click **Import** button
3. Select image files
4. Images will appear in Images panel

### Image Management

- **Rename**: Double-click image name
- **Delete**: Select image and press Delete
- **Replace**: Right-click and select **Replace**

## Binding Images to Bones

### Basic Binding

1. Select bone in outliner
2. Select image in Images panel
3. Image will automatically bind to bone

### Adjusting Image Position

1. Select bound image
2. Use Move tool to adjust position
3. Use Rotate tool to adjust angle
4. Use Scale tool to adjust size

### Image Properties

| Property | Description |
|----------|-------------|
| Position | Position (X, Y) |
| Rotation | Rotation angle |
| Scale | Scale (X, Y) |
| Origin | Origin point |
| Color | Color and opacity |

## Mesh

### What is a Mesh?

A mesh divides an image into multiple triangles, allowing individual control of each vertex for deformation effects.

### Mesh Advantages

- Enables smooth deformation animations
- Reduces image count
- More natural animation effects

### Use Cases

- Character facial expressions
- Cloth movement
- Body bending deformation

## Creating Meshes

### Steps

1. Select image
2. Click **Create Mesh** tool
3. Click on image to add vertices
4. Connect vertices to form triangles
5. Complete mesh creation

### Mesh Editing

#### Adding Vertices

1. Select **Edit Mesh** tool
2. Click on mesh edge to add vertex
3. Drag vertex to adjust position

#### Deleting Vertices

1. Select vertex to delete
2. Press Delete key

#### Adjusting Triangles

- Automatic triangulation
- Manually adjust triangle edges
- Optimize mesh structure

### Mesh Properties

| Property | Description |
|----------|-------------|
| Hull | Mesh boundary |
| Edges | Mesh edges |
| Triangles | Triangles |
| UV | Texture coordinates |

## Weight Painting

### What are Weights?

Weights define how much a mesh vertex is influenced by bones.

### Weight Values

- **0.0**: Completely unaffected
- **1.0**: Completely affected
- **0.5**: 50% influence

### Painting Weights

1. Select mesh
2. Select **Weight** tool
3. Select bone to paint
4. Drag on vertices to paint weights

### Weight Tips

- Use smooth tool for weight transitions
- Avoid sudden weight changes
- Test deformation effects

## Mesh Optimization

### Reducing Vertex Count

- Remove unnecessary vertices
- Merge nearby vertices
- Use fewer triangles

### Optimizing Triangles

- Avoid thin triangles
- Keep triangles evenly distributed
- Manually adjust triangle edges

### Testing Deformation

- Test mesh in different poses
- Check for stretching or tearing
- Adjust weights and mesh structure

## Official Video: Images & Meshes

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## Practice Exercises

### Exercise 1: Import and Bind Images

1. Prepare character body part images
2. Import images to Spine
3. Bind images to corresponding bones
4. Adjust image position and size

### Exercise 2: Create Simple Mesh

1. Select an image
2. Create mesh
3. Add vertices and triangles
4. Test mesh deformation

## FAQ

### Q: How to adjust image position after binding?

A: Select image and use Move, Rotate, Scale tools to adjust.

### Q: How to modify mesh after creation?

A: Use Edit Mesh tool to add, delete, move vertices.

### Q: Any tips for weight painting?

A: Use smooth tool, avoid sudden weight changes, test deformation frequently.

## Next Steps

- [Animation Basics](/en/guide/animation-basics) - Learn to create keyframe animations

