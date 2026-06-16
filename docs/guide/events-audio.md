# 事件与音频

## 什么是事件？

事件（Events）是 Spine 动画中用于触发动画播放时的特定行为的标记。

## 事件类型

### 基本事件

- **Event**：通用事件
- **Audio**：音频事件
- **Particle**：粒子事件

### 事件属性

| 属性 | 说明 |
|------|------|
| Name | 事件名称 |
| Int | 整数值 |
| Float | 浮点值 |
| String | 字符串值 |

## 创建事件

### 步骤

1. 点击 **Events** 面板
2. 点击 **New** 按钮
3. 输入事件名称
4. 设置事件属性
5. 点击 **Create**

### 事件命名

- 使用有意义的名称
- 如 `footstep`、`attack-hit`、`sound-effect`
- 避免使用特殊字符

## 添加事件到动画

### 步骤

1. 在时间轴上选择目标帧
2. 在 Events 面板中选中事件
3. 点击 **Add** 按钮
4. 事件会显示在时间轴上

### 事件属性设置

#### Int 值

- 用于传递整数参数
- 如攻击伤害值、动画索引

#### Float 值

- 用于传递浮点参数
- 如音量大小、速度倍率

#### String 值

- 用于传递字符串参数
- 如音频文件名、消息内容

## 音频事件

### 什么是音频事件？

音频事件用于在动画播放时播放音效或音乐。

### 创建音频事件

1. 创建普通事件
2. 设置 String 属性为音频文件名
3. 在动画中添加事件

### 音频文件格式

- **MP3**：最常用的音频格式
- **OGG**：开源格式，游戏常用
- **WAV**：无损格式，文件较大

### 音频属性

| 属性 | 说明 |
|------|------|
| Volume | 音量 (0-1) |
| Balance | 左右声道平衡 |
| Delay | 播放延迟 |

## 粒子事件

### 什么是粒子事件？

粒子事件用于在动画播放时触发粒子效果。

### 创建粒子事件

1. 创建普通事件
2. 设置粒子参数
3. 在动画中添加事件

### 粒子参数

| 参数 | 说明 |
|------|------|
| Name | 粒子系统名称 |
| Duration | 持续时间 |
| Count | 粒子数量 |
| Speed | 速度 |

## 事件回调

### 在游戏中监听事件

#### Unity (C#)

```csharp
skeletonAnimation.AnimationState.Event += (entry, e) => {
    if (e.Data.Name == "footstep") {
        // 播放脚步声
        AudioSource.Play(footstepSound);
    }
};
```

#### Unreal (C++)

```cpp
void AMyCharacter::OnSpineEvent(FString EventName) {
    if (EventName == "footstep") {
        // 播放脚步声
        UGameplayStatics::PlaySound2D(this, FootstepSound);
    }
}
```

#### Cocos2d (C++)

```cpp
void MyScene::onSpineEvent(spTrackEntry* entry, spEvent* event) {
    if (strcmp(event->data->name, "footstep") == 0) {
        // 播放脚步声
        CocosDenshion::SimpleAudioEngine::getInstance()->playEffect("footstep.mp3");
    }
}
```

## 事件最佳实践

### 命名规范

- 使用小写字母和连字符
- 如 `footstep`、`attack-hit`、`jump-start`
- 保持一致性

### 参数使用

- 使用 Int 传递整数参数
- 使用 Float 传递浮点参数
- 使用 String 传递字符串参数

### 性能考虑

- 避免过多事件
- 合理使用音频事件
- 优化粒子效果

## 官方视频：事件与音频

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## 实战练习

### 练习 1：创建脚步声事件

1. 创建 `footstep` 事件
2. 设置音频文件名
3. 在行走动画中添加事件
4. 测试音频播放

### 练习 2：创建攻击事件

1. 创建 `attack-hit` 事件
2. 设置伤害值参数
3. 在攻击动画中添加事件
4. 测试事件回调

## 常见问题

### Q: 如何在动画中添加音效？

A: 创建音频事件，设置音频文件名，在动画中添加事件。

### Q: 事件参数怎么传递到游戏引擎？

A: 通过事件回调函数获取事件对象，读取 Int、Float、String 属性。

### Q: 如何优化事件性能？

A: 避免过多事件，合理使用音频事件，优化粒子效果。

## 下一步

- [导出与集成](/guide/export-integration) - 学习导出动画并集成到游戏引擎

