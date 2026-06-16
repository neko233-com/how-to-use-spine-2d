# 导出与集成

## 导出格式

### Spine 原生格式

| 格式 | 说明 | 文件扩展名 |
|------|------|------------|
| JSON | 通用格式，易读易编辑 | .json |
| 二进制 | 体积小，加载快 | .skel |

### 导出选项

| 选项 | 说明 |
|------|------|
| Pretty JSON | 格式化 JSON，易读但体积大 |
| Nonessential | 导出非必要数据 |
| Pack textures | 打包纹理图集 |

## 导出步骤

### 基本导出

1. 点击 **Export** 按钮
2. 选择导出格式（JSON 或二进制）
3. 设置导出选项
4. 选择导出目录
5. 点击 **Export**

### 导出设置

#### JSON 格式

- **Pretty JSON**：格式化输出，便于调试
- **Nonessential**：包含额外数据

#### 二进制格式

- 体积更小
- 加载更快
- 不易调试

### 纹理图集

#### 什么是纹理图集？

纹理图集是将多个图片打包成一张大图，减少 Draw Call，提高性能。

#### 导出纹理图集

1. 在导出设置中勾选 **Pack textures**
2. 设置图集参数
3. 导出图集文件

#### 图集参数

| 参数 | 说明 |
|------|------|
| Size | 图集尺寸 |
| Padding | 图片间距 |
| Bleed | 边缘扩展 |
| Rotation | 允许旋转 |

## 游戏引擎集成

### Unity

#### 安装 Spine Runtime

1. 下载 Spine Unity 运行时
2. 导入 Unity 项目
3. 配置导入设置

#### 导入动画

1. 将导出的文件放入 Unity 项目
2. 创建 Spine 组件
3. 配置动画参数

#### 播放动画

```csharp
// 获取 Spine 组件
var skeletonAnimation = GetComponent<SkeletonAnimation>();

// 播放动画
skeletonAnimation.AnimationState.SetAnimation(0, "walk", true);

// 混合动画
skeletonAnimation.AnimationState.SetAnimation(0, "idle", true);
skeletonAnimation.AnimationState.AddAnimation(0, "walk", true, 0);
```

### Unreal Engine

#### 安装 Spine Plugin

1. 下载 Spine Unreal 插件
2. 安装到 Unreal 项目
3. 启用插件

#### 导入动画

1. 将导出的文件放入 Unreal 项目
2. 创建 Spine 组件
3. 配置动画参数

#### 播放动画

```cpp
// 获取 Spine 组件
USpineSkeletonComponent* SpineComp = GetSpineComponent();

// 播放动画
SpineComp->SetAnimation("walk", true);

// 混合动画
SpineComp->SetAnimation("idle", true);
SpineComp->AddAnimation("walk", true, 0);
```

### Cocos2d-x

#### 安装 Spine Runtime

1. 下载 Spine Cocos2d-x 运行时
2. 集成到项目
3. 配置编译设置

#### 导入动画

1. 将导出的文件放入项目资源目录
2. 创建 Spine 节点
3. 配置动画参数

#### 播放动画

```cpp
// 创建 Spine 节点
auto skeletonNode = SkeletonAnimation::createWithFile("spineboy.json", "spineboy.atlas");

// 播放动画
skeletonNode->setAnimation(0, "walk", true);

// 混合动画
skeletonNode->setAnimation(0, "idle", true);
skeletonNode->addAnimation(0, "walk", true, 0);
```

## 事件监听

### Unity 事件监听

```csharp
skeletonAnimation.AnimationState.Event += (entry, e) => {
    Debug.Log("Event: " + e.Data.Name);
};
```

### Unreal 事件监听

```cpp
SpineComp->OnSpineEvent.AddDynamic(this, &AMyCharacter::OnSpineEvent);
```

### Cocos2d-x 事件监听

```cpp
skeletonNode->setEventListener([](spTrackEntry* entry, spEvent* event) {
    CCLOG("Event: %s", event->data->name);
});
```

## 性能优化

### 纹理优化

- 使用纹理图集
- 合理设置图集尺寸
- 压缩纹理格式

### 动画优化

- 减少关键帧数量
- 使用动画缓存
- 避免过多骨骼

### 内存优化

- 及时释放不用的动画
- 使用对象池
- 监控内存使用

## 官方视频：导出与集成

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## 实战练习

### 练习 1：导出动画

1. 打开之前的动画项目
2. 导出 JSON 格式
3. 导出纹理图集
4. 检查导出文件

### 练习 2：Unity 集成

1. 创建 Unity 项目
2. 导入 Spine 运行时
3. 导入 Spine 动画
4. 播放动画

## 常见问题

### Q: JSON 和二进制格式哪个好？

A: JSON 便于调试，二进制体积小、加载快，根据需求选择。

### Q: 纹理图集有什么作用？

A: 减少 Draw Call，提高渲染性能。

### Q: 如何优化 Spine 动画性能？

A: 使用纹理图集，减少关键帧，使用动画缓存，避免过多骨骼。

## 下一步

- [实战案例](/zh/guide/practical-examples) - 通过完整案例巩固所学知识

