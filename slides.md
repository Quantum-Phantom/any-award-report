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
一个用 Vue 写的叙事游戏，<br>
和它背后的七个界面决策。
</div>

<div class="cover-meta">
model-couple-ui · Vue 3.5 · Vite 7<br>
1920×1080 固定舞台
</div>

<div
  class="cover-seal"
  v-motion
  :initial="{ scale: 1.8, rotate: -30, opacity: 0 }"
  :enter="{ scale: 1, rotate: 0, opacity: 1, transition: { duration: 320 } }"
>
  <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="118" />
</div>

<!--
开场先不自我介绍，先让印章落下来。落完再说第一句：“这不是一次 UI 走查，是七个决策。”
-->

---
layout: default
eyebrow: 一句话 ／ 玩家不是观众
---

# 玩家不是观众，是吴主任

<div class="grid-2" style="margin-top: 18px; grid-template-columns: 1.45fr 0.75fr; gap: 34px;">
  <div class="stack" style="gap: 14px;">
  <p v-click="1" style="margin: 0; font-size: 13px; line-height: 1.9;">
  这是一款叙事游戏：你以奖励执行委员会主任的身份，主持一次评奖。
  </p>
  <p v-click="2" style="margin: 0; font-size: 13px; line-height: 1.9;">
  四幕：筹备会议 → 发布通知 → 审阅报名 → 答辩与裁定。
  </p>
  <p v-click="3" style="margin: 0; font-size: 13px; line-height: 1.9;">
  屏幕上没有仪表盘，只有群聊、会议室、一页 A4，<br>
  和五个会反问你的人。
  </p>
  </div>

  <div class="stack" style="gap: 8px;">
  <SceneChip number="01" title="筹备会议" note="先把边界谈清楚" :active="$clicks >= 1" />
  <SceneChip number="02" title="发布通知" note="一页纸，一枚章" :active="$clicks >= 2" />
  <SceneChip number="03" title="审阅报名" note="信息很密，决定只有一个" :active="$clicks >= 3" />
  <SceneChip number="04" title="答辩与裁定" note="每一步只给一个动作" :active="$clicks >= 3" />
  </div>
</div>

<div class="kicker" style="margin-top: 20px;">NOT A DASHBOARD ／ A PROCEDURE</div>

<!--
最后半句是钩子——“五个会反问你的人”直接引出后面的 AI。
-->

---
layout: default
eyebrow: 路线 ／ 19 分钟
clicks: 4
---

# 一条主线，四段路

<div class="route-grid">
  <div class="route-item" :class="{ current: $clicks === 0 }" :style="{ opacity: 1 }">
  <div class="route-n">一</div>
  <div class="route-title">视觉系统</div>
  <div class="route-words"><span>约束</span><span>纸墨红</span><span>舞台</span></div>
  </div>
  <div class="route-item" :class="{ current: $clicks === 1 }" :style="{ opacity: $clicks >= 1 ? 1 : 0.32 }">
  <div class="route-n">二</div>
  <div class="route-title">五幕实现</div>
  <div class="route-words"><span>聊天</span><span>公文</span><span>答辩</span></div>
  </div>
  <div class="route-item" :class="{ current: $clicks === 2 }" :style="{ opacity: $clicks >= 2 ? 1 : 0.32 }">
  <div class="route-n">三</div>
  <div class="route-title">工程边界</div>
  <div class="route-words"><span>同源</span><span>刹车</span><span>可达性</span></div>
  </div>
  <div class="route-item" :class="{ current: $clicks >= 3 }" :style="{ opacity: $clicks >= 3 ? 1 : 0.32 }">
  <div class="route-n">四</div>
  <div class="route-title">复盘</div>
  <div class="route-words"><span>取舍</span><span>测试</span><span>经验</span></div>
  </div>
</div>

<div class="timeline">
  <span class="now" :style="{ left: `${8 + $clicks * 23}%` }" />
  <span>00</span><span>04</span><span>09</span><span>15</span><span>19 MIN</span>
</div>

<div class="deck-sub" style="margin-top: 20px;">
  第 9、14 页是重心；第 5、17、19 页可整段跳。
