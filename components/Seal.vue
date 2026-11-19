<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
  sub?: string
  size?: number
  rotate?: number
}>(), {
  text: '优秀情侣奖',
  sub: '2026 · 已核阅',
  size: 132,
  rotate: -12,
})
</script>

<template>
  <div
    class="seal"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotate(${rotate}deg)`,
      fontSize: `${Math.max(11, size * 0.115)}px`,
    }"
  >
    <span class="seal-text">{{ text }}</span>
    <span v-if="sub" class="seal-sub">{{ sub }}</span>
  </div>
</template>

<style scoped>
.seal {
  position: relative;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 5px;
  border: 4px solid var(--red);
  border-radius: 50%;
  color: var(--red);
  font-family: 'Noto Serif SC', 'Songti SC', SimSun, serif;
  letter-spacing: 0.12em;
  line-height: 1.45;
  text-align: center;
  mix-blend-mode: multiply;
  user-select: none;
}
.seal::before {
  content: '';
  position: absolute;
  inset: 5px;
  border: 0.75px solid var(--red);
  border-radius: 50%;
  opacity: 0.8;
}
.seal-text {
  max-width: 92%;
  font-weight: 600;
  white-space: nowrap;
}
.seal-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.46em;
  letter-spacing: 1px;
  opacity: 0.9;
}
</style>
