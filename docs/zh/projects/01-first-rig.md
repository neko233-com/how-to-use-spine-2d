# 工程 01：第一个可控角色骨架

素材路径：`spine-demos/01-first-rig/images`

目标：从零搭建一个能转头、摆手、拿武器的 cutout 角色。这个工程不追求复杂动画，只训练 Spine 最基础但最重要的“结构感”。

## 1. 新建工程

1. 打开 Spine 4.3，新建空工程。
2. 在 Images 面板设置路径为 `spine-demos/01-first-rig/images`。
3. 保存为 `spine-demos/01-first-rig/first-rig.spine`。
4. 把单位感定下来：角色脚底在 y=0，身体中心在 x=0。

## 2. 骨骼层级

建议骨架：

```text
root
└── hip
    ├── pelvis
    ├── torso
    │   ├── chest
    │   │   ├── neck
    │   │   │   └── head
    │   │   ├── upper_arm_l
    │   │   │   └── forearm_l
    │   │   │       └── hand_l
    │   │   └── upper_arm_r
    │   │       └── forearm_r
    │   │           └── hand_r
    │   └── weapon
    ├── thigh_l
    │   └── calf_l
    │       └── foot_l
    └── thigh_r
        └── calf_r
            └── foot_r
```

## 3. 绑定顺序

先绑大块，再绑小块：

1. `pelvis`、`torso`、`head`。
2. 四肢从近端到远端：大臂、前臂、手，大腿、小腿、脚。
3. 武器和盾牌最后绑，因为它们经常需要换 attachment。

每个 PNG 放到对应 slot，slot 名用 `slot_` 前缀。新手常犯的错是把所有 attachment 都塞到同一个 slot，这会让 draw order 和换装非常难维护。

## 4. 原点规则

| 零件 | 原点放哪里 |
| --- | --- |
| 头 | 脖子连接处 |
| torso | 腰部或胸口旋转中心 |
| upper arm | 肩关节 |
| forearm | 肘关节 |
| hand | 手腕 |
| thigh | 髋关节 |
| calf | 膝盖 |
| foot | 脚踝 |
| sword | 手握点 |
| shield | 手臂绑带中心 |

原点错了不要硬做动画。回 Pose 模式修原点，再继续。

## 5. 第一个动画：`idle`

时间：60 帧，30 FPS，循环。

| 帧 | hip | chest | head | arms |
| --- | --- | --- | --- | --- |
| 0 | y=0 | 0 度 | 0 度 | 自然下垂 |
| 30 | y=3 | -2 度 | 1 度 | 手臂轻微外摆 |
| 60 | 回到 0 | 回到 0 | 回到 0 | 回到 0 |

技巧：idle 的幅度宁可小，不要像角色在原地跳。呼吸主要来自 chest 和 shoulder，不要只移动 root。

## 6. 必做检查

- 关闭所有图片，只看骨骼，层级仍然能读懂角色。
- 拖动 `hip`，全身跟随。
- 转动 `forearm_l`，手跟随但上臂不乱飞。
- 武器 slot 在手上，但 draw order 不盖住身体关键部位。
- 第一帧和最后一帧完全一致，循环不抖。