</div>

<!--
10 秒讲完，别恋战。四段路对应四个部分的章节页。
-->

---
layout: default
eyebrow: 问题 ／ 三个约束
---

# 三个约束，决定了这套 UI 长什么样

<div class="grid-3" style="margin-top: 20px;">
  <Paper v-click="1" class="constraint-card" label="CONSTRAINT 01 / 舞台">
  <h2>舞台</h2>
  <p>素材按整屏出图，断点会让构图崩。</p>
  <span class="arrow">→ 固定 1920×1080</span>
  </Paper>
  <Paper v-click="2" class="constraint-card" label="CONSTRAINT 02 / 文体">
  <h2>文体</h2>
  <p>用户不信这页纸，就不信这场评审。</p>
  <span class="arrow">→ 印刷体、公章、文号</span>
  </Paper>
  <Paper v-click="3" class="constraint-card" label="CONSTRAINT 03 / 模型">
  <h2>模型</h2>
  <p>会慢、会错、会超预算，而且不能回滚。</p>
  <span class="arrow">→ 一次只给一个动作</span>
  </Paper>
</div>

<div class="conclusion-bar" v-click="4">
  <span>先定约束，再谈风格。</span>
  <strong style="color: #ffb5ad; font-weight: 400;">风格是约束的形状。</strong>
</div>

<!--
这页是全片的论点页。讲完停 2 秒。
-->

---
layout: doc
eyebrow: 视觉系统 ／ 与代码同源
---

# 纸、墨、印

<div class="swatch-row">
  <div class="swatch paper" v-click="1">
  <strong>纸</strong>
  <span>#fcfaf9</span>
  <span>页面底色 · 80%</span>
  </div>
  <div class="swatch ink" v-click="2">
  <strong>墨</strong>
  <span>#141414</span>
  <span>结构与文字 · 18%</span>
  </div>
  <div class="swatch red" v-click="3">
  <strong>印</strong>
  <span>#d0241c</span>
  <span>权威与批注 · ≤2%</span>
  </div>
</div>

<div class="font-table">
  <div class="font-row"><span>界面 / 正文</span><div>思源黑体 — 清楚、克制、不抢戏</div></div>
  <div class="font-row"><span>公文 / 标题</span><div>宋体、仿宋 — <span v-mark.highlight.red="4">公文段落用仿宋</span></div></div>
  <div class="font-row"><span>编号 / 页码</span><div class="mono">JetBrains Mono — — 03 —</div></div>
</div>

<div class="snippet-note" style="margin-top: 12px;">色值不是另配的，是从 src/style.css 直接引的。</div>

<Snippet file="tokens.css" :highlight="[[1, 6]]" />

::right::

<div class="master-sample">
  <div>
  <div class="kicker">MASTER / 母版元素</div>
  <div class="master-title" style="margin-top: 12px;">优秀情侣奖</div>
  <div class="master-rule" />
  <p class="small" style="margin-top: 12px; color: var(--gray);">
  左上角眉 / 2px 墨线 /<br>
  双线框 / 右下页码
  </p>
  </div>

  <div class="master-seal">
  <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="92" />
  </div>

  <div class="between">
  <span class="master-page">— 05 —</span>
  <span class="kicker">SAME AS CODE</span>
  </div>
</div>

<!--
强调“设计稿即代码”——这里的色值是从 src/style.css 里 <<< 引的，演示时改文件幻灯片会变。
-->

---
layout: default
eyebrow: 舞台 ／ 1920×1080
clicks: 2
---

# 一块 1920×1080 的舞台，等比缩放

<div class="grid-2" style="margin-top: 16px; align-items: start; gap: 30px;">
  <div class="stage-copy">
  <div class="formula">
  scale = min(<br>
  &nbsp;&nbsp;innerWidth / 1920,<br>
  &nbsp;&nbsp;innerHeight / 1080<br>
  )
  </div>
  <Snippet file="stage.css" :highlight="[[9, 16]]" />
  <div class="stage-points">
  <div><span>WINDOW</span><span>1440 × 900 → scale 0.68</span></div>
  <div><span>LETTERBOX</span><span>黑边由 --ink 填满，不是白边</span></div>
  <div><span>PROMISE</span><span>只承诺桌面与投屏，不承诺手机</span></div>
  </div>
  </div>

  <Stage :active="$clicks >= 1" scale="0.68" size="1440 × 900" />
