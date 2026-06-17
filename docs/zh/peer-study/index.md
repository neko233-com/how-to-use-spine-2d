---
layout: page
title: 同行 Spine 工程研究室
aside: false
---

<PeerStudyMatrix />

## 研究边界

这里的“同行工程”只研究公开材料、官方示例和可合法访问的项目结构。我们不复制商业项目源文件，也不把第三方素材纳入仓库。你要学的是工程思路：为什么这样建骨骼、为什么这样命名 slot、为什么事件放在这一帧、为什么导出拆成这些文件。

公开来源入口：

- [Spine Example Projects](https://esotericsoftware.com/spine-examples)
- [EsotericSoftware/spine-runtimes](https://github.com/EsotericSoftware/spine-runtimes)
- [EsotericSoftware/spine-superspineboy](https://github.com/EsotericSoftware/spine-superspineboy)

## 拆解方法

每个项目都按五层看：

| 层 | 看什么 | 你要沉淀什么 |
| --- | --- | --- |
| 美术切分 | 哪些图是硬块，哪些图做 mesh | 自己的切图规范 |
| 骨骼结构 | root、hip、控制骨、IK target 怎么分 | 可复用骨架模板 |
| Slot 与 Skin | 哪些 slot 稳定，哪些 attachment 可替换 | 换装和复用策略 |
| Animation | 关键姿势、事件、曲线、循环点 | 动作节奏库 |
| Runtime | 导出格式、事件监听、状态机、性能预算 | 引擎接入清单 |
