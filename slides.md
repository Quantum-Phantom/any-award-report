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