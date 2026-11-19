<script setup lang="ts">
withDefaults(defineProps<{
  active?: number
}>(), {
  active: 0,
})
</script>

<template>
  <div class="net-flow" :class="{ started: active >= 1 }">
    <div class="net-row">
      <div class="net-node browser">
        <span class="node-kicker">CLIENT</span>
        <strong>浏览器</strong>
        <small>index.html · app.js</small>
      </div>

      <div class="net-pipe" :class="{ on: active >= 1 }">
        <span class="pipe-label">/api/</span>
        <i class="pipe-line" />
        <em>同源 · 不开 CORS</em>
      </div>

      <div class="net-node vite" :class="{ on: active >= 1 }">
        <span class="node-kicker">DEV SERVER</span>
        <strong>Vite</strong>
        <small>127.0.0.1 · 显式端口</small>
      </div>

      <div class="net-pipe" :class="{ on: active >= 2 }">
        <span class="pipe-label">proxy</span>
        <i class="pipe-line" />
        <em>只代理 /api/</em>
      </div>

      <div class="net-node python" :class="{ on: active >= 2 }">
        <span class="node-kicker">LOCAL API</span>
        <strong>Python</strong>
        <small>答辩 · 材料 · 提示词</small>
      </div>
    </div>

    <div class="denied-path" :class="{ on: active >= 3 }">
      <span class="denied-from">浏览器</span>
      <span class="denied-line">
        <i />
        <b>直连 tools/ · runtime/ · *.py · *prompts.json</b>
      </span>
      <span class="denied-mark">✕</span>
    </div>

    <div class="denied-network" :class="{ on: active >= 3 }">
      <span>127.0.0.1 以外的地址</span>
      <strong>没有入口</strong>
    </div>
  </div>
</template>

<style scoped>
.net-flow {
  width: 100%;
}
.net-row {
  display: grid;
  grid-template-columns: 1fr 88px 1fr 88px 1fr;
  align-items: center;
  gap: 0;
}
.net-node {
  position: relative;
  min-height: 104px;
  padding: 14px 15px;
  border: 1.5px solid rgba(20, 20, 20, 0.28);
  background: var(--paper);
  transition: border-color 280ms ease;
}
.net-node.on,
.net-flow.started .browser {
  border-color: var(--ink);
}
.node-kicker {
  display: block;
  margin-bottom: 9px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 7px;
  letter-spacing: 2px;
  color: var(--gray);
}
.net-node strong {
  display: block;
  font-family: 'Noto Serif SC', serif;
  font-size: 19px;
  letter-spacing: 2px;
}
.net-node small {
  display: block;
  margin-top: 7px;
  font-size: 8.5px;
  line-height: 1.5;
  color: var(--gray);
}
.net-pipe {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgba(20, 20, 20, 0.32);
  transition: color 280ms ease;
}
.net-pipe.on {
  color: var(--ink);
}
.pipe-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  letter-spacing: 1px;
}
.pipe-line {
  position: relative;
  display: block;
  width: 100%;
  height: 1px;
  background: currentColor;
}
.pipe-line::after {
  content: '';
  position: absolute;
  top: -3px;
  right: 0;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 5px solid currentColor;
}
.net-pipe em {
  font-style: normal;
  font-size: 6.5px;
  letter-spacing: 0.5px;
  color: var(--gray);
}
.denied-path {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  opacity: 0.22;
  transition: opacity 280ms ease;
}
.denied-path.on {
  opacity: 1;
}
.denied-from {
  font-size: 9px;
  color: var(--gray);
}
.denied-line {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  color: var(--red);
  font-size: 8.5px;
}
.denied-line i {
  flex: 1;
  border-top: 1px dashed var(--red);
}
.denied-line b {
  font-weight: 400;
  letter-spacing: 0.5px;
}
.denied-mark {
  display: grid;
  place-content: center;
  width: 28px;
  height: 28px;
  border: 2px solid var(--red);
  color: var(--red);
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  transform: scale(0.4);
  transition: transform 240ms ease;
}
.denied-path.on .denied-mark {
  transform: scale(1) rotate(-8deg);
}
.denied-network {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 18px;
  opacity: 0.22;
  transition: opacity 280ms ease;
}
.denied-network.on {
  opacity: 1;
}
.denied-network span {
  font-size: 8px;
  color: var(--gray);
}
.denied-network strong {
  font-family: 'Noto Serif SC', serif;
  font-size: 12px;
  color: var(--red);
  letter-spacing: 2px;
}
</style>
