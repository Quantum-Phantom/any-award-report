<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  file: string
  highlight?: Array<number | [number, number]>
}>(), {
  highlight: () => [],
})

const modules = import.meta.glob('../snippets/*', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const text = computed(() => modules[`../snippets/${props.file}`] || '// snippet not found')
const lines = computed(() => text.value.replace(/\n$/, '').split('\n'))

function isHighlighted(lineNumber: number) {
  return props.highlight.some((range) => {
    if (Array.isArray(range))
      return lineNumber >= range[0] && lineNumber <= range[1]
    return lineNumber === range
  })
}
</script>

<template>
  <pre class="snippet"><code><span
    v-for="(line, index) in lines"
    :key="index"
    class="snippet-line"
    :class="{ hl: isHighlighted(index + 1) }"
  ><span class="snippet-ln">{{ String(index + 1).padStart(2, '0') }}</span>{{ line || ' ' }}</span></code></pre>
</template>

<style scoped>
.snippet {
  margin: 0;
  padding: 10px 0;
  border: 1px solid var(--ink);
  background: var(--code);
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  line-height: 1.65;
  color: var(--ink);
  overflow: hidden;
}
code {
  display: block;
  font-family: inherit;
}
.snippet-line {
  display: block;
  min-height: 1.65em;
  padding: 0 12px 0 0;
  white-space: pre;
}
.snippet-line.hl {
  background: rgba(208, 36, 28, 0.08);
  box-shadow: inset 2px 0 0 var(--red);
}
.snippet-ln {
  display: inline-block;
  width: 28px;
  margin-right: 9px;
  color: rgba(20, 20, 20, 0.3);
  text-align: right;
  user-select: none;
}
</style>
