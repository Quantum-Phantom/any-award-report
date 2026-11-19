<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'cover' | 'applicant' | 'evidence'
  page?: string
  person?: string
}>(), {
  variant: 'cover',
  page: '1',
  person: '甲',
})
</script>

<template>
  <article class="form-sheet" :aria-label="`空白表样第 ${page} 页`">
    <div class="form-kicker">优秀情侣奖申报表 · 空白表样</div>
    <template v-if="variant === 'cover'">
      <div class="cover-title">
        <span>2025年度</span>
        <h2>优秀情侣奖<br>申 报 表</h2>
        <small>双人申报 · 双面打印</small>
      </div>
      <div class="cover-fields">
        <div><span>申请人甲姓名</span><i /></div>
        <div><span>申请人乙姓名</span><i /></div>
        <div><span>填表日期</span><i>　年　月　日</i></div>
      </div>
      <div class="cover-note">
        <b>填表说明</b>
        <p>双方分别知情、自愿确认。</p>
        <p>未提供的信息保持待补充。</p>
        <p>空白表样不代表已提交。</p>
      </div>
    </template>
    <template v-else-if="variant === 'applicant'">
      <h2>申请人{{ person }}资料</h2>
      <div class="field-table">
        <div v-for="field in ['姓名', '性别', '专业', '班级', '学号', '绩点']" :key="field" class="field-row">
          <span>{{ field }}</span><i />
        </div>
      </div>
      <div class="statement">
        <span>个人陈述（300字左右）</span>
        <div class="blank-lines" />
      </div>
      <div class="footer-note">本页为空白表样，未填写、未签署。</div>
    </template>
    <template v-else>
      <h2>佐证材料</h2>
      <p class="evidence-intro">第4页起依次附佐证材料。以下仅为空白编排示意。</p>
      <div class="evidence-table">
        <div class="evidence-head"><span>序号</span><span>材料名称</span><span>页码</span></div>
        <div v-for="i in 4" :key="i" class="evidence-row"><span>{{ i }}</span><span /><span /></div>
      </div>
      <div class="paste-area">佐证材料粘贴／复印区域</div>
    </template>
    <div class="page-no">— {{ page }} —</div>
  </article>
</template>

<style scoped>
.form-sheet {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 142px;
  height: 201px;
  padding: 9px 10px 15px;
  border: 0.75px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  font-family: 'Noto Serif SC', 'Songti SC', SimSun, serif;
  box-shadow: 0 0 0 2px var(--paper), 0 0 0 2.5px rgba(20, 20, 20, 0.28);
}
.form-kicker {
  font-size: 4px;
  letter-spacing: 0.6px;
  color: var(--gray);
}
.cover-title {
  margin-top: 10px;
  text-align: center;
}
.cover-title span,
.cover-title small {
  display: block;
  font-size: 5px;
  letter-spacing: 1px;
}
.cover-title h2 {
  margin: 2px 0 3px;
  font-size: 12px;
  line-height: 1.45;
  letter-spacing: 1.4px;
}
.cover-fields {
  margin-top: 8px;
  border-top: 0.75px solid var(--ink);
}
.cover-fields div {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  border-bottom: 0.75px solid var(--ink);
  font-size: 4.8px;
  line-height: 3.1;
}
.cover-fields span {
  padding-left: 2px;
  border-right: 0.75px solid var(--ink);
}
.cover-fields i {
  font-style: normal;
  text-align: center;
}
.cover-note {
  margin-top: 8px;
  font-size: 4.6px;
  line-height: 1.65;
}
.cover-note b {
  display: block;
  margin-bottom: 1px;
  font-size: 5px;
}
.cover-note p {
  margin: 0;
}
h2 {
  margin: 7px 0 5px;
  font-size: 8px;
  letter-spacing: 0.5px;
}
.field-row {
  display: grid;
  grid-template-columns: 30px 1fr;
  min-height: 8px;
  border-top: 0.6px solid var(--ink);
  border-left: 0.6px solid var(--ink);
  font-size: 4.5px;
  line-height: 8px;
}
.field-row:last-child {
  border-bottom: 0.6px solid var(--ink);
}
.field-row span {
  padding-left: 2px;
  border-right: 0.6px solid var(--ink);
}
.field-row i {
  border-right: 0.6px solid var(--ink);
}
.statement {
  margin-top: 7px;
  border: 0.6px solid var(--ink);
  padding: 3px;
  font-size: 4.5px;
}
.blank-lines {
  height: 26px;
  margin-top: 2px;
  border-top: 0.5px solid rgba(20, 20, 20, 0.3);
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 6px,
    rgba(20, 20, 20, 0.16) 6px,
    rgba(20, 20, 20, 0.16) 6.6px
  );
}
.footer-note {
  margin-top: auto;
  font-size: 4.2px;
  color: var(--gray);
}
.evidence-intro {
  margin: 2px 0 5px;
  font-size: 4.4px;
  line-height: 1.55;
}
.evidence-table {
  border: 0.6px solid var(--ink);
}
.evidence-head,
.evidence-row {
  display: grid;
  grid-template-columns: 12px 1fr 16px;
  font-size: 4.2px;
  line-height: 9px;
}
.evidence-head {
  border-bottom: 0.6px solid var(--ink);
  font-weight: 700;
}
.evidence-head span,
.evidence-row span {
  border-right: 0.6px solid var(--ink);
  text-align: center;
}
.evidence-head span:last-child,
.evidence-row span:last-child {
  border-right: 0;
}
.evidence-row {
  border-bottom: 0.6px solid rgba(20, 20, 20, 0.45);
}
.paste-area {
  display: grid;
  place-content: center;
  height: 66px;
  margin-top: 7px;
  border: 0.6px dashed var(--ink);
  font-size: 4.6px;
  color: var(--gray);
  text-align: center;
}
.page-no {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 4px;
  text-align: center;
  color: var(--gray);
}
</style>
