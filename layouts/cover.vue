<script setup lang="ts">
defineProps({
  cast: {
    type: String,
    default: '/assets/people/whole_guoxiaozhang.png',
  },
})
</script>

<template>
  <div class="slidev-layout cover-deck">
    <div class="cover-copy">
      <span class="deck-eyebrow">优秀情侣奖 ／ 前端设计汇报</span>
      <slot />
    </div>
    <div class="cover-figure">
      <img
        class="cover-cast"
        :src="cast"
        alt="郭校长半身立绘"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 900, delay: 200 } }"
      >
      <span class="figure-caption">郭校长 ／ 308 会议室</span>
    </div>
  </div>
</template>

<style scoped>
.cover-deck {
  position: relative;
  overflow: hidden;
  padding: 58px 56px 48px;
  background: var(--paper);
}
.cover-copy {
  position: static;
  z-index: 2;
  width: 61%;
  padding-top: 40px;
}
.cover-figure {
  position: absolute;
  right: 2%;
  bottom: 0;
  width: 37%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.cover-cast {
  width: 100%;
  height: 94%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(0.04);
}
.figure-caption {
  position: absolute;
  right: 4px;
  bottom: 10px;
  font-size: 9px;
  line-height: 1.4;
  letter-spacing: 2px;
  color: var(--gray);
  writing-mode: vertical-rl;
}
</style>
