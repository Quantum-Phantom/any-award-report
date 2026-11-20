<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../utils/asset'

const props = withDefaults(defineProps<{
  name: string
  time: string
  text: string
  avatar?: string
  player?: boolean
  speaker?: boolean
}>(), {
  avatar: '',
  player: false,
  speaker: false,
})

const avatarSrc = computed(() => resolveAssetUrl(props.avatar))
</script>

<template>
  <div class="chat-line" :class="{ player, speaker }">
    <div v-if="avatarSrc" class="chat-avatar">
      <img :src="avatarSrc" :alt="name">
    </div>
    <div v-else class="player-plate">你</div>
    <div class="chat-body">
      <div class="chat-meta">
        <span class="chat-name">{{ name }}</span>
        <span class="chat-time">{{ time }}</span>
      </div>
      <div class="chat-bubble">{{ text }}</div>
    </div>
  </div>
</template>

<style scoped>
.chat-line {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  align-items: start;
}
.chat-avatar,
.player-plate {
  width: 38px;
  height: 38px;
  border: 1px solid var(--ink);
  background: #f1ece6;
  overflow: hidden;
}
.chat-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.player-plate {
  display: grid;
  place-content: center;
  font-family: 'Noto Serif SC', serif;
  font-size: 10px;
  color: var(--gray);
}
.chat-meta {
  display: flex;
  align-items: baseline;
  gap: 9px;
  margin-bottom: 2px;
}
.chat-name {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
}
.chat-time {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  color: var(--gray);
}
.chat-bubble {
  display: inline-block;
  max-width: 100%;
  padding: 5px 8px;
  border: 1px solid rgba(20, 20, 20, 0.7);
  background: var(--paper);
  font-size: 10px;
  line-height: 1.6;
}
.speaker .chat-bubble {
  border-color: var(--ink);
}
.player .chat-bubble {
  border-color: var(--red);
}
</style>
