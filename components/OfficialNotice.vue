<script setup lang="ts">
withDefaults(defineProps<{
  reveal?: boolean
  zoom?: boolean
}>(), {
  reveal: false,
  zoom: false,
})
</script>

<template>
  <article class="official-notice" :class="{ zoom }" aria-label="优秀情侣奖评选通知 A4 版面">
    <div class="letterhead">本 校 文 件</div>
    <div class="docno">校学〔2025〕2号</div>
    <span class="redrule" :class="{ reveal }" />
    <h1>关于开展2025年度<br>“优秀情侣奖”评选工作的通知</h1>
    <div class="body">
      <p class="recipient">各学院：</p>
      <p>为尊重学生自主选择，倡导平等、尊重与共同成长，现发布2025年度“优秀情侣奖”评选通知及空白报名表样。有关事项通知如下。</p>
      <p><b>一、参与原则。</b>学生甲、学生乙须分别知情、自愿同意参与；任何一方均可选择不参加或撤回，不因是否恋爱、是否申报或是否获奖受到评价。</p>
      <p><b>二、材料边界。</b>分别陈述个人学业、专业实践、成长与参评理由，不设交往时长、消费金额或社交热度门槛。不收集私人聊天记录、社交账号、密码或其他与评选无关的隐私。</p>
      <p><b>三、公开授权。</b>参与评选与对外公开分别征求双方意见；不同意公开不影响参与。</p>
      <p><b>四、工作安排。</b>2025年4月24日开放报名，5月4日截止，5月5日由玩家决定入围，5月10日答辩。入围不等于获奖。</p>
      <div class="signature">
        <span>本 校</span>
        <span>2025年4月24日</span>
      </div>
    </div>
    <div class="imprint">
      <span>本校办公室</span>
      <span>2025年4月24日印发</span>
    </div>
    <div class="page-number">— 1 —</div>
  </article>
</template>

<style scoped>
.official-notice {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 630px;
  height: 891px;
  padding: 54px 64px 44px;
  border: 1px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  font-family: 'Noto Serif SC', 'Songti SC', SimSun, serif;
  transition: transform 220ms ease;
  transform-origin: top center;
}
.official-notice.zoom {
  transform: scale(1.04);
}
.letterhead {
  color: var(--red);
  font-size: 45px;
  font-weight: 700;
  letter-spacing: 15px;
  text-align: center;
}
.docno {
  margin-top: 12px;
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
}
.redrule {
  display: block;
  width: 0;
  height: 2.5px;
  margin: 16px 0 28px;
  background: var(--red);
  transition: width 400ms ease;
}
.redrule.reveal {
  width: 100%;
}
h1 {
  margin: 0 0 20px;
  font-size: 23px;
  font-weight: 700;
  line-height: 1.7;
  letter-spacing: 1px;
  text-align: center;
}
.body {
  flex: 1;
  font-size: 12.6px;
  line-height: 2.02;
  text-align: justify;
}
.body p {
  margin: 0 0 4px;
  text-indent: 2em;
}
.body .recipient {
  text-indent: 0;
}
.body b {
  font-weight: 700;
}
.signature {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  margin-top: 20px;
  padding-right: 6px;
  font-size: 12.6px;
  line-height: 1.9;
}
.imprint {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 7px;
  border-top: 1px solid var(--ink);
  font-size: 9.5px;
  letter-spacing: 1px;
}
.page-number {
  margin-top: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  text-align: center;
}
</style>
