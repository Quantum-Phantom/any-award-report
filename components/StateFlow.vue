<script setup lang="ts">
withDefaults(defineProps<{
  active?: number
}>(), {
  active: 0,
})
</script>

<template>
  <svg class="state-flow" viewBox="0 0 940 308" role="img" aria-label="游戏状态机：title 到 defense，以及 defense 的六个子阶段">
    <defs>
      <marker id="arrow-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="#141414" />
      </marker>
      <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="#d0241c" />
      </marker>
    </defs>

    <g class="lane-label">
      <text x="20" y="28">MAIN LOOP ／ state.scene</text>
      <line x1="20" y1="36" x2="910" y2="36" />
    </g>

    <g class="main-node" :class="{ on: active >= 1 }">
      <rect x="20" y="68" width="104" height="40" />
      <text x="72" y="93" text-anchor="middle">title</text>
    </g>
    <line class="flow-line" :class="{ drawn: active >= 1 }" x1="124" y1="88" x2="154" y2="88" marker-end="url(#arrow-ink)" />

    <g class="main-node" :class="{ on: active >= 1 }">
      <rect x="154" y="68" width="104" height="40" />
      <text x="206" y="93" text-anchor="middle">chat</text>
    </g>
    <line class="flow-line" :class="{ drawn: active >= 2 }" x1="258" y1="88" x2="288" y2="88" marker-end="url(#arrow-ink)" />

    <g class="main-node" :class="{ on: active >= 2 }">
      <rect x="288" y="68" width="104" height="40" />
      <text x="340" y="93" text-anchor="middle">meeting</text>
    </g>
    <line class="flow-line" :class="{ drawn: active >= 2 }" x1="392" y1="88" x2="422" y2="88" marker-end="url(#arrow-ink)" />

    <g class="main-node" :class="{ on: active >= 2 }">
      <rect x="422" y="68" width="104" height="40" />
      <text x="474" y="93" text-anchor="middle">notice</text>
    </g>
    <line class="flow-line" :class="{ drawn: active >= 3 }" x1="526" y1="88" x2="556" y2="88" marker-end="url(#arrow-ink)" />

    <g class="main-node" :class="{ on: active >= 3 }">
      <rect x="556" y="68" width="104" height="40" />
      <text x="608" y="93" text-anchor="middle">review</text>
    </g>
    <line class="flow-line" :class="{ drawn: active >= 3 }" x1="660" y1="88" x2="690" y2="88" marker-end="url(#arrow-ink)" />

    <g class="main-node defense-node" :class="{ on: active >= 3, open: active >= 4 }">
      <rect x="690" y="64" width="150" height="48" />
      <text x="765" y="84" text-anchor="middle">defense</text>
      <text class="node-sub" x="765" y="100" text-anchor="middle">{{ active >= 4 ? '已展开 · 6 阶段' : '点击展开' }}</text>
    </g>

    <line class="flow-line expand-line" :class="{ drawn: active >= 4 }" x1="765" y1="112" x2="765" y2="162" marker-end="url(#arrow-red)" />

    <g class="sub-lane" :class="{ on: active >= 4 }">
      <line x1="35" y1="178" x2="908" y2="178" />
      <text x="35" y="169">DEFENSE ／ 服务端返回的 stage</text>
      <g v-for="(label, index) in ['review', 'script', 'committee ×5', 'player', 'decision', 'decided']" :key="label">
        <rect :x="35 + index * 146" y="192" width="120" height="32" />
        <text :x="95 + index * 146" y="212" text-anchor="middle">{{ label }}</text>
        <line
          v-if="index < 5"
          class="sub-line"
          :x1="155 + index * 146"
          y1="208"
          :x2="177 + index * 146"
          y2="208"
          marker-end="url(#arrow-ink)"
        />
      </g>
    </g>

    <g class="back-line" :class="{ on: active >= 5 }">
      <path d="M95 192 C95 145 210 145 210 112" fill="none" stroke="#d0241c" stroke-dasharray="5 5" marker-end="url(#arrow-red)" />
      <text x="34" y="148">返回审阅</text>
      <text x="762" y="272">closed ／ 未入围：直接收尾</text>
      <path d="M845 240 L905 240 L905 284" fill="none" stroke="#d0241c" stroke-dasharray="5 5" marker-end="url(#arrow-red)" />
    </g>
  </svg>
</template>

<style scoped>
.state-flow {
  width: 100%;
  height: auto;
  overflow: visible;
}
text {
  font-family: 'JetBrains Mono', 'Noto Sans SC', monospace;
  font-size: 12px;
  fill: var(--ink);
}
.lane-label text,
.sub-lane > text,
.back-line text {
  font-size: 8px;
  letter-spacing: 2px;
  fill: var(--gray);
}
.lane-label line,
.sub-lane > line {
  stroke: rgba(20, 20, 20, 0.25);
  stroke-width: 0.75;
}
.main-node rect {
  fill: var(--paper);
  stroke: rgba(20, 20, 20, 0.28);
  stroke-width: 1.25;
  transition: stroke 300ms ease;
}
.main-node text {
  fill: rgba(20, 20, 20, 0.32);
  transition: fill 300ms ease;
}
.main-node.on rect {
  stroke: var(--ink);
}
.main-node.on text {
  fill: var(--ink);
}
.defense-node.open rect {
  stroke: var(--red);
  stroke-width: 2;
}
.node-sub {
  font-size: 7px !important;
  letter-spacing: 1px;
  fill: var(--gray) !important;
}
.flow-line {
  stroke: var(--ink);
  stroke-width: 1.25;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  opacity: 0;
  transition: stroke-dashoffset 400ms ease, opacity 200ms ease;
}
.flow-line.drawn {
  stroke-dashoffset: 0;
  opacity: 1;
}
.expand-line {
  stroke: var(--red);
}
.sub-lane {
  opacity: 0.22;
  transition: opacity 300ms ease;
}
.sub-lane.on {
  opacity: 1;
}
.sub-lane rect {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 1;
}
.sub-lane text {
  font-size: 10px;
}
.sub-line {
  stroke: var(--ink);
  stroke-width: 1;
}
.back-line {
  opacity: 0;
  transition: opacity 350ms ease;
}
.back-line.on {
  opacity: 1;
}
.back-line path {
  stroke-width: 1.25;
}
</style>
