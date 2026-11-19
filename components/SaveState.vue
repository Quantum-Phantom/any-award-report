<script setup lang="ts">
withDefaults(defineProps<{
  active?: number
}>(), {
  active: 0,
})
</script>

<template>
  <pre class="json-code"><span class="ln">01</span><span class="p">{</span>
<span class="ln">02</span>  <span class="key">"awardId"</span>: <span class="str">"couple"</span>,
<span class="ln">03</span>  <span class="key">"sessionId"</span>: <span class="str">"a1f8…"</span>,
<span class="ln">04</span>  <span class="key">"scene"</span>: <span class="bad" :class="{ on: active >= 1 }">"awarding"</span>,
<span class="ln">05</span>  <span class="key">"noticePublished"</span>: <span class="num">true</span>,
<span class="ln">06</span>  <span class="key">"selected"</span>: [<span class="str">"c01"</span>, <span class="bad" :class="{ on: active >= 2 }">"c04"</span>],
<span class="ln">07</span>  <span class="key">"defense"</span>: <span class="p">{</span>
<span class="ln">08</span>    <span class="key">"order"</span>: [<span class="str">"c01"</span>, <span class="bad" :class="{ on: active >= 3 }">"c99"</span>, <span class="str">"c02"</span>],
<span class="ln">09</span>    <span class="key">"index"</span>: <span class="bad" :class="{ on: active >= 4 }">3</span>,
<span class="ln">10</span>    <span class="key">"none"</span>: <span class="num">false</span>
<span class="ln">11</span>  <span class="p">}</span>
<span class="ln">12</span><span class="p">}</span></pre>
</template>

<style scoped>
.json-code {
  margin: 0;
  padding: 14px 14px 14px 8px;
  border: 1px solid var(--ink);
  background: #f7f3ee;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  line-height: 1.65;
  color: var(--ink);
  counter-reset: none;
}
.ln {
  display: inline-block;
  width: 24px;
  margin-right: 8px;
  color: rgba(20, 20, 20, 0.3);
  text-align: right;
  user-select: none;
}
.key { color: #5b4d44; }
.str { color: #6b4c2b; }
.num { color: #2f5c54; }
.p { color: rgba(20, 20, 20, 0.62); }
.bad {
  position: relative;
  display: inline-block;
  transition: color 220ms ease;
}
.bad.on {
  color: var(--red);
  text-decoration: line-through;
  text-decoration-thickness: 1.5px;
}
</style>
