<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const nav = useNav()
const dark = computed(() => nav.currentLayout === 'chapter' || nav.currentLayout === 'cover')
const show = computed(() => nav.currentPage > 1 && nav.currentPage < nav.total && nav.currentLayout !== 'end')
</script>

<template>
  <div v-if="show" class="deck-page-no" :class="{ dark }">
    — {{ String(nav.currentPage).padStart(2, '0') }} —
  </div>
</template>

<style>
.deck-page-no {
  position: absolute;
  right: 48px;
  bottom: 16px;
  z-index: 20;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--gray);
  pointer-events: none;
}
.deck-page-no.dark {
  color: rgba(252, 250, 249, 0.62);
}
</style>
