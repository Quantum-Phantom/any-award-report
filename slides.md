---
theme: default
title: 把公文，做成一出戏
transition: fade
mdc: true
layout: cover
cast: /assets/people/whole_guoxiaozhang.png
fonts:
  sans: Noto Sans SC
  serif: Noto Serif SC
  mono: JetBrains Mono
---

# 把公文，<br>做成一出戏

<div class="cover-sub">
一个用 <span class="mono">Vue</span> 写的叙事游戏，<br>
和它背后的七个界面决策。
</div>

<!-- <div class="cover-meta">
model-couple-ui · Vue 3.5 · Vite 7<br>
1920×1080 固定舞台
</div> -->

<div
  class="cover-seal"
  v-motion
  :initial="{ scale: 1.8, rotate: -30, opacity: 0 }"
  :enter="{ scale: 1, rotate: 0, opacity: 1, transition: { duration: 320 } }"
>
  <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="125" />
</div>

<!--
开场先不自我介绍，先让印章落下来。落完再说第一句：“这不是一次 UI 走查，是七个决策。”
-->

---
layout: default
clicks: 2
---

# 界面设计

<div class="grid grid-cols-[2fr_2fr] gap-6">
<div v-click="1">
<div class="swatch-row">
  <div class="swatch paper">
  <strong>纸</strong>
  <span>#fcfaf9</span>
  <span>页面底色 · 80%</span>
  </div>
  <div class="swatch ink">
  <strong>墨</strong>
  <span>#141414</span>
  <span>结构与文字 · 18%</span>
  </div>
  <div class="swatch red">
  <strong>印</strong>
  <span>#d0241c</span>
  <span>权威与批注 · ≤2%</span>
  </div>
</div>

<div class="snippet-note" style="margin-top: 12px;"></div>

<Snippet file="tokens.css" :highlight="[[1, 6]]" />

<div class="font-table">
  <div class="font-row"><span>界面 / 正文</span><div>思源黑体 — 清楚、克制、不抢戏</div></div>
  <div class="font-row"><span>公文 / 标题</span><div>宋体、仿宋 — <span v-mark.highlight.red="4">公文段落用仿宋</span></div></div>
  <div class="font-row"><span>编号 / 页码</span><div class="mono">JetBrains Mono — — 03 —</div></div>
</div>

</div>
<Stage scale="0.68" size="1440 × 900" style="gap: 9px;margin-top: 14px;" v-click="2" />
</div>

<!--
强调“设计稿即代码”——这里的色值是从 src/style.css 里 <<< 引的，演示时改文件幻灯片会变。
-->

---
layout: default
eyebrow: 第一幕 ／ 群聊
clicks: 3
---

# 群聊式对话：委员会出场
<div class="grid grid-cols-[2fr_2fr] gap-6">
  <div class="chat-stage">
  <div class="chat-panel">
  <div class="chat-topbar">
  <span>奖励执行委员会（7人）　工作群</span>
  <span class="clock">08:50</span>
  </div>
  <div class="chat-body">
  <ChatLine
  name="郭校长" time="08:50" avatar="/assets/people/thumbnail_guoxiaozhang.png"
  text="@所有人 请奖励执行委员会全体成员参加优秀情侣奖筹备会议，地点308会议室，会议时间12:00—14:00。"
  />
  <ChatLine v-click="1" name="赵副主任" time="08:50" avatar="/assets/people/thumbnail_zhaofuzhuren.png" text="收到" />
  <ChatLine v-click="1" name="钱教授" time="08:50" avatar="/assets/people/thumbnail_qianjiaoshou.png" text="收到" />
  <ChatLine v-click="1" name="孙处长" time="08:51" avatar="/assets/people/thumbnail_sunchuzhang.png" text="收到" />
  <ChatLine v-click="1" name="李部长" time="08:51" avatar="/assets/people/thumbnail_libuzhang.png" text="收到" />
  <ChatLine v-click="1" name="周处长" time="08:51" avatar="/assets/people/thumbnail_zhouchuzhang.png" text="收到" />
  <ChatLine v-click="1" name="郭校长" time="08:51" avatar="/assets/people/thumbnail_guoxiaozhang.png" text="好，大家按时来开会" speaker />
  </div>
  <div class="chat-send">
  <span>回复</span><i>收到</i><b>发送</b>
  </div>
  </div>
  </div>

  <div class="note-stack">

  <div class="note-item" v-click="2">
  <b><span style="font-size: 12px;">赵副主任</span></b><br>
  保守 | 理论派 | 负责起草公文 | 看重公平公正公开
  </div>
  <div class="note-item" v-click="2">
  <b><span style="font-size: 12px;">钱教授</span></b><br>
  严厉 | 学术派 | 看重评奖的真实性 | 主张可量化的学术标准
  </div>
  <div class="note-item" v-click="2">
  <b><span style="font-size: 12px;">孙处长</span></b><br>
  亲切 | 学生处处长 | 关心心理健康 | 反对量化与标签化
  </div>
  <div class="note-item" v-click="2">
  <b><span style="font-size: 12px;">李部长</span></b><br>
  热情 | 宣传部部长 | 关心学校形象 | 看重表现力与话题度
  </div>
  <div class="note-item" v-click="2">
  <b><span style="font-size: 12px;">周处长</span></b><br>
  平和 | 财务处处长 | 讲原则 | 主张宁缺毋滥
  </div>
  <div style="height: 6px;"></div>
  <div class="note-item" v-click="3">
  <b><span style="font-size: 15px;">吴主任</span></b><br>
  玩家扮演！
  </div>
