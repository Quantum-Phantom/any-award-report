<script setup lang="ts">
defineProps({
  eyebrow: {
    type: String,
    default: '优秀情侣奖 ／ Vue 前端汇报',
  },
})
</script>

<template>
  <div class="slidev-layout deck doc-deck">
    <header class="deck-head">
      <span class="deck-eyebrow">{{ eyebrow }}</span>
    </header>
    <div class="doc-main">
      <slot />
    </div>
    <aside class="doc-aside">
      <slot name="right" />
    </aside>
  </div>
</template>

<style scoped>
.doc-deck {
  display: grid;
  grid-template-columns: minmax(0, 2fr) 0.92fr;
  grid-template-rows: auto 1fr;
  align-items: stretch;
  column-gap: 30px;
  row-gap: 0;
  padding: 38px 54px 44px;
  background: var(--paper);
}
.deck-head {
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 18px;
  gap: 20px;
}
.deck-eyebrow {
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 4px;
  color: var(--gray);
  white-space: nowrap;
}
.doc-main {
  min-width: 0;
}
.doc-aside {
  position: relative;
  min-width: 0;
  border-left: 1px solid var(--ink);
  padding-left: 24px;
}
</style>
