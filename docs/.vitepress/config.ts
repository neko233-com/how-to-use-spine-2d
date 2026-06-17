import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '入门基础',
    items: [
      { text: 'Spine 简介', link: '/zh/guide/introduction' },
      { text: '安装与配置', link: '/zh/guide/installation' },
      { text: '界面概览', link: '/zh/guide/interface' },
    ],
  },
  {
    text: '核心功能',
    items: [
      { text: '骨骼系统', link: '/zh/guide/skeleton' },
      { text: '图片与网格', link: '/zh/guide/images-meshes' },
      { text: '动画基础', link: '/zh/guide/animation-basics' },
      { text: 'IK 与约束', link: '/zh/guide/ik-constraints' },
      { text: '蒙皮与权重', link: '/zh/guide/skinning-weights' },
      { text: '事件与音频', link: '/zh/guide/events-audio' },
    ],
  },
  {
    text: '进阶应用',
    items: [
      { text: '导出与集成', link: '/zh/guide/export-integration' },
      { text: '实战案例', link: '/zh/guide/practical-examples' },
    ],
  },
  {
    text: 'Spine 4.3 实战工程',
    items: [
      { text: 'Demo Lab 案例库', link: '/zh/demo-cases/' },
      { text: '工程路线', link: '/zh/projects/' },
      { text: '01 第一个骨架', link: '/zh/projects/01-first-rig' },
      { text: '02 行走与 IK', link: '/zh/projects/02-walk-run-ik' },
      { text: '03 Mesh 与披风', link: '/zh/projects/03-mesh-face-cape' },
      { text: '04 攻击与事件', link: '/zh/projects/04-combat-events' },
      { text: '05 Boss 与约束', link: '/zh/projects/05-boss-constraints' },
    ],
  },
  {
    text: '同行工程拆解',
    items: [
      { text: '研究室', link: '/zh/peer-study/' },
      { text: '官方示例怎么读', link: '/zh/peer-study/official-examples' },
      { text: 'Super Spineboy 拆解', link: '/zh/peer-study/super-spineboy' },
      { text: '生产模式', link: '/zh/peer-study/production-patterns' },
      { text: '复刻模板', link: '/zh/peer-study/rebuild-template' },
    ],
  },
  {
    text: '素材与速查',
    items: [
      { text: 'GPT image2 素材流水线', link: '/zh/pipeline/gpt-image2-assets' },
      { text: '实战技巧速查', link: '/zh/cheatsheets/production-tips' },
      { text: '工程检查表', link: '/zh/cheatsheets/spine-43-checklist' },
    ],
  },
]

export default defineConfig({
  title: 'How to Use Spine 2D',
  description: 'Spine Pro 2D 4.3 完整入门教程 - Complete Beginner Tutorial (2026)',
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  ignoreDeadLinks: [/./],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '教程', link: '/zh/guide/introduction' },
          { text: 'Demo Lab', link: '/zh/demo-cases/' },
          { text: '实战工程', link: '/zh/projects/' },
          { text: '同行拆解', link: '/zh/peer-study/' },
          { text: 'AI 素材流水线', link: '/zh/pipeline/gpt-image2-assets' },
          { text: 'Spine 官网', link: 'https://esotericsoftware.com' },
        ],
        sidebar: {
          '/zh/guide/': zhSidebar,
          '/zh/projects/': zhSidebar,
          '/zh/pipeline/': zhSidebar,
          '/zh/cheatsheets/': zhSidebar,
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'How to Use Spine 2D',
      description: 'Complete Beginner Tutorial for Spine Pro 2D 4.3 (2026)',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Tutorial', link: '/en/guide/introduction' },
          { text: 'Spine Official', link: 'https://esotericsoftware.com' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/en/guide/introduction' },
              { text: 'Installation', link: '/en/guide/installation' },
              { text: 'Interface Overview', link: '/en/guide/interface' },
            ],
          },
          {
            text: 'Core Features',
            items: [
              { text: 'Skeleton System', link: '/en/guide/skeleton' },
              { text: 'Images & Meshes', link: '/en/guide/images-meshes' },
              { text: 'Animation Basics', link: '/en/guide/animation-basics' },
              { text: 'IK & Constraints', link: '/en/guide/ik-constraints' },
              { text: 'Skinning & Weights', link: '/en/guide/skinning-weights' },
              { text: 'Events & Audio', link: '/en/guide/events-audio' },
            ],
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Export & Integration', link: '/en/guide/export-integration' },
              { text: 'Practical Examples', link: '/en/guide/practical-examples' },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/how-to-use-spine-2d' },
    ],
    search: {
      provider: 'local',
    },
  },
})