</div>
</div>

<!--
这是“叙事 UI”最典型的手法：进度不是进度条，是时间在流逝。补一句实现细节——暂停时把 elapsed 冻结，所以 Esc 不会让对话在后台跑完。
-->

---
layout: scene
image: /assets/places/meeting_room.png
eyebrow: 第二幕 ／ 12:00 ／ 308 会议室
---

<div class="meeting-head">
  <div>
  <div class="scene-tag">第二幕　／　12:00　／　308 会议室</div>
  <div class="meeting-title">第二种台词：会议室对话</div>
  </div>
  <div class="clip-card">
  512 × 1024 原画<br>
  + <b>height: 292px / object-fit: cover</b><br>
  → 胸像
  </div>
</div>

<img class="cast-left" :class="{ dim: $clicks >= 1 }" src="/assets/people/whole_guoxiaozhang.png" alt="郭校长">
<img class="cast-center" :class="{ dim: $clicks >= 1 }" src="/assets/people/whole_quanjiaoshou.png" alt="钱教授">
<img class="cast-right" :class="{ speaking: $clicks >= 1 }" src="/assets/people/whole_sunchuzhang.png" alt="孙处长">

<div class="dialogue-box" v-click="1">
  <div class="speaker">孙处长</div>
  <p>
  <span v-click="2">意见不同不等于不优秀。</span>
  <span v-click="2">尊重边界、平等协商、保留各自的朋友与生活，</span>
  <span v-click="2" v-mark.underline.red="3">才是互相支持。</span>
  </p>
  <div class="dialogue-meta">
  <span>议题 ／ 关于开展“优秀情侣奖”试点评选</span>
  <span>继续 →</span>
  </div>
</div>

<!--
这是“零素材改动”的取巧，也是我最后悔的地方——如果重来，先出胸像，省掉裁切参数里那一堆魔法数字。
-->

---
layout: default
eyebrow: 第三幕 ／ 一页 A4
clicks: 3
---

# 对话的结果：正式通知与报名表

<div class="grid-2" style="margin-top: 10px; grid-template-columns: 0.86fr 1.05fr; gap: 28px; align-items: start;">
  <div>
  <div class="a4-frame" style="height: 419px; overflow: hidden;">
  <div class="a4-scaler">
  <OfficialNotice :reveal="$clicks >= 1" :zoom="$clicks >= 2" />
  </div>
  </div>
  <div class="kicker" style="margin-top: 8px;">630px WIDTH ／ A4 RATIO ／ 0.47 PREVIEW</div>
  </div>

  <div class="a4-copy">
  <div class="param-row"><span>宽度</span><div>630px = A4 比例</div></div>
  <div class="param-row"><span>字号</span><div>仿宋 16.93 / 29px 行距</div></div>
  <div class="param-row"><span>格式</span><div>红头 + 文号 + 印发栏 + 页码</div></div>

  <div class="quote">
  <span v-click="1">“双方分别自愿，</span>
  <span v-click="1">实践为据，隐私从简，</span>
  <span v-click="1">宣传另行授权。</span><br>
  <span v-click="2" v-mark.underline.red="2">请您核阅后发布。”</span>
  <cite style="font-size: 9px;">周处长 ／ 拟稿 · 待核阅</cite>
  </div>

  <div class="note-stack">

  <div style="height: 6px;"></div>
  <div class="note-item" v-click="3">
  <b><span style="font-size: 12px;">所有尺寸按公文规范调</span></b><br>
  </div>
  <div class="note-item" v-click="3">
  <b><span style="font-size: 12px;">仿真阅读器</span></b><br>
  放大 1.4 倍，支持横向滚动
  </div>
