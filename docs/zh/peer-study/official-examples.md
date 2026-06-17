# 官方示例工程怎么读

Spine 官方示例页说明：示例工程包含项目文件，并且导出文件可以在 `spine-runtimes` GitHub 仓库中找到。你读这些工程时，不要只播放动画，要把它们当作“功能样板间”。

来源：

- [Spine Example Projects](https://esotericsoftware.com/spine-examples)
- [spine-runtimes examples](https://github.com/EsotericSoftware/spine-runtimes/tree/4.3/examples)

## 推荐阅读顺序

| 工程 | 重点 | 学习目标 |
| --- | --- | --- |
| Spineboy | mesh、IK、transform constraint、clipping | 学主角综合结构 |
| Mix-and-match | skins、换装、slot 复用 | 学可定制角色 |
| Goblins | 小怪复用、武器替换 | 学敌人量产 |
| Raptor | 兽类运动、尾巴延迟 | 学非人形 locomotion |
| Dragon | 大型生物、翅膀、尾巴链 | 学大型角色节奏 |
| Tank | 机械硬块、履带循环 | 学硬表面绑定 |
| Vine | 路径/连续曲线 | 学 path constraint 思路 |
| Coin | 小型 UI/奖励循环 | 学短动效压缩 |

## 拆工程时问自己

1. 这个工程的核心功能是什么？
2. 哪些骨骼是给美术看的，哪些骨骼是给动画师控制的？
3. slot 的稳定边界在哪里？
4. 哪些动画可以复用，哪些必须跟 skin 或 attachment 绑定？
5. 导出文件里哪些 timeline 是真正必要的？

## 复刻练习

不要照搬官方文件。每看一个示例，就用自己的素材做一个 20%-30% 复杂度的复刻：

- Spineboy → 做一个主角四状态：idle、walk、jump、attack。
- Mix-and-match → 做一个 2 身体、3 头发、3 武器的换装角色。
- Tank → 做一个炮塔旋转、履带循环、开火事件。
- Vine → 做一个藤蔓伸展和回弹。
- Coin → 做一个 30 帧 UI 奖励循环。

这样你学到的是方法，而不是把别人的工程当黑盒播放。
