<template>
  <div class="slidev-layout bare-deck">
    <slot />
  </div>
</template>

<style scoped>
.bare-deck {
  position: relative;
  display: grid;
  place-content: center;
  padding: 0;
  overflow: hidden;
  background: var(--paper);
}
</style>
