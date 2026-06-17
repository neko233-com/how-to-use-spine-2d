# How to Use Spine 2D

> Spine Pro 2D 4.3 完整入门教程 - Complete Beginner Tutorial (2026)

[![Deploy VitePress site to Pages](https://github.com/your-username/how-to-use-spine-2d/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/how-to-use-spine-2d/actions/workflows/deploy.yml)

## 简介 | Introduction

本教程面向 Spine Pro 2D 4.3 版本，从零开始介绍如何使用 Spine 制作游戏动画。

This tutorial covers Spine Pro 2D 4.3, introducing how to use Spine for game animation from scratch.

## 内容 | Content

### 入门基础 | Getting Started

- [Spine 简介 | Introduction](docs/zh/guide/introduction.md)
- [安装与配置 | Installation](docs/zh/guide/installation.md)
- [界面概览 | Interface Overview](docs/zh/guide/interface.md)

### 核心功能 | Core Features

- [骨骼系统 | Skeleton System](docs/zh/guide/skeleton.md)
- [图片与网格 | Images & Meshes](docs/zh/guide/images-meshes.md)
- [动画基础 | Animation Basics](docs/zh/guide/animation-basics.md)
- [IK 与约束 | IK & Constraints](docs/zh/guide/ik-constraints.md)
- [蒙皮与权重 | Skinning & Weights](docs/zh/guide/skinning-weights.md)
- [事件与音频 | Events & Audio](docs/zh/guide/events-audio.md)

### 进阶应用 | Advanced

- [导出与集成 | Export & Integration](docs/zh/guide/export-integration.md)
- [实战案例 | Practical Examples](docs/zh/guide/practical-examples.md)

### Spine 4.3 Demo Lab

- [Vite + Vue 交互 Demo Lab](docs/zh/demo-cases/index.md)
- [实战工程路线](docs/zh/projects/index.md)
- [同行 Spine 工程研究室](docs/zh/peer-study/index.md)
- [GPT image2 素材与切图流水线](docs/zh/pipeline/gpt-image2-assets.md)
- [实战技巧速查](docs/zh/cheatsheets/production-tips.md)
- [工程检查表](docs/zh/cheatsheets/spine-43-checklist.md)
- [可导入透明 PNG 示例素材](spine-demos/README.md)

## 在线文档 | Online Documentation

访问在线文档：[https://your-username.github.io/how-to-use-spine-2d](https://your-username.github.io/how-to-use-spine-2d)

Visit online docs: [https://your-username.github.io/how-to-use-spine-2d](https://your-username.github.io/how-to-use-spine-2d)

## 本地运行 | Local Development

```bash
# 安装依赖 | Install dependencies
npm install

# 生成本地示例 PNG 素材 | Generate local demo PNG assets
python tools/create_demo_assets.py

# 启动开发服务器 | Start dev server
npm run dev

# 构建静态文件 | Build static files
npm run build

# 预览构建结果 | Preview build
npm run preview
```

## AI 素材工作流 | AI Asset Workflow

`assets/image2/prompts/gpt-image2-spine-pack.jsonl` 提供了可直接用于 GPT image2 的 Spine 零件图提示词。生成绿幕源图后，用下面的工具切成透明 PNG：

```bash
python tools/slice_chroma_sheet.py \
  --input assets/image2/source-sheets/hero_parts_sheet.png \
  --out-dir spine-demos/01-first-rig/images-ai \
  --names assets/image2/prompts/part-name-order.txt
```

## 同行工程研究 | Peer Study

同行拆解资料放在 `docs/zh/peer-study` 和 `peer-study`。这里只研究公开来源和工程思路，不复制第三方专有资产。

公开入口：

- [Spine Example Projects](https://esotericsoftware.com/spine-examples)
- [spine-runtimes](https://github.com/EsotericSoftware/spine-runtimes)
- [Super Spineboy](https://github.com/EsotericSoftware/spine-superspineboy)

## 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

Welcome to submit Issues and Pull Requests!

## 许可证 | License

MIT

## 致谢 | Credits

- [Spine](https://esotericsoftware.com) - Esoteric Software
- [VitePress](https://vitepress.dev) - Vue-powered static site generator
