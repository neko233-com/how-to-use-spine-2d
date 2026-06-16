import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'How to Use Spine 2D',
  description: 'Spine Pro 2D 4.3 完整入门教程 - Complete Beginner Tutorial (2026)',
  base: '/how-to-use-spine-2d/',
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'English', link: '/en/' },
          { text: 'Spine 官网', link: 'https://esotericsoftware.com' },
        ],
        sidebar: [
          {
            text: '入门基础',
            items: [
              { text: 'Spine 简介', link: '/guide/introduction' },
              { text: '安装与配置', link: '/guide/installation' },
              { text: '界面概览', link: '/guide/interface' },
            ],
          },
          {
            text: '核心功能',
            items: [
              { text: '骨骼系统', link: '/guide/skeleton' },
              { text: '图片与网格', link: '/guide/images-meshes' },
              { text: '动画基础', link: '/guide/animation-basics' },
              { text: 'IK 与约束', link: '/guide/ik-constraints' },
              { text: '蒙皮与权重', link: '/guide/skinning-weights' },
              { text: '事件与音频', link: '/guide/events-audio' },
            ],
          },
          {
            text: '进阶应用',
            items: [
              { text: '导出与集成', link: '/guide/export-integration' },
              { text: '实战案例', link: '/guide/practical-examples' },
            ],
          },
        ],
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
          { text: '中文', link: '/' },
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
      { icon: 'github', link: 'https://github.com/neko233-com/how-to-use-spine-2d' },
    ],
    search: {
      provider: 'local',
    },
  },
})
