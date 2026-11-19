<template>
  <div class="slidev-layout deck doc-deck">
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
  align-items: stretch;
  gap: 30px;
  padding: 38px 54px 44px;
  background: var(--paper);
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