</div>

<div class="deck-sub" style="margin-top: 14px;">
  1280 以下宽度字号偏小 —— 这个代价，第 20 页会正面回答。
</div>

<!--
坦白代价——1280 以下宽度字号偏小，所以只承诺桌面与投屏，不承诺手机。这句会引出第 20 页。
-->

---
layout: default
eyebrow: 结构 ／ 组件地图
clicks: 3
---

# App 是剧场，场景是幕

<div class="grid-2" style="margin-top: 8px; grid-template-columns: 1.35fr 0.65fr; gap: 30px; align-items: center;">
  <ComponentTree :active="$clicks" />

  <div>
  <div class="stat-huge" v-click="1"><strong>9</strong><span>个组件</span></div>
  <div class="stat-huge" v-click="2"><strong>811</strong><span>行（含样式）</span></div>
  <div class="stat-huge" v-click="3"><strong>0</strong><span>个 UI 库</span></div>
  <p class="small" style="margin-top: 16px; color: var(--gray); line-height: 1.8;">
  没有路由，幕次是状态；<br>
  没有弹窗系统，浮层是 modal 字符串。
  </p>
  </div>
</div>

<!--
这里回答“为什么不用 Element Plus”——因为整套视觉是印刷体，组件库会带来第二套语言。
-->

---
layout: default
eyebrow: 状态 ／ 一次只发生一件事
clicks: 5
---

# 一次只发生一件事

<div style="margin-top: 10px;">
  <StateFlow :active="$clicks" />
</div>

<div class="between" style="margin-top: 4px; padding-top: 10px; border-top: 1px solid var(--ink);">
  <span class="small" style="color: var(--gray);">
  defense 的每个阶段由服务端返回，前端只负责“画出当前态 + 给一个按钮”。
  </span>
  <span class="kicker">state.scene ／ 6 VALUES</span>
</div>

<!--
这套状态机让全项目没有超过两层的条件嵌套。可点名 state.scene 只有 6 个取值。
-->

---
layout: default
eyebrow: 第一幕 ／ 群聊
clicks: 6
---

# 让“五分钟”看起来像五分钟

<div class="chat-stage">
  <div class="chat-panel">
  <div class="chat-topbar">
  <span>奖励执行委员会（7人）　工作群</span>
  <span class="clock"><span v-mark.circle.red="1">08:50</span></span>
  </div>
  <div class="chat-body">
  <ChatLine
  name="郭校长" time="08:50" avatar="/assets/people/thumbnail_guoxiaozhang.png"
  text="@所有人 请奖励执行委员会全体成员参加优秀情侣奖筹备会议，地点308会议室，会议时间12:00—14:00。"
  />
  <ChatLine v-click="1" name="赵副主任" time="08:50" avatar="/assets/people/thumbnail_zhaofuzhuren.png" text="收到" />
  <ChatLine v-click="2" name="钱教授" time="08:50" avatar="/assets/people/thumbnail_qianjiaoshou.png" text="收到" />
  <ChatLine v-click="3" name="孙处长" time="08:51" avatar="/assets/people/thumbnail_sunchuzhang.png" text="收到" />
  <ChatLine v-click="4" name="李部长" time="08:51" avatar="/assets/people/thumbnail_libuzhang.png" text="收到" />
  <ChatLine v-click="5" name="周处长" time="08:51" avatar="/assets/people/thumbnail_zhouchuzhang.png" text="收到" />
  <ChatLine v-click="6" name="郭校长" time="08:51" avatar="/assets/people/thumbnail_guoxiaozhang.png" text="好，大家按时来开会" speaker />
  </div>
  <div class="chat-send">
  <span>回复</span><i>收到</i><b>发送</b>
  </div>
  </div>

  <div class="note-stack">
  <div class="note-item" v-click="1">
  <b>08:50，不是 08:50:00</b><br>
  时间戳从第一条消息开始走。
  </div>
  <div class="note-item" v-click="2">
  <b>五个委员各自独立随机 2–4 秒回</b><br>
  不是排队，不是同时。
  </div>
  <div class="note-item" v-click="6">
  <b>全员回完，校长才补一句</b><br>
  900ms 后切幕。
  </div>
  <Snippet file="reply.js" :highlight="[[3, 7]]" />
  <div class="kicker">PROGRESS IS TIME, NOT A BAR</div>
  </div>
