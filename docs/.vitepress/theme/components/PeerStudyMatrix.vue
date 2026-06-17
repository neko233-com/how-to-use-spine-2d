<script setup lang="ts">
import { computed, ref } from 'vue'
import { peerPrinciples, peerProjects } from '../data/peerProjects'

const selectedType = ref('全部')
const query = ref('')
const types = ['全部', ...Array.from(new Set(peerProjects.map((item) => item.type)))]

const filteredProjects = computed(() => {
  const text = query.value.trim().toLowerCase()
  return peerProjects.filter((project) => {
    const matchType = selectedType.value === '全部' || project.type === selectedType.value
    const haystack = `${project.name} ${project.source} ${project.readFor.join(' ')} ${project.engineeringIdea}`.toLowerCase()
    return matchType && (!text || haystack.includes(text))
  })
})
</script>

<template>
  <section class="peer-study-shell">
    <div class="peer-hero">
      <div>
        <p class="mono-line">Public Project Deconstruction</p>
        <h1>同行 Spine 工程研究室</h1>
        <p>
          这里专门拆公开项目的结构和思路：看他们为什么这样分骨骼、做 skin、放事件、处理 runtime，而不是照抄素材。
        </p>
      </div>
      <ol>
        <li v-for="principle in peerPrinciples" :key="principle">{{ principle }}</li>
      </ol>
    </div>

    <div class="peer-controls">
      <label>
        搜索
        <input v-model="query" type="search" placeholder="比如 skin、IK、完整游戏" />
      </label>
      <label>
        类型
        <select v-model="selectedType">
          <option v-for="type in types" :key="type">{{ type }}</option>
        </select>
      </label>
      <span>{{ filteredProjects.length }} / {{ peerProjects.length }}</span>
    </div>

    <div class="peer-grid">
      <article
        v-for="project in filteredProjects"
        :key="project.name"
        class="peer-project"
      >
        <div class="case-topline">
          <span>{{ project.type }}</span>
          <em>{{ project.source }}</em>
        </div>
        <h2>{{ project.name }}</h2>
        <p>{{ project.engineeringIdea }}</p>
        <div class="feature-list">
          <span v-for="tag in project.readFor" :key="tag">{{ tag }}</span>
        </div>
        <strong>复刻任务</strong>
        <p>{{ project.rebuildAssignment }}</p>
        <a :href="project.publicPath" target="_blank" rel="noreferrer">打开公开来源</a>
      </article>
    </div>
  </section>
</template>
