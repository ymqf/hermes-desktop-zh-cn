<p align="center">
  <h1 align="center">Hermes Desktop 中文汉化</h1>
  <p align="center">一键将 Hermes Desktop 界面切换为简体中文，支持全平台</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License: MIT" />
  <img src="https://img.shields.io/badge/语言-简体中文-red" alt="简体中文" />
  <img src="https://img.shields.io/badge/Hermes_Desktop-v0.14.x-blue" alt="Hermes Desktop" />
</p>

---

## 功能特点

- **一键安装** — 无需手动修改源码，运行脚本即可完成汉化
- **自动检测路径** — 自动定位 Hermes Desktop 安装目录，省去手动配置
- **全平台支持** — Windows、macOS、Linux 均可使用
- **完整汉化覆盖** — 设置页面、聊天界面、引导流程、安装进度、通知系统等全部翻译
- **自动备份** — 安装前自动备份原始文件（.bak 后缀），随时可回退
- **支持自定义翻译** — 可直接修改翻译文件，适配个人用词习惯

## 效果预览

> 汉化前（英文界面） → 汉化后（中文界面）

![汉化效果](screenshots/preview.png)

## 前置要求

| 要求 | 说明 |
|------|------|
| Hermes Desktop | 已通过[官方安装器](https://github.com/nicepkg/hermes)安装 |
| Node.js 18+ | Hermes Desktop 安装时自带，一般无需额外安装 |
| Git（可选） | 仅在克隆仓库时需要 |

## 安装方法

### 方式一：一键脚本（推荐）

```bash
# 克隆仓库
git clone https://github.com/ymqf/hermes-desktop-zh-cn.git
cd hermes-desktop-zh-cn

# Windows
scripts\install.cmd

# macOS / Linux
chmod +x scripts/install.sh
./scripts/install.sh
```

### 方式二：手动安装

```bash
# 克隆仓库
git clone https://github.com/ymqf/hermes-desktop-zh-cn.git
cd hermes-desktop-zh-cn

# 运行 patcher
node patcher/index.js

# 进入 Hermes 安装路径重建 Desktop
cd <你的Hermes安装路径>/apps/desktop
npm run build
```

### 方式三：指定安装路径

```bash
# 手动指定 Hermes Desktop 的安装目录
node patcher/index.js --path "C:\Users\你的用户名\AppData\Local\hermes\hermes-agent"
```

## 使用方法

1. 按照上述任一方式完成安装
2. **重启 Hermes Desktop**，汉化即自动生效
3. 如需恢复英文界面，参见下方 [常见问题](#常见问题-faq)

## 汉化范围

以下模块均已完整汉化：

| 模块 | 状态 |
|------|------|
| 设置页面（模型、聊天、外观、工作区、安全、记忆、语音、高级） | ✅ |
| API 密钥管理 | ✅ |
| MCP 服务器配置 | ✅ |
| 技能与工具管理 | ✅ |
| 网关连接设置 | ✅ |
| 引导 / 登录流程 | ✅ |
| 安装进度界面 | ✅ |
| 启动失败 / 错误处理 | ✅ |
| 更新提示 | ✅ |
| 聊天侧边栏 | ✅ |
| 消息输入框与语音控制 | ✅ |
| 右键菜单 | ✅ |
| 会话管理（固定、重命名、删除） | ✅ |
| Hermes Bot / 智能体与群聊管理 | ✅ |
| 定时例程与任务（Routines） | ✅ |
| 通知系统 | ✅ |
| 通用界面元素（按钮、加载状态等） | ✅ |


## 汉化原理

简要说明汉化的工作流程：

1. **注入翻译文件** — 在 `apps/desktop/src/i18n/` 目录下写入 `zh-CN.ts` 翻译资源
2. **源码替换** — 使用正则表达式将源文件中的英文字符串替换为 `t('key')` 国际化调用
3. **重新构建** — 运行 `npm run build` 重新编译桌面应用
4. **自动备份** — 所有被修改的原始文件均保存为 `.bak` 后缀备份

## 常见问题 FAQ

**Q: 汉化后 Hermes 更新了怎么办？**

A: Hermes 版本更新可能会覆盖汉化文件，重新运行安装脚本即可恢复汉化。

**Q: 如何恢复英文界面？**

A: 删除 `apps/desktop/src/i18n/` 目录，用 `.bak` 备份文件恢复原始源码，然后重新运行 `npm run build`。

**Q: 安装脚本报错怎么办？**

A: 请检查：
- Node.js 版本是否 ≥ 18（终端运行 `node -v` 确认）
- Hermes Desktop 是否通过官方安装器完整安装

**Q: 支持 Hermes 哪些版本？**

A: 目前基于 **v0.14.x** 测试通过，其他版本可能需要微调，欢迎反馈兼容情况。

**Q: 可以自定义翻译吗？**

A: 当然可以！直接编辑 `i18n/zh-CN.ts` 中的翻译文本，然后重新执行 `npm run build` 即可生效。

## 贡献指南

欢迎参与汉化完善，贡献方式：

- **提交 PR** — 修复翻译错误、优化翻译措辞、覆盖新的汉化区域
- **提 Issue** — 发现未汉化的文字或有翻译改进建议，欢迎开 Issue

翻译规范：
- 简洁自然，符合中文 UI 表达习惯
- 专业术语保留英文原文（如 MCP、API Key 等）
- 按钮文案尽量控制在 4 个字以内

## 致谢

- [Hermes Desktop](https://github.com/nicepkg/hermes) 官方项目
- 所有参与汉化贡献的开发者

## License

[MIT License](./LICENSE)

---

<p align="center">
  如果觉得有用，欢迎给仓库点个 ⭐ Star
</p>