</div>

<!--
这是“叙事 UI”最典型的手法：进度不是进度条，是时间在流逝。补一句实现细节——暂停时把 elapsed 冻结，所以 Esc 不会让对话在后台跑完。
-->

---
layout: scene
image: /assets/places/meeting_room.png
eyebrow: 第一幕 ／ 12:00 ／ 308 会议室
clicks: 4
---

<div class="meeting-head">
  <div>
  <div class="scene-tag">第一幕　／　12:00　／　308 会议室</div>
  <div class="meeting-title">立绘不改一张图，<br>也能做出半身取景</div>
  </div>
  <div class="clip-card">
  640 × 1280 原画<br>
  + <b>clip-path: inset(0 0 755px 0)</b><br>
  → 胸像
  </div>
</div>

<img class="cast-left" :class="{ dim: $clicks >= 1 }" src="/assets/people/whole_guoxiaozhang.png" alt="郭校长">
<img class="cast-right" :class="{ speaking: $clicks >= 1 }" src="/assets/people/whole_sunchuzhang.png" alt="孙处长">

<div class="dialogue-box" v-click="1">
  <div class="speaker">孙处长</div>
  <p>
  <span v-click="2">意见不同不等于不优秀。</span>
  <span v-click="3">尊重边界、平等协商、保留各自的朋友与生活，</span>
  <span v-click="4" v-mark.underline.red="4">才是互相支持。</span>
  </p>
  <div class="dialogue-meta">
  <span>议题 01 ／ 关于开展“优秀情侣奖”试点评选</span>
  <span>继续 →</span>
  </div>
</div>

<!--
这是“零素材改动”的取巧，也是我最后悔的地方——如果重来，先出胸像，省掉裁切参数里那一堆魔法数字。
-->

---
layout: default
eyebrow: 第三幕 ／ 一页 A4
clicks: 4
---

# 一页纸，撑起整场戏的可信度

<div class="grid-2" style="margin-top: 10px; grid-template-columns: 0.86fr 1.05fr; gap: 28px; align-items: start;">
  <div>
  <div class="a4-frame" style="height: 419px; overflow: hidden;">
  <div class="a4-scaler">
  <OfficialNotice :reveal="$clicks >= 1" :zoom="$clicks >= 4" />
  </div>
  </div>
  <div class="kicker" style="margin-top: 8px;">630px WIDTH ／ A4 RATIO ／ 0.47 PREVIEW</div>
  </div>

  <div class="a4-copy">
  <div class="param-row"><span>WIDTH</span><div>630px = A4 比例</div></div>
  <div class="param-row"><span>TYPE</span><div>仿宋 16.93 / 29px 行距</div></div>
  <div class="param-row"><span>CHROME</span><div>红头 + 文号 + 印发栏 + 页码</div></div>

  <div class="quote">
  <span v-click="1">“双方分别自愿，</span>
  <span v-click="2">实践为据，隐私从简，</span>
  <span v-click="3">宣传另行授权。</span><br>
  <span v-click="4" v-mark.underline.red="4">请您核阅后发布。”</span>
  <cite>周处长 ／ 拟稿 · 待核阅</cite>
  </div>

  <div class="a4-footer">
  所有尺寸按公文规范调，不是“看起来像”。<br>
  可滚动的 A4 阅读器：overflow: auto + 1.4 倍放大。
  </div>
  </div>
</div>

<!--
顺带说一句可滚动的 A4 阅读器：overflow: auto + 放大 1.4 倍 + 横向滚动，像在真看文件。
-->

---
layout: default
eyebrow: 价值观 ／ 空白表样
clicks: 5
---