</div>
  </div>
</div>

<!--
顺带说一句可滚动的 A4 阅读器：overflow: auto + 放大 1.4 倍 + 横向滚动，像在真看文件。
-->

---
layout: default
eyebrow: 第三幕 ／ 一页 A4
clicks: 1
---

# 空白表样

<div class="form-row">
  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }"
       :style="{ opacity: $clicks >= 1 ? 1 : 0.12 }">
    <FormSheet variant="cover" page="1" />
  </div>

  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }"
       :style="{ opacity: $clicks >= 1 ? 1 : 0.12 }">
    <FormSheet variant="applicant" page="2" person="甲" />
  </div>

  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }"
       :style="{ opacity: $clicks >= 1 ? 1 : 0.12 }">
    <FormSheet variant="applicant" page="3" person="乙" />
  </div>

  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }"
       :style="{ opacity: $clicks >= 1 ? 1 : 0.12 }">
    <FormSheet variant="evidence" page="4" />
  </div>
</div>

<div class="form-points">
  <!-- <span>四页成册 · 双面打印 · 长边翻页</span>
  <span>每个留白带 aria-label「（空白）」</span>
  <span>页脚写明“不代表已填写、签署或提交”</span> -->
</div>

<!--
全项目最“较真”的一页。语义准确优先于好看——表样不能被误读为已提交材料，这在评奖类叙事里是硬要求。
-->

---
layout: doc
eyebrow: 第四幕 ／ 审阅
clicks: 4
---

# 信息很密，但决定只有一个

<div class="review-grid">
  <article class="review-card" :class="{ selected: $clicks >= 2 }" v-click="1">
  <h3>林一 · 周澄</h3>
  <div class="meta">提交日期 2025-05-03 ／ 游戏内已提交</div>
  <dl>
  <dt>姓名</dt><dd>林一</dd><dt>姓名</dt><dd>周澄</dd>
  <dt>专业</dt><dd>中文</dd><dt>专业</dt><dd>设计</dd>
  <dt>年级</dt><dd>大三</dd><dt>年级</dt><dd>大三</dd>
  <dt>绩点</dt><dd>3.8</dd><dt>绩点</dt><dd>3.7</dd>
  </dl>
  <div class="statement">
  个人陈述 300 字：我们一起做完跨专业课程展，也各自保留朋友与安排。遇到冲突时，先把时间表摊开，再决定谁让一步……
  </div>
  <button type="button">{{ $clicks >= 2 ? '取消入围' : '由玩家列入入围名单' }}</button>
  </article>

  <article class="review-card" v-click="1">
  <h3>陈默 · 许禾</h3>
  <div class="meta">提交日期 2025-05-04 ／ 游戏内已提交</div>
  <dl>
  <dt>姓名</dt><dd>陈默</dd><dt>姓名</dt><dd>许禾</dd>
  <dt>专业</dt><dd>物理</dd><dt>专业</dt><dd>建筑</dd>
  <dt>年级</dt><dd>大四</dd><dt>年级</dt><dd>大三</dd>
  <dt>绩点</dt><dd>3.9</dd><dt>绩点</dt><dd>3.6</dd>
  </dl>
  <div class="statement">
  个人陈述 300 字：我们在同一个实验室做项目，也会为彼此留出独处的时间。公开授权一栏，我们选择不公开照片……
  </div>
  <button type="button">由玩家列入入围名单</button>
  </article>
</div>

::right::

<div class="kicker" style="margin-top: 46px;">DATA BOUNDARY ／ 数据边界</div>

<div class="boundary-list">
  <div class="boundary-item" v-click="1">
  <strong>服务端只下发审阅投影</strong>
  前端拿到的就是这几列。
  </div>
  <div class="boundary-item" v-click="2">
  <strong>入围是玩家的裁定</strong>
  委员会不干预。
  </div>
  <div class="boundary-item" v-click="3" style="border-bottom: 0;">
  <strong>所以“泄题”在架构上<span style="color: var(--red);">不可能</span></strong>
  浏览器根本拿不到语气和陈述稿。
  </div>
</div>

