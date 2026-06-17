<script setup lang="ts">
import { computed, ref } from 'vue'
import { demoCases, demoTracks } from '../data/demoCases'

const selectedTrack = ref('全部')
const selectedDifficulty = ref('全部')
const query = ref('')

const difficulties = ['全部', '入门', '进阶', '高级', '生产']
const tracks = ['全部', ...demoTracks]

const filteredCases = computed(() => {
  const text = query.value.trim().toLowerCase()
  return demoCases.filter((item) => {
    const matchTrack = selectedTrack.value === '全部' || item.track === selectedTrack.value
    const matchDifficulty = selectedDifficulty.value === '全部' || item.difficulty === selectedDifficulty.value
    const haystack = `${item.title} ${item.track} ${item.deliverable} ${item.features.join(' ')}`.toLowerCase()
    const matchQuery = !text || haystack.includes(text)
    return matchTrack && matchDifficulty && matchQuery
  })
})

const counts = computed(() => ({
  total: demoCases.length,
  shown: filteredCases.value.length,
  production: demoCases.filter((item) => item.difficulty === '生产').length,
  tracks: demoTracks.length,
}))

const spotlightCase = computed(() => filteredCases.value[0] ?? demoCases[0])
const difficultyRamp = ['入门', '进阶', '高级', '生产'].map((difficulty) => ({
  difficulty,
  count: demoCases.filter((item) => item.difficulty === difficulty).length,
}))
</script>

<template>
  <section class="demo-lab-shell">
    <div class="demo-lab-hero">
      <div>
        <p class="mono-line">Vite + Vue Interactive Catalog</p>
        <h1>Spine 4.3 Demo Lab</h1>
        <p>
          96 个案例按绑定、运动、战斗、mesh、约束、特效、运行时和 AI 管线组织。每个案例都要求交付一个可检查的 Spine 工程结果。
        </p>
      </div>
      <div class="demo-stats" aria-label="Demo statistics">
        <span><strong>{{ counts.total }}</strong> cases</span>
        <span><strong>{{ counts.tracks }}</strong> tracks</span>
        <span><strong>{{ counts.production }}</strong> production</span>
      </div>
    </div>

    <div class="demo-command-deck">
      <div class="spotlight-case">
        <span>{{ spotlightCase.id }}</span>
        <h2>{{ spotlightCase.title }}</h2>
        <p>{{ spotlightCase.track }} · {{ spotlightCase.time }} · {{ spotlightCase.deliverable }}</p>
        <div class="feature-list">
          <span v-for="feature in spotlightCase.features" :key="feature">{{ feature }}</span>
        </div>
      </div>
      <div class="difficulty-ramp">
        <div v-for="item in difficultyRamp" :key="item.difficulty">
          <strong>{{ item.count }}</strong>
          <span>{{ item.difficulty }}</span>
        </div>
      </div>
    </div>

    <div class="demo-controls">
      <label>
        搜索
        <input v-model="query" type="search" placeholder="比如 IK、attack、AI、Unity" />
      </label>
      <label>
        模块
        <select v-model="selectedTrack">
          <option v-for="track in tracks" :key="track">{{ track }}</option>
        </select>
      </label>
      <label>
        难度
        <select v-model="selectedDifficulty">
          <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
        </select>
      </label>
      <span class="result-count">{{ counts.shown }} / {{ counts.total }}</span>
    </div>

    <div class="demo-ledger" role="list">
      <article
        v-for="item in filteredCases"
        :key="item.id"
        class="demo-case"
        role="listitem"
      >
        <div class="case-topline">
          <span>{{ item.id }}</span>
          <em>{{ item.difficulty }}</em>
        </div>
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.track }} · {{ item.time }} · {{ item.deliverable }}</p>
        </div>
        <div class="feature-list">
          <span v-for="feature in item.features" :key="feature">{{ feature }}</span>
        </div>
        <code>{{ item.folder }}</code>
      </article>
    </div>
  </section>
</template>