# 空白表样，必须看起来就是空的

<div class="form-row">
  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }" :style="{ opacity: $clicks >= 1 ? 1 : 0.12 }">
  <FormSheet variant="cover" page="1" />
  </div>
  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }" :style="{ opacity: $clicks >= 2 ? 1 : 0.12 }">
  <FormSheet variant="applicant" page="2" person="甲" />
  </div>
  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }" :style="{ opacity: $clicks >= 3 ? 1 : 0.12 }">
  <FormSheet variant="applicant" page="3" person="乙" />
  </div>
  <div class="form-thumb" :class="{ on: true, dim: $clicks >= 5 }" :style="{ opacity: $clicks >= 4 ? 1 : 0.12 }">
  <FormSheet variant="evidence" page="4" />
  </div>

  <div class="annotation" v-click="5">未授权 ≠ 不同意</div>
</div>

<div class="form-points">
  <span>四页成册 · 双面打印 · 长边翻页</span>
  <span>每个留白带 aria-label「（空白）」</span>
  <span>页脚写明“不代表已填写、签署或提交”</span>
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
  <article class="review-card" :class="{ selected: $clicks >= 3 }" v-click="1">
  <h3>林一 · 周澄</h3>
  <div class="meta">提交日期 2025-05-03 ／ 游戏内已提交</div>
  <dl>
  <dt>姓名</dt><dd>林一</dd><dt>姓名</dt><dd>周澄</dd>
  <dt>专业</dt><dd>中文</dd><dt>专业</dt><dd>设计</dd>
  <dt>年级</dt><dd>大三</dd><dt>年级</dt><dd>大三</dd>
  <dt>绩点</dt><dd>3.8</dd><dt>绩点</dt><dd>3.7</dd>
  </dl>
  <div class="statement">
  个人陈述 300 字：我们一起做完跨专业课程展，也各自保留朋友与安排。遇到冲突时，先把时间表摊开，再决定谁让一步。
  </div>
  <button type="button">{{ $clicks >= 3 ? '取消入围' : '由玩家列入入围名单' }}</button>
  </article>

  <article class="review-card" v-click="2">
  <h3>陈默 · 许禾</h3>
  <div class="meta">提交日期 2025-05-04 ／ 游戏内已提交</div>
  <dl>
  <dt>姓名</dt><dd>陈默</dd><dt>姓名</dt><dd>许禾</dd>
  <dt>专业</dt><dd>物理</dd><dt>专业</dt><dd>建筑</dd>
  <dt>年级</dt><dd>大四</dd><dt>年级</dt><dd>大三</dd>
  <dt>绩点</dt><dd>3.9</dd><dt>绩点</dt><dd>3.6</dd>
  </dl>
  <div class="statement">
  个人陈述 300 字：我们在同一个实验室做项目，也会为彼此留出独处的时间。公开授权一栏，我们选择不公开照片。
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
  <strong>voice / profile / script / blocked</strong>
  永不出网。
  </div>
  <div class="boundary-item" v-click="3">
  <strong>入围是玩家的裁定</strong>
  委员会不干预。
  </div>
  <div class="boundary-item" v-click="4" style="border-bottom: 0;">
  <strong>所以“泄题”在架构上不可能</strong>
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

<div class="defense-controls">
  <span class="fake-btn">返回审阅</span>
  <span class="fake-btn" :class="{ disabled: $clicks >= 3 }">仅发表看法</span>
  <span class="fake-btn" :class="{ disabled: $clicks >= 3 }">跳过</span>
  <span class="fake-btn primary">提问</span>
</div>

<div class="decision-row" v-click="4">
  <span>本局裁定</span>
  <select><option>授予 · 林一 / 周澄</option><option>本届空缺</option></select>
  <label><input type="checkbox"> 确认锁定，不能改判</label>
  <span class="kicker" style="margin-left: auto;">REVISION / confirmed</span>
</div>

<div class="defense-notes">
  <span>任何时刻只有一个 primary 按钮</span>
  <span>revision 防并发</span>
  <span>confirmed 二次确认，判了不能改</span>
</div>