<!--
这里讲数据隔离——浏览器根本拿不到语气和陈述稿，所以“泄题”在架构上不可能。
-->

---
layout: default
eyebrow: 第五幕 ／ 答辩
clicks: 4
---

# 把不可控的 AI，塞进一个可控的流程

<div style="margin-top: 18px;">
  <Rail :active="$clicks" />
</div>

<div class="defense-transcript">
  <div class="transcript-line">
  <span class="speaker">林一</span>
  <p style="margin: 0;">我们各自保留自己的朋友和安排。遇到冲突时，先把时间表摊开，再决定谁让一步。</p>
  </div>
  <div class="transcript-line" v-click="1">
  <span class="speaker">钱教授</span>
  <p style="margin: 0;">如果一方撤回，你们认为评委会应当如何处理已经提交的材料？</p>
  </div>
  <div class="transcript-line" v-click="2">
  <span class="speaker">周澄</span>
  <p style="margin: 0;">撤回不需要说明私人原因。已经提交的材料应当停止流转，只保留必要的记录。</p>
  </div>
</div>

<div style="margin-top: auto;">
  <div class="defense-controls">
  <span class="fake-btn">返回审阅</span>
  <span class="fake-btn" :class="{ disabled: $clicks >= 3 }">仅发表看法</span>
  <span class="fake-btn" :class="{ disabled: $clicks >= 3 }">跳过</span>
  <span class="fake-btn primary">提问</span>
  </div>

  <div class="decision-row" v-click="4">
  <span>本局裁定</span>
  <select><option>授予 · 林一 / 周澄</option><option>本届空缺</option></select>
  <label><input type="checkbox" checked> 确认锁定，不能改判</label>
  <span class="kicker" style="margin-left: auto;">REVISION / confirmed</span>
  </div>
</div>

<!-- <div class="defense-notes">
  <span>任何时刻只有一个 primary 按钮</span>
  <span>revision 防并发</span>
  <span>confirmed 二次确认，判了不能改</span>
</div> -->

<!--
克制是刻意的——每一步都必须让玩家看见，而不是被模型抢走。这里可以停顿，让观众读完六个阶段。
-->

---
layout: default
eyebrow: 技术亮点 ／ 存档
clicks: 5
---

# 刷新不丢局，改文件不炸档

<div class="save-grid">
  <div>
  <div class="between" style="margin-bottom: 7px;">
  <span class="kicker">localStorage / excellent-couple-v3</span>
  <span class="kicker">JSON</span>
  </div>
  <SaveState :active="$clicks" />
  <div class="kicker" style="margin-top: 8px;">formal_defense_v1 → 服务端独立行 ／ 键 session_id::couple_id</div>
  </div>

  <div>
  <div class="load-rule" :class="{ on: $clicks >= 1 }">
  <strong>scene 不在 scenes 里 → 重置</strong>
  <span>新增或删除幕次时，旧档不会把玩家卡在空场景。</span>
  </div>
  <div class="load-rule" :class="{ on: $clicks >= 2 }">
  <strong>selected 过滤掉已失效 id</strong>
  <span>材料文件换了一批，旧选择不会指向不存在的人。</span>
  </div>
  <div class="load-rule" :class="{ on: $clicks >= 3 }">
  <strong>index 夹紧到 0..n-1</strong>
  <span>删掉一对候选后，旧存档里的 defense.order 还留着它。</span>
  </div>
  <div class="load-rule" :class="{ on: $clicks >= 4 }">
  <strong>defense 为空 → 退回 review</strong>
  <span>不给玩家一个没有下一步的答辩页。</span>
  </div>

  <p v-click="5" class="save-note">
  load() 是全文件最容易出 bug 的地方，<br>
  所以它有三重兜底。
  </p>
  </div>
</div>

<!--
讲一个真实坑——删掉一对候选后，旧存档里 defense.order 还留着那个 id，不夹紧就会白屏。
-->

---
layout: bare
eyebrow: 结束 ／ 请核阅
---

<div class="end-slide">
  <div class="end-title">请核阅</div>
  <div class="mono">
  <a href="https://github.com/Any-Award/Any-Award-UI" target="_blank" rel="noopener">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
    github.com/Any-Award/Any-Award-UI
  </a>
  </div>
  <div class="end-seal" v-motion :initial="{ scale: 1.6, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 320 } }">
  <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="126" />
  </div>
</div>

<!--
用游戏里的公文语气收尾，和第 1 页闭环。之后不切页，把这一页留在屏幕上。
-->
