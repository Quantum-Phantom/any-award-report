<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  page?: string
  tone?: 'paper' | 'ink'
  compact?: boolean
}>(), {
  label: '',
  page: '',
  tone: 'paper',
  compact: false,
})
</script>

<template>
  <div class="paper-card" :class="[`tone-${tone}`, { compact }]">
    <span v-if="label" class="paper-label">{{ label }}</span>
    <div class="paper-body">
      <slot />
    </div>
    <span v-if="page" class="paper-page">{{ page }}</span>
  </div>
</template>

<style scoped>
.paper-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 20px 22px;
  border: 1.5px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
}
.paper-card::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 0.5px solid currentColor;
  opacity: 0.55;
  pointer-events: none;
}
.paper-card.compact {
  padding: 14px 16px;
}
.tone-ink {
  border-color: var(--paper);
  background: var(--ink);
  color: var(--paper);
}
.paper-label {
  position: relative;
  z-index: 1;
  margin-bottom: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 2.5px;
  opacity: 0.62;
}
.paper-body {
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
}
.paper-page {
  position: absolute;
  right: 14px;
  bottom: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  opacity: 0.55;
}
</style>
