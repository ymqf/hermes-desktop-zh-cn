/**
 * Hermes Desktop Chinese (Simplified) translations.
 * Keys follow a dot-separated namespace pattern: section.key
 */

const zhCN: Record<string, string> = {
  // ═══════════════════════════════════════════════════
  // Settings - Field Labels
  // ═══════════════════════════════════════════════════
  'field.model': '默认模型',
  'field.model_context_length': '上下文窗口',
  'field.fallback_providers': '备选模型',
  'field.toolsets': '已启用的工具集',
  'field.timezone': '时区',
  'field.display.personality': '人格风格',
  'field.display.show_reasoning': '推理过程',
  'field.agent.max_turns': '最大代理步数',
  'field.agent.image_input_mode': '图片附件',
  'field.terminal.cwd': '工作目录',
  'field.terminal.backend': '执行后端',
  'field.terminal.timeout': '命令超时',
  'field.terminal.persistent_shell': '持久 Shell',
  'field.terminal.env_passthrough': '环境变量透传',
  'field.file_read_max_chars': '文件读取限制',
  'field.tool_output.max_bytes': '终端输出限制',
  'field.tool_output.max_lines': '文件分页限制',
  'field.tool_output.max_line_length': '行长度限制',
  'field.code_execution.mode': '代码执行模式',
  'field.approvals.mode': '审批模式',
  'field.approvals.timeout': '审批超时',
  'field.approvals.mcp_reload_confirm': 'MCP 重载确认',
  'field.command_allowlist': '命令白名单',
  'field.security.redact_secrets': '隐藏密钥',
  'field.security.allow_private_urls': '允许私有 URL',
  'field.browser.allow_private_urls': '浏览器私有 URL',
  'field.browser.auto_local_for_private_urls': '私有 URL 本地浏览器',
  'field.checkpoints.enabled': '文件检查点',
  'field.checkpoints.max_snapshots': '检查点数量限制',
  'field.voice.record_key': '语音快捷键',
  'field.voice.max_recording_seconds': '最大录制时长',
  'field.voice.auto_tts': '朗读回复',
  'field.stt.enabled': '语音转文字',
  'field.stt.provider': '语音转文字提供商',
  'field.stt.local.model': '本地转录模型',
  'field.stt.local.language': '转录语言',
  'field.stt.elevenlabs.model_id': 'ElevenLabs STT 模型',
  'field.stt.elevenlabs.language_code': 'ElevenLabs 语言',
  'field.stt.elevenlabs.tag_audio_events': '标记音频事件',
  'field.stt.elevenlabs.diarize': '说话人分离',
  'field.tts.provider': '文字转语音提供商',
  'field.tts.edge.voice': 'Edge 语音',
  'field.tts.openai.model': 'OpenAI TTS 模型',
  'field.tts.openai.voice': 'OpenAI 语音',
  'field.tts.elevenlabs.voice_id': 'ElevenLabs 语音',
  'field.tts.elevenlabs.model_id': 'ElevenLabs 模型',
  'field.memory.memory_enabled': '持久记忆',
  'field.memory.user_profile_enabled': '用户画像',
  'field.memory.memory_char_limit': '记忆预算',
  'field.memory.user_char_limit': '画像预算',
  'field.memory.provider': '记忆提供商',
  'field.context.engine': '上下文引擎',
  'field.compression.enabled': '自动压缩',
  'field.compression.threshold': '压缩阈值',
  'field.compression.target_ratio': '压缩目标',
  'field.compression.protect_last_n': '保护最近消息数',
  'field.agent.api_max_retries': 'API 重试次数',
  'field.agent.service_tier': '服务层级',
  'field.agent.tool_use_enforcement': '工具调用强制',
  'field.delegation.model': '子代理模型',
  'field.delegation.provider': '子代理提供商',
  'field.delegation.max_iterations': '子代理轮次限制',
  'field.delegation.max_concurrent_children': '并行子代理',
  'field.delegation.child_timeout_seconds': '子代理超时',
  'field.delegation.reasoning_effort': '子代理推理力度',
  'field.auxiliary.vision.provider': '视觉提供商',
  'field.auxiliary.vision.model': '视觉模型',
  'field.auxiliary.compression.provider': '压缩提供商',
  'field.auxiliary.compression.model': '压缩模型',
  'field.auxiliary.title_generation.provider': '标题生成提供商',
  'field.auxiliary.title_generation.model': '标题生成模型',

  // ═══════════════════════════════════════════════════
  // Settings - Field Descriptions
  // ═══════════════════════════════════════════════════
  'desc.model': '新对话使用此模型，也可在输入框中临时切换。',
  'desc.model_context_length': '设为 0 则使用所选模型的默认上下文窗口。',
  'desc.fallback_providers': '默认模型失败时尝试的备用提供商:模型列表。',
  'desc.display.personality': '新会话的默认助手风格。',
  'desc.timezone': 'Hermes 需要本地时间上下文时使用。留空使用系统时区。',
  'desc.display.show_reasoning': '当后端提供推理过程时显示推理段落。',
  'desc.agent.image_input_mode': '控制图片附件发送给模型的方式。',
  'desc.terminal.cwd': '工具和终端操作的默认项目文件夹。',
  'desc.code_execution.mode': '代码执行对当前项目的限制严格程度。',
  'desc.terminal.persistent_shell': '后端支持时在命令之间保持 Shell 状态。',
  'desc.terminal.env_passthrough': '传入工具执行的环境变量。',
  'desc.file_read_max_chars': 'Hermes 单次文件请求可读取的最大字符数。',
  'desc.approvals.mode': 'Hermes 处理需要明确审批的命令的方式。',
  'desc.approvals.timeout': '审批提示等待超时的时间。',
  'desc.security.redact_secrets': '在模型可见内容中尽可能隐藏检测到的密钥。',
  'desc.checkpoints.enabled': '编辑文件前创建回滚快照。',
  'desc.memory.memory_enabled': '保存持久记忆以帮助未来的会话。',
  'desc.memory.user_profile_enabled': '维护用户偏好的紧凑画像。',
  'desc.context.engine': '管理接近上下文限制的长对话的策略。',
  'desc.compression.enabled': '对话变长时自动总结较早的上下文。',
  'desc.voice.auto_tts': '自动朗读助手回复。',
  'desc.stt.enabled': '启用本地或提供商支持的语音转录。',
  'desc.stt.elevenlabs.language_code': '可选的 ISO-639-3 语言代码。留空让 ElevenLabs 自动检测。',
  'desc.agent.max_turns': 'Hermes 停止运行前的工具调用轮次上限。',

  // ═══════════════════════════════════════════════════
  // Settings - Sections
  // ═══════════════════════════════════════════════════
  'section.model': '模型',
  'section.chat': '聊天',
  'section.appearance': '外观',
  'section.workspace': '工作区',
  'section.safety': '安全',
  'section.memory': '记忆与上下文',
  'section.voice': '语音',
  'section.advanced': '高级',

  // ═══════════════════════════════════════════════════
  // Settings - Appearance
  // ═══════════════════════════════════════════════════
  'appearance.title': '外观',
  'appearance.description': '这些是桌面端专用的显示偏好设置，不影响后端配置。',
  'appearance.colorMode': '颜色模式',
  'appearance.colorModeDesc': '选择固定模式或让 Hermes 跟随系统设置。',
  'appearance.toolCallDisplay': '工具调用显示',
  'appearance.toolCallDesc': '"产品"模式隐藏原始工具载荷；"技术"模式显示完整输入/输出。',
  'appearance.toolCallProduct': '简洁友好的工具活动摘要。',
  'appearance.toolCallProductDesc': '以简洁摘要呈现工具活动。',
  'appearance.toolCallTechnical': '包含原始工具参数/结果和底层细节。',
  'appearance.toolCallTechnicalDesc': '包含原始工具参数/结果及底层细节。',
  'appearance.theme': '主题',
  'appearance.themeDesc': '桌面端调色板。选定模式会叠加应用。',

  // ═══════════════════════════════════════════════════
  // Settings - Mode Options
  // ═══════════════════════════════════════════════════
  'mode.light': '浅色',
  'mode.lightDesc': '明亮桌面',
  'mode.dark': '深色',
  'mode.darkDesc': '低眩光工作区',
  'mode.system': '跟随系统',
  'mode.systemDesc': '跟随操作系统外观',

  // ═══════════════════════════════════════════════════
  // Settings - Search Placeholders
  // ═══════════════════════════════════════════════════
  'search.about': '关于 Hermes Desktop',
  'search.config': '搜索设置...',
  'search.gateway': '网关连接...',
  'search.keys': '搜索 API 密钥...',
  'search.mcp': '搜索 MCP 服务器...',
  'search.tools': '搜索技能和工具...',

  // ═══════════════════════════════════════════════════
  // Settings - Config Settings
  // ═══════════════════════════════════════════════════
  'config.on': '开',
  'config.off': '关',
  'config.none': '无',
  'config.notSet': '未设置',
  'config.commaSeparated': '逗号分隔的值',
  'config.settingsFailed': '设置加载失败',
  'config.autosaveFailed': '自动保存失败',
  'config.configImported': '配置已导入',
  'config.saving': '保存中...',
  'config.invalidJson': '无效的配置 JSON',
  'config.loading': '正在加载 Hermes 配置...',
  'config.nResults': '{{n}} 个结果',
  'config.noMatch': '无匹配设置',
  'config.noMatchHint': '尝试不同的搜索词或选择其他分区。',

  // ═══════════════════════════════════════════════════
  // Settings - Gateway (additional)
  // ═══════════════════════════════════════
  'gateway.loading': '正在加载网关设置...',
  'gateway.loadFailed': '网关设置加载失败',
  'gateway.incompleteTitle': '远程网关信息不完整',
  'gateway.incompleteSwitchMsg': '请先输入远程 URL 和会话令牌再切换到远程模式。',
  'gateway.incompleteTestMsg': '请先输入远程 URL 和会话令牌再进行测试。',
  'gateway.restarting': '网关连接重启中',
  'gateway.saved': '网关设置已保存',
  'gateway.willReconnect': 'Hermes Desktop 将使用保存的设置重新连接。',
  'gateway.applyFailed': '无法应用网关设置',
  'gateway.saveFailed': '无法保存网关设置',
  'gateway.reachable': '远程网关可达',
  'gateway.testFailed': '远程网关测试失败',
  'gateway.unavailableTitle': '网关设置不可用',
  'gateway.unavailableDesc': '桌面 IPC 桥接未暴露网关设置。',
  'gateway.envUnsetPrefix': '取消设置',
  'gateway.envUnsetAnd': '和',
  'gateway.envUnsetSuffix': '以使用下方保存的设置。',

  // ═══════════════════════════════════════════════════
  // Settings - Main
  // ═══════════════════════════════════════════════════
  'settings.resetConfirm': '确认将所有设置恢复为 Hermes 默认值？',
  'settings.exportFailed': '导出失败',
  'settings.resetFailed': '重置失败',
  'settings.close': '关闭设置',
  'settings.gateway': '网关',
  'settings.apiKeys': 'API 密钥',
  'settings.skillsTools': '技能与工具',
  'settings.mcp': 'MCP',
  'settings.about': '关于',
  'settings.exportConfig': '导出配置',
  'settings.importConfig': '导入配置',
  'settings.resetDefaults': '恢复默认值',

  // ═══════════════════════════════════════════════════
  // Settings - Gateway
  // ═══════════════════════════════════════════════════
  'gateway.title': '网关连接',
  'gateway.envOverride': '环境变量覆盖',
  'gateway.localDesc': 'Hermes Desktop 默认启动自己的本地网关...',
  'gateway.envControlled': '环境变量正在控制此桌面会话。',
  'gateway.localStart': '在 localhost 上启动私有 Hermes 后端...',
  'gateway.localLabel': '本地网关',
  'gateway.remoteDesc': '将此桌面端连接到远程 Hermes 后端...',
  'gateway.remoteLabel': '远程网关',
  'gateway.remoteUrl': '远程 URL',
  'gateway.remoteUrlDesc': '远程仪表板后端的基础 URL...',
  'gateway.tokenSaved': '已保存现有令牌',
  'gateway.pasteToken': '粘贴会话令牌',
  'gateway.sessionToken': '会话令牌',
  'gateway.tokenDesc': '仪表板会话令牌...',
  'gateway.testRemote': '测试远程',
  'gateway.saveRestart': '保存下次重启生效',
  'gateway.saveReconnect': '保存并重新连接',
  'gateway.openLogs': '打开日志',
  'gateway.diagnostics': '诊断',
  'gateway.revealLog': '在文件管理器中显示 desktop.log...',

  // ═══════════════════════════════════════════════════
  // Settings - API Keys
  // ═══════════════════════════════════════════════════
  'keys.openDocs': '打开提供商文档',
  'keys.docs': '文档',
  'keys.hideValue': '隐藏值',
  'keys.revealValue': '显示值',
  'keys.replace': '替换',
  'keys.set': '设置',
  'keys.clearValue': '清除值',
  'keys.notSet': '未设置',
  'keys.replaceCurrent': '替换当前值',
  'keys.enterValue': '输入值',
  'keys.saving': '保存中',
  'keys.save': '保存',
  'keys.cancel': '取消',
  'keys.otherProviders': '其他提供商',
  'keys.removeConfirm': '从 .env 中移除 {{key}}？',
  'keys.hideAdvanced': '隐藏高级',
  'keys.showAdvanced': '显示高级',
  'keys.llmProviders': 'LLM 提供商',
  'keys.loading': '正在加载 API 密钥和凭据...',
  'keys.loadFailed': 'API 密钥加载失败',

  // ═══════════════════════════════════════════════════
  // Settings - MCP
  // ═══════════════════════════════════════════════════
  'mcp.loading': '正在加载 MCP 服务器...',
  'mcp.loadFailed': 'MCP 配置加载失败',
  'mcp.removeFailed': '移除失败',
  'mcp.configured': '已配置',
  'mcp.nameRequired': '需要名称',
  'mcp.nameRequiredDesc': '请为此 MCP 服务器设置一个配置键。',
  'mcp.mustBeJson': '服务器配置必须是 JSON 对象',
  'mcp.invalidJson': '无效的 MCP JSON',
  'mcp.saved': 'MCP 服务器已保存',
  'mcp.savedHint': 'MCP 重载后生效。',
  'mcp.saveFailed': '保存失败',
  'mcp.gatewayUnavailable': '网关不可用',
  'mcp.reconnectHint': '重载 MCP 前请重新连接网关。',
  'mcp.reloaded': 'MCP 工具已重载',
  'mcp.reloadedHint': '新工具架构应用到新的轮次。',
  'mcp.title': 'MCP 服务器',
  'mcp.newServer': '新建服务器',
  'mcp.reloading': '重载中...',
  'mcp.reloadMcp': '重载 MCP',
  'mcp.noServers': '无 MCP 服务器',
  'mcp.noServersHint': '添加 stdio 或 HTTP 服务器以暴露 MCP 工具。',
  'mcp.editServer': '编辑服务器',
  'mcp.name': '名称',
  'mcp.serverJson': '服务器 JSON',
  'mcp.remove': '移除',
  'mcp.saveServer': '保存服务器',

  // ═══════════════════════════════════════════════════
  // Settings - Tools/Skills
  // ═══════════════════════════════════════════════════
  'tools.capabilitiesFailed': '能力加载失败',
  'tools.toolsetsRefreshFailed': '工具集刷新失败',
  'tools.skillEnabled': '技能已启用',
  'tools.skillDisabled': '技能已禁用',
  'tools.appliesNewSessions': '对新会话生效。',
  'tools.toolsetEnabled': '工具集已启用',
  'tools.toolsetDisabled': '工具集已禁用',
  'tools.loading': '正在加载技能和工具集...',
  'tools.enabled': '已启用',
  'tools.loadingConfig': '正在加载配置...',
  'tools.loadFailed': '工具配置加载失败',
  'tools.skills': '技能',
  'tools.toolsets': '工具集',
  'tools.configured': '已配置',
  'tools.needsKeys': '需要密钥',
  'tools.more': '+{{n}} 更多',
  'tools.ready': '就绪',
  'tools.includedNous': 'Nous 订阅包含...',
  'tools.noApiKeyRequired': '无需 API 密钥。',
  'tools.needsSetup': '此提供商需要额外的设置步骤...',
  'tools.noProviders': '此工具集没有提供商选项...',
  'tools.noProvidersAvail': '目前没有可用的提供商。',
  'tools.providerSelected': '已选择提供商',
  'tools.providerActive': '现已激活。',
  'tools.forNow': '暂且如此。',

  // ═══════════════════════════════════════════════════
  // Settings - About / Updates
  // ═══════════════════════════════════════════════════
  'about.never': '从未',
  'about.justNow': '刚刚',
  'about.minAgo': '{{n}} 分钟前',
  'about.hoursAgo': '{{n}} 小时前',
  'about.daysAgo': '{{n}} 天前',
  'about.cantUpdate': '此版本无法在应用内自动更新。',
  'about.updateUnreachable': '无法连接更新服务器。',
  'about.updateInstalling': '正在安装更新。',
  'about.updateReady': '新更新已就绪（包含 {{n}} 项更改）。',
  'about.upToDate': '您正在使用最新版本。',
  'about.tapCheck': '点击"立即检查"查找更新。',
  'about.version': '版本 {{n}}',
  'about.versionUnavailable': '版本不可用',
  'about.updates': '更新',
  'about.checking': '检查中...',
  'about.checkNow': '立即检查',
  'about.seeWhatsNew': '查看新功能',
  'about.releaseNotes': '发行说明',
  'about.autoUpdates': '自动更新',
  'about.autoUpdatesDesc': 'Hermes 会自动检查更新...',

  // ═══════════════════════════════════════════════════
  // Onboarding
  // ═══════════════════════════════════════════════════
  'onboarding.title': '让我们来配置 Hermes Agent',
  'onboarding.subtitle': '连接一个模型提供商即可开始聊天。大多数选项只需一键操作。',
  'onboarding.installing': 'Hermes 正在完成安装...',
  'onboarding.starting': '正在启动 Hermes...',
  'onboarding.nousDesc': '一个订阅，300+ 前沿模型 — 运行 Hermes 的推荐方式',
  'onboarding.collapse': '收起',
  'onboarding.otherProviders': '其他提供商',
  'onboarding.haveKey': '我有 API 密钥',
  'onboarding.recommended': '推荐',
  'onboarding.connected': '已连接',
  'onboarding.oneKey': '一个密钥，数百个模型 — 稳妥的默认选择',
  'onboarding.backToSignIn': '返回登录',
  'onboarding.saveFailed': '无法保存凭据。',
  'onboarding.pasteKey': '粘贴 API 密钥',
  'onboarding.connecting': '连接中',
  'onboarding.connect': '连接',
  'onboarding.startingSignIn': '正在启动 ... 的登录...',
  'onboarding.verifying': '正在与 ... 验证您的代码',
  'onboarding.pickingModel': '已连接。正在选择默认模型...',
  'onboarding.signInFailed': '登录失败，请重试。',
  'onboarding.pickDifferent': '选择其他提供商',
  'onboarding.signInWith': '使用 ... 登录',
  'onboarding.openedBrowser': '我们已在浏览器中打开 ...。',
  'onboarding.authorize': '在那里授权 Hermes。',
  'onboarding.copyCode': '复制授权码...',
  'onboarding.pasteCode': '粘贴授权码',
  'onboarding.reopenAuth': '重新打开授权页面',
  'onboarding.continue': '继续',
  'onboarding.cliSignIn': '通过自己的 CLI 登录...',
  'onboarding.runCommand': '在终端中运行此命令，然后返回点击"我已登录"',
  'onboarding.copy': '复制',
  'onboarding.cancel': '取消',
  'onboarding.defaultModel': '默认模型',
  'onboarding.freeTier': '免费版',
  'onboarding.pro': '专业版',
  'onboarding.free': '免费',
  'onboarding.tokenInOut': '{{in}} 进 / {{out}} 出 / Mtok',
  'onboarding.change': '更改',
  'onboarding.startChatting': '开始聊天',

  // ═══════════════════════════════════════════════════
  // Install Overlay
  // ═══════════════════════════════════════════════════
  'install.pending': '等待中',
  'install.installing': '安装中',
  'install.done': '完成',
  'install.skipped': '已跳过',
  'install.failed': '失败',
  'install.needsInstall': 'Hermes 需要一次性安装',
  'install.notAvailable': '自动首次安装尚不支持 ...。',
  'install.installCommand': '安装命令',
  'install.copyCommand': '复制命令',
  'install.viewDocs': '查看安装文档',
  'install.willInstallTo': '将安装到 ...',
  'install.ranRetry': '我已运行 — 重试',
  'install.installFailed': '安装失败',
  'install.settingUp': '正在设置 Hermes Agent',
  'install.finishingUp': '正在完成',
  'install.stepFailed': '安装步骤之一失败了...',
  'install.oneTimeSetup': '这是一次性设置...',
  'install.nOfM': '{{n}} / {{m}} 步完成',
  'install.fetching': '正在获取安装清单...',
  'install.error': '错误',
  'install.hideOutput': '隐藏安装输出',
  'install.showOutput': '显示安装输出',
  'install.noOutput': '暂无输出。',
  'install.copied': '已复制！',
  'install.copyOutput': '复制输出',
  'install.reloadRetry': '重新加载并重试',

  // ═══════════════════════════════════════════════════
  // Boot Failure
  // ═══════════════════════════════════════════════════
  'boot.couldntStart': 'Hermes 无法启动',
  'boot.gatewayError': '后台网关未能启动。请尝试以下恢复步骤...',
  'boot.retry': '重试',
  'boot.repairInstall': '修复安装',
  'boot.useLocalGateway': '使用本地网关',
  'boot.openLogs': '打开日志',
  'boot.repairHint': '修复会重新运行安装程序，可能需要几分钟...',
  'boot.hide': '隐藏',
  'boot.show': '显示',
  'boot.recentLogs': '最近的日志',

  // ═══════════════════════════════════════════════════
  // Updates Overlay
  // ═══════════════════════════════════════════════════
  'update.gettingReady': '准备中...',
  'update.downloading': '下载中...',
  'update.almostThere': '即将完成...',
  'update.finishingUp': '正在完成...',
  'update.restarting': '正在重启 Hermes...',
  'update.updateFromTerminal': '从终端更新',
  'update.paused': '更新已暂停',
  'update.checkingForUpdates': '正在检查更新...',
  'update.tryAgain': '重试',
  'update.couldntCheck': '无法检查更新',
  'update.close': '关闭',
  'update.cantUpdateSelf': '此版本的 Hermes 无法在应用内更新...',
  'update.notAvailable': '更新不可用',
  'update.checkConnection': '请检查网络连接后重试。',
  'update.upToDate': '您正在使用最新版本。',
  'update.allSet': '一切就绪',
  'update.newAvailable': '有新更新可用',
  'update.newReady': 'Hermes 新版本已准备安装。',
  'update.updateNow': '立即更新',
  'update.maybeLater': '稍后再说',
  'update.moreChanges': '+ {{n}} 项更多更改。',
  'update.installFromTerminal': '从终端安装',
  'update.installedFromCli': '您从命令行安装了 Hermes...',
  'update.pickUpNewVersion': 'Hermes 将使用新版本...',
  'update.done': '完成',
  'update.copied': '已复制',
  'update.copy': '复制',
  'update.updaterTakeover': 'Hermes 更新程序将接管...',
  'update.willClose': 'Hermes 将关闭以应用更新。',
  'update.didntFinish': '更新未完成',
  'update.nothingLost': '别担心 — 没有丢失任何内容...',
  'update.notNow': '暂时不更新',

  // ═══════════════════════════════════════════════════
  // Chat Sidebar
  // ═══════════════════════════════════════════════════
  'sidebar.newAgent': '新建代理',
  'sidebar.skills': '技能',
  'sidebar.messaging': '消息',
  'sidebar.artifacts': '产物',
  'sidebar.pinned': '已固定',
  'sidebar.agents': '代理',
  'sidebar.allPinned': '这里所有会话都已固定。取消固定以显示在最近列表中。',
  'sidebar.shiftClickPin': 'Shift+点击固定会话',
  'sidebar.loading': '加载中...',
  'sidebar.loadNMore': '加载更多 {{n}} 条',
  'sidebar.loadMore': '加载更多',
  'sidebar.showSingle': '显示为单个列表',
  'sidebar.groupWorkspace': '按工作区分组',
  'sidebar.ungroup': '取消分组',
  'sidebar.group': '分组',

  // ═══════════════════════════════════════════════════
  // Chat Composer
  // ═══════════════════════════════════════════════════
  'composer.startingHermes': '正在启动 Hermes...',
  'composer.sendFollowUp': '发送追问',
  'composer.message': '消息',
  'composer.cancel': '取消',
  'composer.save': '保存',
  'composer.queueMessage': '排队发送',
  'composer.stop': '停止',
  'composer.send': '发送',
  'composer.startVoice': '开始语音对话',
  'composer.unmute': '取消静音',
  'composer.mute': '静音',
  'composer.stopListening': '停止聆听并发送',
  'composer.endVoice': '结束语音对话',
  'composer.end': '结束',
  'composer.speaking': '说话中',
  'composer.transcribing': '转录中',
  'composer.thinking': '思考中',
  'composer.muted': '已静音',
  'composer.listening': '聆听中',
  'composer.stopDictation': '停止听写',
  'composer.transcribingDictation': '语音听写中',
  'composer.voiceDictation': '语音听写',

  // ═══════════════════════════════════════════════════
  // Composer Context Menu
  // ═══════════════════════════════════════════════════
  'ctx.attach': '附件',
  'ctx.files': '文件...',
  'ctx.folder': '文件夹...',
  'ctx.images': '图片...',
  'ctx.pasteImage': '粘贴图片',
  'ctx.url': 'URL...',
  'ctx.promptSnippets': '提示片段',
  'ctx.codeReview': '代码审查',
  'ctx.implementationPlan': '实施计划',
  'ctx.explainThis': '解释这个',
  'ctx.tip': '提示：输入 @ 以内联引用文件。',

  // ═══════════════════════════════════════════════════
  // Session Actions
  // ═══════════════════════════════════════════════════
  'session.unpin': '取消固定',
  'session.pin': '固定',
  'session.copyId': '复制 ID',
  'session.export': '导出',
  'session.rename': '重命名',
  'session.delete': '删除',
  'session.renameTitle': '重命名会话',
  'session.renameHint': '给此对话起一个好记的标题。留空可清除。',
  'session.untitled': '无标题会话',
  'session.renamed': '已重命名',
  'session.renameFailed': '重命名失败',

  // ═══════════════════════════════════════════════════
  // Notifications
  // ═══════════════════════════════════════════════════
  'notif.hide': '隐藏',
  'notif.show': '显示',
  'notif.more': '{{n}} 条更多通知',
  'notif.clearAll': '清除全部',
  'notif.details': '详情',
  'notif.copyDetail': '复制详情',
  'notif.copyFailed': '无法复制通知详情',

  // ═══════════════════════════════════════════════════
  // Boot / Loading
  // ═══════════════════════════════════════════════════
  'boot.startingDesktop': '正在启动 Hermes Desktop...',
  'boot.desktopReady': 'Hermes Desktop 已就绪',
  'boot.bootFailed': '桌面启动失败：...',
  'loading': '加载中',

  // ═══════════════════════════════════════════════════
  // Chat Intro
  // ═══════════════════════════════════════════════════
  'intro.greetings': '今天要处理什么？',

  // ═══════════════════════════════════════════════════
  // Cron
  // ═══════════════════════════════════════════════════
  'cron.topOfHour': '每小时整点',
  'cron.everyHour': '每小时的 :MM 分',
  'cron.disabled': '已禁用',
  'cron.scheduled': '已计划',
  'cron.noWorkspace': '无工作区',

  // ═══════════════════════════════════════════════════
  // Common
  // ═══════════════════════════════════════════════════
  'common.yes': '是',
  'common.no': '否',
  'common.ok': '确定',
  'common.confirm': '确认',
  'common.close': '关闭',
  'common.cancel': '取消',
  'common.save': '保存',
  'common.delete': '删除',
  'common.remove': '移除',
  'common.add': '添加',
  'common.edit': '编辑',
  'common.copy': '复制',
  'common.notifications': '通知',
  'common.copied': '已复制',
  'common.search': '搜索',
  'common.retry': '重试',
  'common.done': '完成',
  'common.error': '错误',
  'common.loading': '加载中...',
  'common.failed': '失败',
  'common.success': '成功',

  // ═══════════════════════════════════════════════════
  // Onboarding - additional keys for patcher
  // ═══════════════════════════════════════════════════
  'onboarding.pkceSubtitle': '在浏览器中登录，然后在此继续',
  'onboarding.deviceCodeSubtitle': '在浏览器中打开验证页 — Hermes 自动连接',
  'onboarding.externalSubtitle': '在终端中登录一次，然后回来聊天',
  'onboarding.getAKey': '获取密钥',
  'onboarding.editingQueue': '正在编辑器中编辑排队消息',

  // ═══════════════════════════════════════════════════
  // Install - additional keys for patcher
  // ═══════════════════════════════════════════════════
  'install.fullTranscript': '完整日志已保存到',

  // ═══════════════════════════════════════════════════
  // Hermes Bots & Routines
  // ═══════════════════════════════════════════════════
  'bots.newBot': '新建机器人',
  'bots.createBot': '创建机器人',
  'bots.whatShouldHelp': '这个机器人主要负责什么工作？',
  'bots.agentHelp': '该智能体主要负责什么？',
  'bots.newChat': '与该智能体开启新对话',
  'bots.hiddenRoster': '从花名册中隐藏',
  'bots.defaultCannotDelete': '默认配置不能被删除。',
  'bots.agentInbox': '智能体收件箱',
  'bots.aBot': '机器人',
  'bots.routines': '例程任务',
  'bots.schedule': '执行计划',
  'bots.createCronjob': '创建定时任务',
  'bots.createCronjobHint': '为此机器人创建定时任务',
  'bots.deleteCronjob': '删除定时任务',
  'bots.manageGroups': '管理群组',
  'bots.removeFromGroups': '从所有群组中移除',
  'bots.selectFirst': '请先选择一个机器人或群组。',
  'bots.botChat': '机器人对话',
  'bots.statusUnknown': '状态未知',
  'bots.updateGateway': '请升级网关以启用机器人模式',
  'bots.updateDesktop': '请升级 Hermes Desktop 以打开新的机器人对话。',
  'bots.pictureGenFailed': '群头像生成失败',
  'bots.nameTaken': '群组名称已被占用。',
}

export default zhCN