<!--
克制是刻意的——每一步都必须让玩家看见，而不是被模型抢走。这里可以停顿，让观众读完六个阶段。
-->

---
layout: default
eyebrow: AI ／ 刹车
clicks: 5
---

# 模型会慢、会错，UI 得先想好

<div class="grid-2" style="margin-top: 14px; gap: 14px;">
  <Paper v-click="1" class="brake-card" label="LOADING / 加载">
  <h3>加载</h3>
  <p>正在处理，请勿重复提交。<br>按钮全部禁用，不是转圈。</p>
  </Paper>

  <Paper v-click="2" class="brake-card" label="ERROR / 出错">
  <h3>出错</h3>
  <p>20 多条错误码映射成人话。</p>
  <span class="code-to-human"><s>AI schema invalid</s><br>模型返回了空帖子列表（要求 3 帖，实际 0 帖）。通知仍已发布。</span>
  </Paper>

  <Paper v-click="3" class="brake-card" label="RETRY / 重试">
  <h3>重试</h3>
  <p>只续接失败的那一句，<br>不重跑整场。</p>
  </Paper>

  <Paper v-click="4" class="brake-card" label="STALE / 失效">
  <h3>失效</h3>
  <p>材料文件被删 → 冻结该局，保留记录，<br>给“下一对”出口。</p>
  </Paper>
</div>

<div class="brake-bottom" :class="{ on: $clicks >= 5 }">
  <i />
  <span>绝不自动重试</span>
  <i />
</div>

<!--
量化一下预算：单局 20 次、答辩 60 次上限，含失败请求。所以“不自动重试”不是审美，是成本。
-->

---
layout: default
eyebrow: 可达性 ／ 键盘也能走完
clicks: 6
---

# 键盘也能走完四幕

<div class="grid-2" style="margin-top: 12px; grid-template-columns: 1.1fr 0.9fr; gap: 32px;">
  <div class="a11y-list">
  <div class="a11y-item" v-click="1"><span class="check">✓</span><span>Esc 暂停 / 返回</span></div>
  <div class="a11y-item" v-click="2"><span class="check">✓</span><span>浮层焦点回路（Tab 不逃逸）</span></div>
  <div class="a11y-item" v-click="3"><span class="check">✓</span><span>背景 inert</span></div>
  <div class="a11y-item" v-click="4"><span class="check">✓</span><span>aria-live 播报新消息</span></div>
  <div class="a11y-item" v-click="5"><span class="check">✓</span><span>outline: 3px double 可见焦点</span></div>
  <div class="a11y-item" v-click="6"><span class="check">✓</span><span>禁用态用删除线，不只降透明</span></div>
  </div>

  <div class="focus-demo">
  <div class="focus-ring" :class="'step-' + Math.min(2, Math.max(0, $clicks - 1))" />
  <button type="button" class="primary">继续 →</button>
  <button type="button">返回审阅</button>
  <button type="button" disabled>下一对 →</button>
  </div>
</div>

<div class="a11y-note">
  这些加起来不到 60 行，但决定了“能不能用”。<br>
  如果时间紧，这页可直接并入第 15 页讲一句。
</div>

<!--
这些加起来不到 60 行，但决定了“能不能用”。如果时间紧，这页可直接并入第 15 页讲一句。
-->

---
layout: default
eyebrow: 存档 ／ 三重兜底
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
layout: default
eyebrow: 网络 ／ 同源
clicks: 4
---

# 同源，是这套架构的底线

<div class="network-slide">
  <NetworkFlow :active="$clicks" />
</div>

<div class="secure-bar" v-click="4">
  <span>双击 index.html 连审阅页都打不开</span>
  <strong style="color: #ffb5ad; font-weight: 400;">这是设计，不是 bug。</strong>
</div>

<div class="deck-sub" style="margin-top: 12px;">
  Vite 只代理 /api/ 到显式端口；不开 CORS；fs.deny 挡住 tools/、runtime/、*.py、*.sqlite、*prompts.json；<br>
  CSP 禁内联 → 失败页用 DOM API 手写。
</div>

