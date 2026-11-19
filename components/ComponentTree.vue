<script setup lang="ts">
withDefaults(defineProps<{
  active?: number
}>(), {
  active: 0,
})
</script>

<template>
  <svg class="component-tree" viewBox="0 0 500 330" role="img" aria-label="组件地图：App 下挂六个场景与三个浮层组件">
    <defs>
      <marker id="tree-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="#141414" />
      </marker>
    </defs>

    <g class="tree-root" :class="{ on: true }">
      <rect x="180" y="18" width="140" height="40" />
      <text x="250" y="43" text-anchor="middle">App</text>
      <text class="small" x="250" y="70" text-anchor="middle">剧场 · 状态总入口</text>
    </g>

    <g class="scene-nodes" :class="{ on: active >= 1 }">
      <line x1="250" y1="78" x2="250" y2="96" />
      <line x1="55" y1="96" x2="445" y2="96" />
      <g v-for="(name, index) in ['TitleScreen', 'ChatScene', 'MeetingScene', 'NoticeScene', 'ReviewScene', 'DefenseScene']" :key="name">
        <line :x1="46 + index * 80" y1="96" :x2="46 + index * 80" y2="118" marker-end="url(#tree-arrow)" />
        <rect :x="10 + index * 80" y="120" width="72" height="42" />
        <text :x="46 + index * 80" y="142" text-anchor="middle">{{ name }}</text>
      </g>
    </g>

    <g class="side-nodes" :class="{ on: active >= 2 }">
      <line x1="250" y1="162" x2="250" y2="204" stroke-dasharray="4 4" />
      <line x1="92" y1="204" x2="408" y2="204" stroke-dasharray="4 4" />
      <g v-for="(name, index) in ['CampusPanel', 'PauseMenu', 'DialogueBox']" :key="name">
        <line :x1="92 + index * 158" y1="204" :x2="92 + index * 158" y2="224" stroke-dasharray="4 4" marker-end="url(#tree-arrow)" />
        <rect :x="index * 158 + 22" y="226" width="140" height="38" />
        <text :x="92 + index * 158" y="249" text-anchor="middle">{{ name }}</text>
      </g>
      <text class="small" x="250" y="292" text-anchor="middle">浮层：modal 字符串驱动，不是弹窗系统</text>
    </g>

    <g class="tree-note">
      <text x="18" y="320">6 SCENES ／ 3 OVERLAYS ／ 0 ROUTES</text>
    </g>
  </svg>
</template>

<style scoped>
.component-tree {
  width: 100%;
  height: auto;
}
text {
  font-family: 'JetBrains Mono', 'Noto Sans SC', monospace;
  font-size: 10px;
  fill: var(--ink);
}
.small {
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 7px;
  fill: var(--gray);
}
rect {
  fill: var(--paper);
  stroke: var(--ink);
  stroke-width: 1;
}
line {
  stroke: var(--ink);
  stroke-width: 1;
}
.scene-nodes,
.side-nodes {
  opacity: 0.2;
  transition: opacity 300ms ease;
}
.scene-nodes.on,
.side-nodes.on {
  opacity: 1;
}
.scene-nodes.on rect,
.side-nodes.on rect {
  animation: node-flash 700ms ease;
}
@keyframes node-flash {
  0% { stroke: var(--red); stroke-width: 1.5; }
  100% { stroke: var(--ink); stroke-width: 1; }
}
</style>
