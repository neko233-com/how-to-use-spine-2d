# IK 与约束

## 什么是 IK？

IK（Inverse Kinematics，反向运动学）是一种动画技术，通过指定末端位置来自动计算中间骨骼的角度。

### IK vs FK

| 类型 | 说明 | 适用场景 |
|------|------|----------|
| FK (Forward Kinematics) | 从根部到末端逐个调整骨骼 | 手臂挥舞、尾巴摆动 |
| IK (Inverse Kinematics) | 指定末端位置，自动计算中间骨骼 | 腿部行走、手部抓取 |

## 创建 IK 约束

### 步骤

1. 选择 **Create IK** 工具
2. 点击 IK 链的起始骨骼（如大腿）
3. 点击 IK 链的结束骨骼（如脚）
4. 在属性面板中设置 IK 属性

### IK 属性

| 属性 | 说明 |
|------|------|
| Name | IK 名称 |
| Target | 目标骨骼 |
| Bones | IK 链中的骨骼 |
| Mix | IK 影响程度 (0-1) |
| Bend Direction | 弯曲方向 |
| Compress | 是否允许压缩 |
| Stretch | 是否允许拉伸 |

## IK 使用技巧

### 腿部 IK

1. 创建腿部骨骼链：hip → thigh → calf → foot
2. 创建 IK 约束：从 thigh 到 foot
3. 创建 IK 目标（target）放在脚部
4. 移动 IK 目标，腿部会自动调整

### 手臂 IK

1. 创建手臂骨骼链：shoulder → upper-arm → forearm → hand
2. 创建 IK 约束：从 upper-arm 到 hand
3. 创建 IK 目标放在手部
4. 移动 IK 目标，手臂会自动调整

### 弯曲方向

- **Clockwise**：顺时针弯曲
- **Counter-Clockwise**：逆时针弯曲
- **Mix**：混合两种方向

## 约束类型

### Transform Constraint（变换约束）

控制骨骼的变换相对于另一个骨骼。

#### 属性

| 属性 | 说明 |
|------|------|
| Target | 目标骨骼 |
| Bones | 受影响的骨骼 |
| Mix | 影响程度 |
| Offset | 偏移量 |

#### 使用场景

- 让武器跟随手部移动
- 让盾牌跟随手臂旋转

### Path Constraint（路径约束）

让骨骼沿着路径运动。

#### 属性

| 属性 | 说明 |
|------|------|
| Target | 路径 |
| Bones | 受影响的骨骼 |
| Mix | 影响程度 |
| Position | 位置 |
| Spacing | 间距 |

#### 使用场景

- 蛇的运动
- 绳子的摆动
- 沿路径移动的角色

### Physics Constraint（物理约束）

模拟物理效果。

#### 属性

| 属性 | 说明 |
|------|------|
| Bones | 受影响的骨骼 |
| Inertia | 惯性 |
| Strength | 强度 |
| Damping | 阻尼 |
| Mass | 质量 |
| Wind | 风力 |

#### 使用场景

- 头发飘动
- 衣服摆动
- 尾巴摇摆

## 约束优先级

### 设置优先级

1. 在大纲视图中调整约束顺序
2. 上面的约束优先级更高
3. 优先级影响约束的应用顺序

### 混合约束

- 多个约束可以同时影响同一个骨骼
- 通过 Mix 属性控制每个约束的影响程度
- 测试不同约束组合的效果

## 官方视频：IK 与约束

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLiUgGpXwJOSjEPXI-e6saKXK_s7BwudWJ" frameborder="0" allowfullscreen></iframe>

## 实战练习

### 练习 1：创建腿部 IK

1. 创建腿部骨骼链
2. 创建 IK 约束
3. 添加 IK 目标
4. 测试 IK 效果

### 练习 2：创建手臂 IK

1. 创建手臂骨骼链
2. 创建 IK 约束
3. 设置弯曲方向
4. 测试 IK 效果

### 练习 3：使用物理约束

1. 创建头发骨骼
2. 添加物理约束
3. 调整物理参数
4. 测试飘动效果

## 常见问题

### Q: IK 和 FK 哪个更好？

A: 没有绝对的好坏，根据动画需求选择。腿部适合 IK，手臂挥舞适合 FK。

### Q: IK 弯曲方向怎么设置？

A: 根据角色的自然姿势设置，通常腿部向后弯曲，手臂向前弯曲。

### Q: 如何让 IK 和 FK 混合使用？

A: 使用 Mix 属性控制 IK 的影响程度，实现 IK 和 FK 的混合。

## 下一步

- [蒙皮与权重](/guide/skinning-weights) - 学习蒙皮和权重绘制