<!--
这段是安全叙事：候选材料、提示词、数据库都不在静态目录里，浏览器拿不到。
-->

---
layout: default
eyebrow: 测试 ／ 26 + 3 + 1
clicks: 4
---

# 26 + 3 + 1

<div class="test-grid">
  <div class="test-numbers">
  <div class="test-number" v-click="1"><strong>26</strong><span>个 Python 单测<br>真实模式门禁、失败续接、裁定保持</span></div>
  <div class="test-number" v-click="2"><strong>3</strong><span>个 node 脚本<br>奖项、聊天时钟、浏览器</span></div>
  <div class="test-number" v-click="3"><strong>1</strong><span>个 Edge headless 用例<br>真浏览器里的关键路径</span></div>
  <div class="test-note">测的是“时间”和“状态”，不是像素。</div>
  </div>

  <div class="terminal" v-click="4">
  <div class="terminal-bar"><span>PS C:\model-couple-ui</span><span>unittest</span></div>
  <div class="terminal-body">
  <div>$ python -m unittest discover -s tests</div>
  <div>....................................</div>
  <div>Ran 26 tests in 1.6s</div>
  <div>&nbsp;</div>
  <div><span class="ok" v-mark.box.red>OK</span></div>
  </div>
  </div>
</div>

<!--
1.6 秒，所以我每次都跑。像素没测——这类“印刷体”界面靠人眼和截图比对更划算，这句要主动说。
-->

---
layout: default
eyebrow: 取舍 ／ 诚实页
clicks: 5
---

# 我故意没做的四件事

<div class="tradeoff-table">
  <div class="tradeoff-row" v-click="1">
  <strong>响应式重排</strong>
  <span>素材是整屏出图，重排等于重画。</span>
  </div>
  <div class="tradeoff-row" v-click="2">
  <strong>动画库</strong>
  <span>全片只有位移与淡入，CSS 够用，省 40KB。</span>
  </div>
  <div class="tradeoff-row" v-click="3">
  <strong>移动端</strong>
  <span>公文在 390px 宽上不可读，硬做是假装能用。</span>
  </div>
  <div class="tradeoff-row" v-click="4">
  <strong>多奖项并行</strong>
  <span>先让一条线走通，再谈第二条。</span>
  </div>
</div>

<div class="tradeoff-end" v-click="5">
  如果重来：先出胸像素材，再做移动端。
</div>

<!--
评审最爱问“为什么不做 X”，这页先把话说了，比被问出来强。
-->

---
layout: chapter
seal: false
transition: slide-left
eyebrow: 复盘 ／ 三条经验
---

# 三条留下的经验

<div style="margin-top: 8px;">
  <div class="lesson" v-click="1">
  <span class="lesson-n">01</span>
  <div>
  <h3>约束就是风格</h3>
  <p>固定舞台 + 纸墨红，让 11 个界面自动统一。</p>
  </div>
  </div>
  <div class="lesson" v-click="2">
  <span class="lesson-n">02</span>
  <div>
  <h3>状态机就是交互</h3>
  <p>能画成图的流程，才敢交给 AI 去填内容。</p>
  </div>
  </div>
  <div class="lesson" v-click="3">
  <span class="lesson-n">03</span>
  <div>
  <h3>AI 要有刹车</h3>
  <p>宁可停在一个明确的按钮上，也不要自动重试。</p>
  </div>
  </div>
</div>

<div class="chapter-seal" v-click="3" v-motion :initial="{ scale: 1.6, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 320 } }">
  <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="118" />
</div>

<!--
这三条是全片的落点，语速放慢。
-->

---
layout: bare
eyebrow: 结束 ／ 请核阅
---

<div class="end-slide">
  <div class="end-title">请核阅</div>
  <div class="end-sub">谢谢 ／ 代码与文稿：model-couple-ui</div>
  <div class="end-seal" v-motion :initial="{ scale: 1.6, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 320 } }">
  <Seal text="优秀情侣奖" sub="2026 · 已核阅" :size="126" />
  </div>
</div>

<!--
用游戏里的公文语气收尾，和第 1 页闭环。之后不切页，把这一页留在屏幕上。
-->
