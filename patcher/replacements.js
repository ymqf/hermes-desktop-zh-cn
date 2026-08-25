/**
 * Hermes Desktop 中文汉化替换规则
 *
 * 每条规则定义了需要替换的文件路径（相对于 apps/desktop/）以及精确字符串替换。
 * patcher 会读取此文件，逐一应用替换并注入 import 语句。
 *
 * 注意：已使用 t() 函数的文件（如 constants.ts, boot.ts, page-loader.tsx 等）不需要在此列出。
 */

'use strict'

module.exports = [
  // ═══════════════════════════════════════════════════════════════════
  // about-settings.tsx — 部分残留英文
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/settings/about-settings.tsx',
    replacements: [
      // "Last checked" 时间显示前缀
      { find: "Last checked {relativeTime(status?.fetchedAt)}", replace: "上次检查 {relativeTime(status?.fetchedAt)}" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // desktop-onboarding-overlay.tsx — 大量硬编码英文
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/components/desktop-onboarding-overlay.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      // FlowSubtitle 常量 - 需要替换带引号的完整值
      { find: "pkce: 'Opens your browser to sign in, then continues here',", replace: "pkce: t('onboarding.pkceSubtitle')," },
      { find: "device_code: 'Opens a verification page in your browser \u2014 Hermes connects automatically',", replace: "device_code: t('onboarding.deviceCodeSubtitle')," },
      { find: "external: 'Sign in once in your terminal, then come back to chat'", replace: "external: t('onboarding.externalSubtitle')" },

      // Header 组件
      { find: "Let's get you setup with Hermes Agent", replace: "t('onboarding.title')" },
      { find: "Connect a model provider to start chatting. Most options take one click.", replace: "t('onboarding.subtitle')" },

      // Preparing 组件
      { find: "'Hermes is finishing install. This usually takes under a minute on first run.'", replace: "t('onboarding.installing')" },
      { find: "'Starting Hermes\u2026'", replace: "t('onboarding.starting')" },

      // Picker 组件
      { find: "'Looking up providers...'", replace: "t('common.loading')" },
      { find: "{showAll ? 'Collapse' : 'Other providers'}", replace: "{showAll ? t('onboarding.collapse') : t('onboarding.otherProviders')}" },
      { find: "I have an API key", replace: "t('onboarding.haveKey')" },

      // FeaturedProviderRow - 使用更精确的匹配
      { find: ">{Recommended}<", replace: `>{t('onboarding.recommended')}<` },

      // FEATURED_PITCH 常量
      { find: "'One subscription, 300+ frontier models \u2014 the recommended way to run Hermes'", replace: "t('onboarding.nousDesc')" },

      // KeyProviderRow
      { find: "'One key, hundreds of models \u2014 a solid default'", replace: "t('onboarding.oneKey')" },

      // ApiKeyForm
      { find: "Back to sign in", replace: "t('onboarding.backToSignIn')" },
      { find: "'Could not save credential.'", replace: "t('onboarding.saveFailed')" },
      { find: "'Paste API key'", replace: "t('onboarding.pasteKey')" },
      { find: "{saving ? 'Connecting' : 'Connect'}", replace: "{saving ? t('onboarding.connecting') : t('onboarding.connect')}" },

      // FlowPanel
      { find: "`Starting sign-in for ${title}...`", replace: "t('onboarding.startingSignIn', { provider: title })" },
      { find: "`Verifying your code with ${title}...`", replace: "t('onboarding.verifying', { provider: title })" },
      { find: "`${title} connected. Picking a default model...`", replace: "t('onboarding.pickingModel')" },
      { find: "'Sign-in failed. Try again.'", replace: "t('onboarding.signInFailed')" },
      { find: "Pick a different provider", replace: "t('onboarding.pickDifferent')" },
      { find: "`Sign in with ${title}`", replace: "t('onboarding.signInWith', { provider: title })" },
      { find: "`We opened ${title} in your browser.`", replace: "t('onboarding.openedBrowser', { provider: title })" },
      { find: "Authorize Hermes there.", replace: "t('onboarding.authorize')" },
      { find: "Copy the authorization code and paste it below.", replace: "t('onboarding.copyCode')" },
      { find: "'Paste authorization code'", replace: "t('onboarding.pasteCode')" },
      { find: "Re-open authorization page", replace: "t('onboarding.reopenAuth')" },
      // external_pending
      { find: "`Waiting for you to authorize...`", replace: "t('onboarding.authorize') + '...'" },

      // CodeBlock
      { find: "{copied ? <Check className=\"size-4\" /> : 'Copy'}", replace: "{copied ? <Check className=\"size-4\" /> : t('onboarding.copy')}" },

      // ConfirmingModelPanel
      { find: ">Default model<", replace: `>{t('onboarding.defaultModel')}<` },
      { find: ">Free tier<", replace: `>{t('onboarding.freeTier')}<` },
      { find: ">Pro<", replace: `>{t('onboarding.pro')}<` },
      { find: "price.free ? 'Free' : `${price.input || '?'} in / ${price.output || '?'} out per Mtok`", replace: "price.free ? t('onboarding.free') : t('onboarding.tokenInOut', { in: price.input || '?', out: price.output || '?' })" },
      { find: ">Change<", replace: `>{t('onboarding.change')}<` },
      { find: ">Start chatting<", replace: `>{t('onboarding.startChatting')}<` },

      // DocsLink (Get a key)
      { find: ">Get a key<", replace: `>{t('onboarding.getAKey')}<` },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // updates-overlay.tsx — 部分残留英文
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/updates-overlay.tsx',
    replacements: [
      // ApplyingView
      { find: "'Updating Hermes\u2026'", replace: "t('update.restarting')" },
      // ErrorView
      { find: ">Try again<", replace: `>{t('common.retry')}<` },
      { find: ">Not now<", replace: `>{t('update.notNow')}<` },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // sidebar/index.tsx — 硬编码英文导航和标签
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/chat/sidebar/index.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      // SIDEBAR_NAV
      { find: "label: 'New agent'", replace: "label: t('sidebar.newAgent')" },
      { find: "label: 'Skills'", replace: "label: t('sidebar.skills')" },
      { find: "label: 'Messaging'", replace: "label: t('sidebar.messaging')" },
      { find: "label: 'Artifacts'", replace: "label: t('sidebar.artifacts')" },
      // SidebarAllPinnedState
      { find: "Everything here is pinned. Unpin a chat to show it in recents.", replace: "t('sidebar.allPinned')" },
      // SidebarPinnedEmptyState
      { find: "Shift click to pin a chat", replace: "t('sidebar.shiftClickPin')" },
      // Section labels
      { find: 'label="Pinned"', replace: 'label={t("sidebar.pinned")}' },
      { find: 'label="Agents"', replace: 'label={t("sidebar.agents")}' },
      // aria-labels
      { find: "aria-label={agentsGrouped ? 'Show agents as a single list' : 'Group agents by workspace'}", replace: "aria-label={agentsGrouped ? t('sidebar.showSingle') : t('sidebar.groupWorkspace')}" },
      { find: "title={agentsGrouped ? 'Ungroup agents' : 'Group by workspace'}", replace: "title={agentsGrouped ? t('sidebar.ungroup') : t('sidebar.group')}" },
      // SidebarLoadMoreRow
      { find: "const label = loading ? 'Loading\u2026' : step > 0 ? `Load ${step} more` : 'Load more'", replace: "const label = loading ? t('sidebar.loading') : step > 0 ? t('sidebar.loadNMore', { n: step }) : t('sidebar.loadMore')" },
      // No workspace fallback
      { find: "'No workspace'", replace: "t('cron.noWorkspace')" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // composer/index.tsx — 硬编码英文 placeholder 和按钮
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/chat/composer/index.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      // placeholder
      { find: "const placeholder = disabled ? 'Starting Hermes...' : 'Send follow-up'", replace: "const placeholder = disabled ? t('composer.startingHermes') : t('composer.sendFollowUp')" },
      // aria-label
      { find: 'aria-label="Message"', replace: 'aria-label={t("composer.message")}' },
      // Editing queued turn
      { find: "Editing queued turn in composer", replace: "t('composer.editingQueue')" },
      // Cancel / Save buttons in queue edit
      { find: ">Cancel<", replace: `>{t('composer.cancel')}<` },
      { find: ">Save<", replace: `>{t('composer.save')}<` },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // composer/controls.tsx — 硬编码英文 aria-label 和 title
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/chat/composer/controls.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      // Start voice conversation
      { find: 'aria-label="Start voice conversation"', replace: 'aria-label={t("composer.startVoice")}' },
      { find: 'title="Start voice conversation"', replace: 'title={t("composer.startVoice")}' },
      // Send/Queue/Stop aria-label
      { find: "aria-label={busy ? (busyAction === 'queue' ? 'Queue message' : 'Stop') : 'Send'}", replace: "aria-label={busy ? (busyAction === 'queue' ? t('composer.queueMessage') : t('composer.stop')) : t('composer.send')}" },
      { find: "title={busy ? (busyAction === 'queue' ? 'Queue message' : 'Stop') : 'Send'}", replace: "title={busy ? (busyAction === 'queue' ? t('composer.queueMessage') : t('composer.stop')) : t('composer.send')}" },
      // ConversationPill - mute
      { find: "aria-label={muted ? 'Unmute microphone' : 'Mute microphone'}", replace: "aria-label={muted ? t('composer.unmute') : t('composer.mute')}" },
      { find: "title={muted ? 'Unmute microphone' : 'Mute microphone'}", replace: "title={muted ? t('composer.unmute') : t('composer.mute')}" },
      // Stop listening
      { find: 'aria-label="Stop listening and send"', replace: 'aria-label={t("composer.stopListening")}' },
      { find: 'title="Stop listening and send"', replace: 'title={t("composer.stopListening")}' },
      { find: "<span>Stop</span>", replace: "<span>{t('composer.stop')}</span>" },
      // End voice conversation
      { find: 'aria-label="End voice conversation"', replace: 'aria-label={t("composer.endVoice")}' },
      { find: 'title="End voice conversation"', replace: 'title={t("composer.endVoice")}' },
      { find: "<span>End</span>", replace: "<span>{t('composer.end')}</span>" },
      // Conversation status label
      { find: "? 'Speaking'", replace: "? t('composer.speaking')" },
      { find: ": 'Transcribing'", replace: ": t('composer.transcribing')" },
      { find: ": 'Thinking'", replace: ": t('composer.thinking')" },
      { find: ": 'Muted'", replace: ": t('composer.muted')" },
      { find: ": 'Listening'", replace: ": t('composer.listening')" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // composer/context-menu.tsx — 硬编码英文菜单项
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/chat/composer/context-menu.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      { find: ">Attach<", replace: `>{t('ctx.attach')}<` },
      { find: "Files\u2026", replace: "t('ctx.files')" },
      { find: "Folder\u2026", replace: "t('ctx.folder')" },
      { find: "Images\u2026", replace: "t('ctx.images')" },
      { find: "Paste image", replace: "t('ctx.pasteImage')" },
      { find: "URL\u2026", replace: "t('ctx.url')" },
      { find: "<span>Prompt snippets</span>", replace: `<span>{t('ctx.promptSnippets')}</span>` },
      { find: "{ label: 'Code review'", replace: "{ label: t('ctx.codeReview')" },
      { find: "{ label: 'Implementation plan'", replace: "{ label: t('ctx.implementationPlan')" },
      { find: "{ label: 'Explain this'", replace: "{ label: t('ctx.explainThis')" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // session-actions-menu.tsx — 硬编码英文菜单和对话框
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/chat/sidebar/session-actions-menu.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      // Menu items
      { find: "label: pinned ? 'Unpin' : 'Pin'", replace: "label: pinned ? t('session.unpin') : t('session.pin')" },
      { find: "label: 'Copy ID'", replace: "label: t('session.copyId')" },
      { find: "label: 'Export'", replace: "label: t('session.export')" },
      { find: "label: 'Rename'", replace: "label: t('session.rename')" },
      { find: "label: 'Delete'", replace: "label: t('session.delete')" },
      // Rename dialog
      { find: "<DialogTitle>Rename session</DialogTitle>", replace: "<DialogTitle>{t('session.renameTitle')}</DialogTitle>" },
      { find: "<DialogDescription>Give this chat a memorable title. Leave empty to clear.</DialogDescription>", replace: `<DialogDescription>{t('session.renameHint')}</DialogDescription>` },
      { find: "'Untitled session'", replace: "t('session.untitled')" },
      { find: "notify({ durationMs: 2_000, kind: 'success', message: 'Renamed' })", replace: "notify({ durationMs: 2_000, kind: 'success', message: t('session.renamed') })" },
      { find: "notifyError(err, 'Rename failed')", replace: "notifyError(err, t('session.renameFailed'))" },
      { find: ">Cancel<", replace: `>{t('common.cancel')}<` },
      { find: ">Save<", replace: `>{t('common.save')}<` },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // notifications.tsx — 少量残留英文
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/components/notifications.tsx',
    replacements: [
      { find: 'aria-label="Notifications"', replace: 'aria-label={t("common.notifications")}' },
      { find: 'aria-label="Dismiss notification"', replace: 'aria-label={t("common.close")}' },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // chat/intro.tsx — Fallback copy 英文
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/components/chat/intro.tsx',
    addImport: "import { t } from '@/i18n'",
    replacements: [
      // FALLBACK_COPY - 仅替换 headline
      { find: "'What are we moving today?'", replace: "t('intro.greetings')" },
      { find: "'What\\'s on your mind?'", replace: "t('intro.greetings')" },
      { find: "'What should Hermes look at?'", replace: "t('intro.greetings')" },
      { find: "'Where should we start?'", replace: "t('intro.greetings')" },
      { find: "'What needs attention?'", replace: "t('intro.greetings')" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // desktop-install-overlay.tsx — 残留英文
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/components/desktop-install-overlay.tsx',
    replacements: [
      // 日志行数显示
      { find: "({state.log.length} line{state.log.length === 1 ? '' : 's'})", replace: "({state.log.length} {state.log.length === 1 ? 'line' : 'lines'})" },
      // 日志保存提示
      { find: "Full transcript saved to", replace: "t('install.fullTranscript') + ' '" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // lib/chat-runtime.ts — 新建会话默认标题
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/lib/chat-runtime.ts',
    replacements: [
      { find: "export const NEW_SESSION_TITLE = 'New session'", replace: "export const NEW_SESSION_TITLE = '新建会话'" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // app/contrib/controller.tsx — 侧边栏与底部面板 Pane 标题
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/app/contrib/controller.tsx',
    replacements: [
      { find: "title: 'sessions',", replace: "title: '会话'," },
      { find: "title: 'terminal',", replace: "title: '终端'," },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // plugins/hermes-bots/plugin.js — Hermes Bots 插件界面完整汉化
  // ═══════════════════════════════════════════════════════════════════
  {
    file: 'src/plugins/hermes-bots/plugin.js',
    replacements: [
      // 对话框标题与描述
      { find: "jsx(DialogTitle, { children: 'New Bot' })", replace: "jsx(DialogTitle, { children: '新建机器人' })" },
      { find: "'A named teammate with its own memory, skills, and chat. It can message your other agents.'", replace: "'拥有独立记忆、技能和对话的团队成员，可以与其他智能体互发消息。'" },
      { find: "'New Bot…'", replace: "'新建机器人…'" },
      { find: "'New Bot'", replace: "'新建机器人'" },
      { find: '"New Bot"', replace: '"新建机器人"' },
      { find: '"Create Bot"', replace: '"创建机器人"' },
      { find: "'Create Bot'", replace: "'创建机器人'" },

      // 头像选择 Tab 按钮
      { find: "tabButton('bot', 'Bot')", replace: "tabButton('bot', '默认')" },
      { find: "tabButton('generate', 'Generate')", replace: "tabButton('generate', 'AI生成')" },
      { find: "tabButton('upload', 'Upload')", replace: "tabButton('upload', '上传')" },
      { find: "tabButton('pet', 'Pet')", replace: "tabButton('pet', '宠物')" },

      // 形象设置选项
      { find: "children: 'Auto'", replace: "children: '自动'" },
      { find: "'Auto — the name decides'", replace: "'自动 — 根据名称决定'" },
      { find: "'Randomize'", replace: "'随机形象'" },
      { find: "'Lock face'", replace: "'锁定形象'" },
      { find: "'Unlock'", replace: "'解锁形象'" },
      { find: "'Face follows the name.'", replace: "'形象跟随名称自动生成。'" },
      { find: "'Classic shapes'", replace: "'经典形状'" },

      // 表单字段标签与占位符
      { find: "labeled('Name',", replace: "labeled('机器人名称 (Name)'," },
      { find: "labeled('Title',", replace: "labeled('头衔 (Title)'," },
      { find: "labeled('Description',", replace: "labeled('角色设定与职责 (Description)'," },
      { find: "placeholder: 'inbox-triage'", replace: "placeholder: 'inbox-triage (英文唯一标识)'" },
      { find: "placeholder: 'Inbox Triage'", replace: "placeholder: '收件箱分流 / 助手头衔'" },
      { find: "placeholder: 'What should this Bot help with?'", replace: "placeholder: '这个机器人主要负责什么工作？'" },
      { find: "placeholder: 'What should this agent help with?'", replace: "placeholder: '该智能体主要负责什么？'" },

      // 侧边栏与主界面
      { find: "children: 'Active now'", replace: "children: '当前活跃'" },
      { find: "'aria-label': 'Active now'", replace: "'aria-label': '当前活跃'" },
      { find: "title: 'Bots'", replace: "title: '机器人'" },
      { find: "name: 'Bots'", replace: "name: '机器人'" },
      { find: "title: 'Cronjobs'", replace: "title: '定时任务'" },
      { find: "title: 'No bots yet'", replace: "title: '暂无机器人'" },
      { find: "'Cronjobs are unavailable until this agent appears in the roster.'", replace: "'在此智能体出现在花名册之前，定时任务暂不可用。'" },
      { find: "'New Group Chat'", replace: "'新建群聊'" },
      { find: "'Group settings'", replace: "'群组设置'" },
      { find: "'Manage groups'", replace: "'管理群组'" },
      { find: "'New Cronjob'", replace: "'新建定时任务'" },
      { find: "'Cronjob details'", replace: "'定时任务详情'" },
      { find: "'This chat never resets'", replace: "'此对话永不重置'" },
      { find: "label: 'Group chats'", replace: "label: '群聊'" },

      // 高级配置与能力选项
      { find: "['general', 'General']", replace: "['general', '常规']" },
      { find: "['capabilities', 'Capabilities']", replace: "['capabilities', '能力']" },
      { find: "'Clone from profile'", replace: "'从已有配置克隆'" },
      { find: "`Clone from profile (on ${targetLabel})`", replace: "`从配置克隆 (在 ${targetLabel})`" },
      { find: "'Inherit (launch profile)'", replace: "'继承（启动配置）'" },
      { find: "'inherited from launch profile'", replace: "'从启动配置继承'" },
      { find: "'Advanced — model, skills, toolsets, SOUL.md'", replace: "'高级 — 模型、技能、工具集、SOUL.md'" },
      { find: "'SOUL.md (optional — replaces the generated persona)'", replace: "'SOUL.md（可选 — 替代自动生成的人格设定）'" },
      { find: "'Leave blank to auto-generate from name/title/description + agent-messaging roster.'", replace: "'留空将根据名称、头衔、描述及智能体通讯录自动生成。'" },
      { find: "'Share keys & accounts with the main profile'", replace: "'与主配置共享密钥和账户'" },
      { find: "'Subscriptions, OAuth logins, and API keys stay shared (not copied), so token refreshes never invalidate each other. Uncheck for an isolated snapshot copy.'", replace: "'订阅、OAuth 登录及 API 密钥将保持共享（而非复制），Token 刷新不会互相失效。取消勾选将创建独立的快照副本。'" },
      { find: "'Capabilities (applies immediately — skills, tools, MCP)'", replace: "'能力（立即生效 — 技能、工具、MCP）'" },
      { find: "'Advanced configuration failed'", replace: "'高级配置失败'" },

      // 异常与状态处理
      { find: '"Could not load bot metadata"', replace: '"无法加载机器人元数据"' },
      { find: '"Could not load bot"', replace: '"无法加载机器人"' },
      { find: '"Could not load bot groups"', replace: '"无法加载机器人群组"' },
      { find: '"Could not create the agent."', replace: '"创建智能体失败。"' },
      { find: '"Update this gateway to use Bot Mode"', replace: '"请升级网关以启用机器人模式"' },
      { find: '"Update Hermes Desktop to open another Bot chat."', replace: '"请升级 Hermes Desktop 以打开新的机器人对话。"' },
      { find: '"Group picture generation failed"', replace: '"群头像生成失败"' },
      { find: '"No free name for the group."', replace: '"群组名称已被占用。"' },
      { find: '"Agent Inbox"', replace: '"智能体收件箱"' },
      { find: '"A bot"', replace: '"机器人"' },
      { find: '"Routines"', replace: '"例程任务"' },
      { find: '"Schedule"', replace: '"执行计划"' },
      { find: '"Create Cronjob"', replace: '"创建定时任务"' },
      { find: '"Create a cronjob for this bot"', replace: '"为此机器人创建定时任务"' },
      { find: '"Delete cronjob"', replace: '"删除定时任务"' },
      { find: '"Remove from all groups"', replace: '"从所有群组中移除"' },
      { find: '"Select a Bot or group first."', replace: '"请先选择一个机器人或群组。"' },
      { find: '"Bot Chat"', replace: '"机器人对话"' },
      { find: '"Status unknown"', replace: '"状态未知"' },
    ]
  },
]


