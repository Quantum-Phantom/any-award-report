<script setup lang="ts">
withDefaults(defineProps<{
  active?: number
  stages?: string[]
}>(), {
  active: 0,
  stages: () => ['陈述 2 条', '委员 ×5', '玩家发言', '裁定', '回望'],
})
</script>

<template>
  <div class="defense-rail">
    <div
      v-for="(stage, index) in stages"
      :key="stage"
      class="rail-step"
      :class="{ on: index < active, current: index === active }"
    >
      <span class="step-dot">{{ index + 1 }}</span>
      <span class="step-label">{{ stage }}</span>
    </div>
  </div>
</template>

<style scoped>
.defense-rail {
  display: flex;
  align-items: center;
  width: 100%;
}
.rail-step {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  gap: 7px;
  color: rgba(20, 20, 20, 0.3);
  transition: color 250ms ease;
}
.rail-step::after {
  content: '';
  flex: 1;
  height: 1px;
  margin: 0 9px;
  background: rgba(20, 20, 20, 0.2);
  transition: background 250ms ease;
}
.rail-step:last-child::after {
  display: none;
}
.rail-step.on,
.rail-step.current {
  color: var(--ink);
}
.rail-step.on::after {
  background: var(--ink);
}
.rail-step.current::after {
  background: var(--red);
}
.step-dot {
  display: grid;
  place-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid currentColor;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  transition: background 250ms ease, color 250ms ease;
}
.rail-step.on .step-dot {
  background: var(--ink);
  color: var(--paper);
}
.rail-step.current .step-dot {
  border-color: var(--red);
  background: var(--red);
  color: var(--paper);
}
.step-label {
  font-size: 10.5px;
  letter-spacing: 1px;
  white-space: nowrap;
}
</style>
