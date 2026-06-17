# GPT image2 素材与切图流水线

这一章解决一个真实生产问题：AI 图很好看，但 Spine 需要的是透明、分层、命名稳定、能绑定骨骼的零件图。你的目标不是生成“一张角色立绘”，而是生成“可以被切成很多 attachment 的源图”。

## 产出结构

本仓库已经准备了三件事：

| 路径 | 用途 |
| --- | --- |
| `assets/image2/prompts/gpt-image2-spine-pack.jsonl` | GPT image2 批量提示词 |
| `assets/image2/prompts/part-name-order.txt` | 自动切图后的命名顺序参考 |
| `tools/slice_chroma_sheet.py` | 绿幕去底、连通区域切片、生成 manifest |

当前环境没有配置 `OPENAI_API_KEY`，所以我没有用 CLI 直接调用 GPT image2。你可以先用仓库内置的透明 PNG 示例学习 Spine；等本机 key 配好后，再用这些提示词批量替换为 AI 美术。

## 生成提示词原则

对 Spine 最友好的提示词必须强调这些约束：

1. `parts sheet`：明确要求“零件表”，不是完整角色海报。
2. `separated opaque parts`：每个零件独立、不重叠。
3. `orthographic sprite sheet layout`：不要透视镜头、不要场景。
4. `perfectly flat solid #00ff00 chroma-key background`：方便工具去底。
5. `no text, no labels, no shadows`：避免切图时把文字、阴影也切出来。
6. `do not use #00ff00 in the subject`：角色本体不要出现绿幕色。

## 推荐工作流

1. 用 `assets/image2/prompts/gpt-image2-spine-pack.jsonl` 生成源图。
2. 把源图放到 `assets/image2/source-sheets/`，例如 `hero_parts_sheet.png`。
3. 运行切图：

```bash
python tools/slice_chroma_sheet.py \
  --input assets/image2/source-sheets/hero_parts_sheet.png \
  --out-dir spine-demos/01-first-rig/images-ai \
  --names assets/image2/prompts/part-name-order.txt \
  --prefix hero
```

4. 打开 `slice-manifest.json` 检查每个零件是否完整。
5. 在 Spine 里把 Images 路径切到 `images-ai`。
6. 如果自动切错，回到提示词，增加“larger padding, no overlaps, no tiny debris”。

## 切图后的检查表

| 检查项 | 合格标准 | 不合格处理 |
| --- | --- | --- |
| 透明边缘 | 四角透明，无绿色毛边 | 增大 `--threshold` 或重新生成 |
| 零件数量 | 和预期部位基本一致 | 调低 `--min-area` 或重生成 |
| 零件完整 | 没有被裁掉手脚/武器尖端 | 重新提示 “no cropped edges” |
| 命名 | Spine attachment 名稳定 | 修改 `part-name-order.txt` 后重切 |
| 风格 | 同一角色光源和比例一致 | 生成整套 parts sheet，少混用多张图 |

## 实战技巧

- 身体、脸、特效分开生成，成功率通常比“一次生成所有东西”高。
- 需要换装时，不要重画骨架，生成同样部位命名的装备 attachment。
- 用大块图做新手练习，用细节图做高级表现；过早追求细碎零件会拖慢学习。
- 绿幕色只用于源图，切完必须转成透明 PNG，Spine 工程里不要保留绿底图。
- AI 图切片后第一件事不是绑骨骼，而是统一 pivot/origin。原点没定好，后面每个动画都会难修。

## 什么时候手动切

自动切图适合“互相分离的零件表”。下面情况建议手动处理：

- 头发丝、火焰、半透明烟雾。
- 两个零件靠得太近，连通区域粘在一起。
- 武器或布料有复杂洞口。
- 同一零件被 AI 画成多个断裂小块。

这时可以在图像编辑器里把问题零件单独抠出，再放回对应 `images` 文件夹，保持文件名不变。
