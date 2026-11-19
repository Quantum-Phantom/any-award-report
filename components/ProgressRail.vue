<script setup lang="ts">
withDefaults(defineProps<{
  active?: number
  mini?: boolean
}>(), {
  active: 0,
  mini: false,
})

const sections = [
  { n: '一', label: '视觉系统', en: 'SYSTEM' },
  { n: '二', label: '五幕实现', en: 'SCENES' },
  { n: '三', label: '工程边界', en: 'BOUNDARY' },
  { n: '四', label: '复盘', en: 'REVIEW' },
]
</script>

<template>
  <div class="progress-rail" :class="{ mini }">
    <div
      v-for="(section, index) in sections"
      :key="section.label"
      class="rail-item"
      :class="{ current: index === active, passed: index < active }"
    >
      <span class="rail-n">{{ section.n }}</span>
      <span class="rail-label">{{ section.label }}</span>
      <span v-if="!mini" class="rail-en">{{ section.en }}</span>
      <span class="rail-line" />
    </div>
  </div>
</template>

<style scoped>
.progress-rail {
  display: flex;
  align-items: stretch;
  gap: 26px;
}
.rail-item {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  align-items: baseline;
  gap: 2px 8px;
  padding-top: 8px;
  color: rgba(20, 20, 20, 0.34);
  transition: color 240ms ease;
}
.rail-n {
  font-family: 'Noto Serif SC', serif;
  font-size: 13px;
  font-weight: 600;
}
.rail-label {
  font-size: 11px;
  letter-spacing: 2px;
}
.rail-en {
  grid-column: 2;
  font-family: 'JetBrains Mono', monospace;
  font-size: 7px;
  letter-spacing: 1.5px;
}
.rail-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(20, 20, 20, 0.18);
  transition: background 240ms ease;
}
.rail-item.current {
  color: var(--ink);
}
.rail-item.current .rail-line {
  height: 3px;
  background: var(--red);
}
.rail-item.passed {
  color: var(--ink);
}
.rail-item.passed .rail-line {
  background: var(--ink);
}
.mini {
  gap: 16px;
}
.mini .rail-item {
  grid-template-columns: auto auto;
  padding-top: 5px;
  gap: 0 5px;
}
.mini .rail-n {
  font-size: 9px;
}
.mini .rail-label {
  font-size: 8px;
  letter-spacing: 1px;
}
.mini .rail-line {
  height: 1px;
}
.mini .rail-item.current .rail-line {
  height: 2px;
}
</style>
