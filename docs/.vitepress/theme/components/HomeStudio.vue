<script setup lang="ts">
import { demoCases } from '../data/demoCases'
import { peerProjects } from '../data/peerProjects'

const tracks = Array.from(new Set(demoCases.map((item) => item.track)))
const productionCases = demoCases.filter((item) => item.difficulty === '生产').length
const heroSignals = ['Rig', 'Mesh', 'IK', 'Events']
const featuredCases = demoCases.filter((item) => ['combat-025', 'mesh-039', 'constraint-057'].includes(item.id))
const heroParts = [
  { src: '/showcase/hero-cape.png', className: 'part cape', alt: 'Cape mesh part' },
  { src: '/showcase/hero-torso.png', className: 'part torso', alt: 'Torso cutout part' },
  { src: '/showcase/hero-head.png', className: 'part head', alt: 'Head cutout part' },
  { src: '/showcase/hero-sword.png', className: 'part sword', alt: 'Sword attachment part' },
  { src: '/showcase/hero-slash.png', className: 'part slash', alt: 'Slash VFX part' },
  { src: '/showcase/hero-core.png', className: 'part core', alt: 'Boss core part' },
]
</script>

<template>
  <main class="home-studio">
    <section class="studio-hero" aria-labelledby="studio-title">
      <div class="hero-copy">
        <div class="studio-mark" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="mono-line">Spine 4.3 · VitePress + Vue Demo Lab</p>
        <h1 id="studio-title">How to Use Spine 2D</h1>
        <p class="hero-lead">
          从零建立骨架、素材管线、实战工程和同行拆解方法，最后能把 Spine 动画稳定交付到游戏运行时。
        </p>
        <div class="hero-proof" aria-label="Core learning signals">
          <span v-for="signal in heroSignals" :key="signal">{{ signal }}</span>
        </div>
        <div class="hero-actions">
          <a class="primary-action" href="/zh/demo-cases/">打开 Demo Lab</a>
          <a class="secondary-action" href="/zh/peer-study/">研究同行工程</a>
        </div>
      </div>

      <div class="hero-stage" aria-hidden="true">
        <div class="stage-grid"></div>
        <div class="stage-rail rail-a"></div>
        <div class="stage-rail rail-b"></div>
        <div class="stage-caption">
          <strong>Spine 4.3</strong>
          <span>pose · weight · event · export</span>
        </div>
        <img
          v-for="part in heroParts"
          :key="part.src"
          :class="part.className"
          :src="part.src"
          :alt="part.alt"
        />
        <i v-for="n in 14" :key="n" class="bone-dot"></i>
        <div class="timeline">
          <span v-for="n in 9" :key="n"></span>
        </div>
      </div>
    </section>

    <section class="studio-metrics" aria-label="Course scale">
      <div>
        <strong>{{ demoCases.length }}</strong>
        <span>分级实战案例</span>
      </div>
      <div>
        <strong>{{ tracks.length }}</strong>
        <span>训练模块</span>
      </div>
      <div>
        <strong>{{ productionCases }}</strong>
        <span>生产级挑战</span>
      </div>
      <div>
        <strong>{{ peerProjects.length }}</strong>
        <span>公开工程拆解</span>
      </div>
    </section>

    <section class="studio-section split">
      <div>
        <p class="mono-line">Curriculum</p>
        <h2>从按钮教程，升级成工程训练。</h2>
      </div>
      <div class="track-list">
        <a
          v-for="track in tracks"
          :key="track"
          href="/zh/demo-cases/"
        >
          <span>{{ track }}</span>
          <small>{{ demoCases.filter((item) => item.track === track).length }} cases</small>
        </a>
      </div>
    </section>

    <section class="studio-section lab-preview">
      <div class="section-heading">
        <p class="mono-line">Vite + Vue</p>
        <h2>Demo Lab 是交互式的，不是一页死文档。</h2>
      </div>
      <div class="lab-preview-layout">
        <a
          v-for="item in featuredCases"
          :key="item.id"
          class="feature-case"
          href="/zh/demo-cases/"
        >
          <span>{{ item.id }}</span>
          <strong>{{ item.title }}</strong>
          <small>{{ item.track }} · {{ item.deliverable }}</small>
        </a>
        <div class="lab-rows">
          <a
            v-for="item in demoCases.slice(0, 8)"
            :key="item.id"
            class="lab-row"
            href="/zh/demo-cases/"
          >
            <span>{{ item.id }}</span>
            <strong>{{ item.title }}</strong>
            <em>{{ item.difficulty }}</em>
          </a>
        </div>
      </div>
    </section>

    <section class="studio-section split peer-preview">
      <div>
        <p class="mono-line">Peer Study</p>
        <h2>单独拆同行工程：看结构、看意图、再复刻。</h2>
      </div>
      <div class="peer-lines">
        <a
          v-for="project in peerProjects.slice(0, 6)"
          :key="project.name"
          href="/zh/peer-study/"
        >
          <span>{{ project.name }}</span>
          <small>{{ project.readFor.slice(0, 3).join(' · ') }}</small>
        </a>
      </div>
    </section>

    <section class="studio-final">
      <h2>先用内置 PNG 练会，再用 GPT image2 批量换美术。</h2>
      <a class="primary-action" href="/zh/pipeline/gpt-image2-assets">查看素材流水线</a>
    </section>
  </main>
</template>
