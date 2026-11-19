<script setup lang="ts">
withDefaults(defineProps<{
  number?: string
  title: string
  note?: string
  active?: boolean
}>(), {
  number: '',
  note: '',
  active: false,
})
</script>

<template>
  <div class="scene-chip" :class="{ active }">
    <span v-if="number" class="chip-number">{{ number }}</span>
    <span class="chip-title">{{ title }}</span>
    <span v-if="note" class="chip-note">{{ note }}</span>
  </div>
</template>

<style scoped>
.scene-chip {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 3px 10px;
  padding: 11px 14px;
  border: 1px solid rgba(20, 20, 20, 0.25);
  color: var(--gray);
  transition: color 220ms ease, border-color 220ms ease, background 220ms ease;
}
.chip-number {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 1px;
}
.chip-title {
  font-family: 'Noto Serif SC', 'Songti SC', SimSun, serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
}
.chip-note {
  grid-column: 2;
  font-size: 9px;
  letter-spacing: 1px;
}
.scene-chip.active {
  border-color: var(--red);
  color: var(--ink);
  background: rgba(208, 36, 28, 0.035);
}
.scene-chip.active .chip-number {
  color: var(--red);
}
</style>
