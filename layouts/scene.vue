<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: '/assets/places/meeting_room.png',
  },
})

const style = computed(() => ({
  backgroundImage: `url(${props.image})`,
}))
</script>

<template>
  <div class="slidev-layout scene-deck" :style="style">
    <div class="scene-shade" />
    <div class="scene-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.scene-deck {
  position: relative;
  overflow: hidden;
  padding: 28px 38px 32px;
  background-color: #1a1714;
  background-size: cover;
  background-position: center;
  color: var(--paper);
}
.scene-shade {
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.17);
  pointer-events: none;
}
.scene-content {
  position: relative;
  z-index: 1;
  height: 100%;
}
</style>
