<script setup lang="ts">
defineProps({
  seal: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="slidev-layout chapter-deck">
    <span class="chapter-mark">四 · 复盘</span>
    <div class="chapter-body">
      <slot />
    </div>
    <div v-if="seal" class="chapter-seal">
      <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="112" />
    </div>
  </div>
</template>

<style scoped>
.chapter-deck {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 56px 68px;
  background: var(--ink);
  color: var(--paper);
}
.chapter-deck::before {
  content: '';
  position: absolute;
  inset: 14px;
  border: 0.5px solid rgba(252, 250, 249, 0.34);
  pointer-events: none;
}
.chapter-mark {
  position: absolute;
  top: 30px;
  left: 68px;
  font-size: 11px;
  letter-spacing: 5px;
  color: rgba(252, 250, 249, 0.58);
}
.chapter-body {
  position: relative;
  z-index: 2;
}
.chapter-seal {
  position: absolute;
  right: 56px;
  bottom: 42px;
  opacity: 0.96;
}
</style>
