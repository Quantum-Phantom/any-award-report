<script setup lang="ts">
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  rail: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="slidev-layout deck">
    <header class="deck-head">
      <span v-if="eyebrow" class="deck-eyebrow">{{ eyebrow }}</span>
      <ProgressRail v-if="rail" :active="active" mini />
    </header>
    <slot />
  </div>
</template>

<style scoped>
.deck {
  display: flex;
  flex-direction: column;
  padding: 38px 54px 44px;
  background: var(--paper);
}
.deck-head {
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
</style>
