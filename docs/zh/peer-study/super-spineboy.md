# Super Spineboy：完整游戏级拆解

公开来源：[EsotericSoftware/spine-superspineboy](https://github.com/EsotericSoftware/spine-superspineboy)

Super Spineboy 是一个使用 Spine 和 spine-libgdx 的平台动作游戏公开案例。它值得单独研究，因为它不是单个动画文件，而是把 Spine 放进了输入、状态、镜头、敌人、射击和性能选项里。

## 它教你的不是“怎么画”

它更重要的价值在工程侧：

| 维度 | 观察点 | 你要复刻的能力 |
| --- | --- | --- |
| 输入 | 左右移动、跳跃、射击 | 动画状态由输入驱动 |
| 状态 | 站立、跑动、空中、攻击 | Spine 动画不是孤立播放 |
| 事件 | 射击、受击、命中反馈 | 逻辑时间点由事件对齐 |
| 架构 | 游戏逻辑和绘制分离 | 动画系统不污染核心逻辑 |
| 调试 | 速度控制、暂停、缩放 | 给动画师和程序都留调试入口 |

## 复刻路线

用 Vite + PixiJS 或你熟悉的引擎做一个迷你版：

1. Spine 里做 `idle`、`run`、`jump`、`shoot`。
2. Runtime 写状态机：`grounded`、`airborne`、`shooting`。
3. 事件 `shoot` 出现在开火帧，而不是按键瞬间。
4. 做一个动画速度调试滑杆。
5. 做一个 “show bones / show bounds” 调试开关。

## 工程思路

完整游戏里的 Spine 资产应该像“可被状态机调用的表现模块”：

- Spine 文件负责姿势、节奏、事件。
- 游戏代码负责输入、碰撞、伤害、镜头。
- 导出配置负责体积、图集、运行时版本一致。
- 调试工具负责让问题能被看见。

这个分工一旦清楚，你就不会把所有逻辑塞进动画，也不会把所有表现硬写进代码。
