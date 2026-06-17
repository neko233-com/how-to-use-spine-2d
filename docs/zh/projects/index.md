# Spine 4.3 实战工程路线

这套路线按“能做出来、能看懂、能复用”的顺序设计。每个工程都对应 `spine-demos/` 下的透明 PNG 素材，你需要在 Spine 4.3 里亲手创建 `.spine` 文件。

如果你想按案例筛选练习，打开 [Vite + Vue Demo Lab](/zh/demo-cases/)。那里维护了 96 个分级案例，适合长期刷题式训练。

## 学习顺序

| 阶段 | 工程 | 你会学会 |
| --- | --- | --- |
| 1 | `01-first-rig` | 图片导入、骨骼层级、slot、draw order、原点 |
| 2 | `02-walk-run-ik` | 待机、行走、奔跑、脚部 IK、循环检查 |
| 3 | `03-mesh-face-cape` | mesh、权重、deform、表情与布料 |
| 4 | `04-combat-events` | 攻击节奏、事件、换附件、特效同步 |
| 5 | `05-boss-constraints` | transform/path 约束、二级运动、大型角色优化 |
| 6 | `06-export-runtime-pack` | JSON/Skel/Atlas 导出、Unity/Cocos/Web 集成检查 |

## 统一工程规范

所有工程都使用这套命名：

| 类型 | 命名例子 | 说明 |
| --- | --- | --- |
| 骨骼 | `hip`, `chest`, `upper_arm_l` | 小写蛇形命名，左右用 `_l` / `_r` |
| Slot | `slot_head`, `slot_weapon` | slot 名明确表达绘制层 |
| Attachment | `head`, `sword_blade` | 尽量和 PNG 文件名一致 |
| Skin | `default`, `armor_01` | 换装从 skin 开始，不复制骨架 |
| Animation | `idle`, `walk`, `attack_01` | 游戏里直接调用的名字 |
| Event | `footstep_l`, `hit`, `land` | 用事件驱动音效、伤害、特效 |

## 每个工程都要交付什么

1. 一个 `.spine` 源文件。
2. 一个 `images` 文件夹或 AI 替换后的 `images-ai` 文件夹。
3. 至少三个动画：一个循环、一个非循环、一个带事件。
4. 一次 JSON 导出和一次二进制 `.skel` 导出。
5. 一张你自己的问题记录：哪里变形怪、哪里命名乱、哪里想复用。

## 练习方法

不要一次看完所有章节。每个工程按这个节奏做：

1. 先照着步骤做出“能动”的版本。
2. 再重开一个文件，不看教程复刻一遍。
3. 最后把素材换成 AI 版本，看原点、比例、网格是否还能成立。

真正学会 Spine 的标志不是“看懂按钮”，而是你能把一套新素材稳定拆成骨架、slot、约束、动画和导出文件。
