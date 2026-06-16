import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'How to Use Spine 2D',
  description: 'Spine Pro 2D 4.3 完整入门教程 - Complete Beginner Tutorial (2026)',
  base: '/how-to-use-spine-2d/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '中文', link: '/zh/' },
      { text: 'English', link: '/en/' },
      { text: 'Spine 官网', link: 'https://esotericsoftware.com' },
    ],
    sidebar: {
      '/zh/': [
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
      ],
      '/en/': [
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/how-to-use-spine-2d' },
    ],
    search: {
      provider: 'local',
    },
  },
})
