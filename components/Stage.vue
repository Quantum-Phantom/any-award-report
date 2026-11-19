<script setup lang="ts">
withDefaults(defineProps<{
  active?: boolean
  scale?: string
  size?: string
}>(), {
  active: false,
  scale: '0.68',
  size: '1440 × 900',
})
</script>

<template>
  <div class="stage-demo" :class="{ active }">
    <div class="browser-frame">
      <div class="browser-bar">
        <span class="dot" />
        <span class="dot" />
        <span class="dot" />
        <span class="browser-title">127.0.0.1:5173</span>
      </div>
      <div class="browser-viewport">
        <span class="letterbox left">96</span>
        <span class="letterbox right">96</span>
        <div class="game-stage">
          <span class="stage-size">1920 × 1080</span>
          <span class="stage-scale">scale({{ scale }})</span>
        </div>
      </div>
    </div>
    <div class="stage-caption">
      <span>VIEWPORT {{ size }}</span>
      <span>{{ active ? '等比缩放后居中' : '素材按整屏出图' }}</span>
    </div>
  </div>
</template>

<style scoped>
.stage-demo {
  width: 100%;
}
.browser-frame {
  border: 1.5px solid var(--ink);
  background: var(--paper);
}
.browser-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 25px;
  padding: 0 8px;
  border-bottom: 1px solid var(--ink);
}
.dot {
  width: 5px;
  height: 5px;
  border: 1px solid var(--ink);
}
.browser-title {
  margin-left: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 7px;
  letter-spacing: 1px;
  color: var(--gray);
}
.browser-viewport {
  position: relative;
  height: 210px;
  padding: 22px 24px;
  background: var(--ink);
  transition: padding 400ms ease;
}
.game-stage {
  position: relative;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  background: var(--paper);
  transition: width 400ms ease, height 400ms ease;
  text-align: center;
}
.stage-size {
  font-family: 'Noto Serif SC', serif;
  font-size: 18px;
  letter-spacing: 3px;
}
.stage-scale {
  margin-top: 5px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: var(--red);
}
.letterbox {
  position: absolute;
  top: 50%;
  z-index: 2;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  color: rgba(252, 250, 249, 0.7);
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 300ms ease 160ms;
}
.letterbox.left { left: 7px; }
.letterbox.right { right: 7px; }
.stage-demo.active .game-stage {
  width: 88%;
  height: 88%;
  margin: auto;
}
.stage-demo.active .letterbox {
  opacity: 1;
}
.stage-caption {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 7px;
  letter-spacing: 1px;
  color: var(--gray);
}
</style>
