# 📦 项目安装与运行指南

本文将详细介绍如何克隆、安装和运行 `ruoyi-element-ai` 项目，适用于开发人员和贡献者快速上手。

# 一、克隆项目

### 🛎️ 操作说明

从代码仓库克隆项目到本地，支持从 Gitee（国内镜像）或 GitHub 官方仓库获取代码。

#### 🚀 Gitee 仓库（推荐国内用户）

```
git clone https://gitee.com/he-jiayue/ruoyi-element-ai.git

cd ruoyi-element-ai
```

#### 🛠️ GitHub 仓库（国际用户）

```
git clone https://github.com/element-plus-x/ruoyi-element-ai.git

cd ruoyi-element-ai
```

# 二、安装依赖

### ⚙️ 环境准备

推荐使用 **pnpm** 包管理器（v8+），相比 npm/yarn 具有更快的安装速度和更优的依赖管理（避免幻影依赖）。

确保已安装 [Node](https://nodejs.org/)[.js](https://nodejs.org/)（v16+）和 [p](https://pnpm.io/installation)[npm](https://pnpm.io/installation)。

### 💿 安装命令

```
pnpm install
```

💡 **提示**：若遇到网络问题，可尝试配置 npm 镜像源（如淘宝镜像）后重新安装。

# 三、启动与构建

### 🌐 开发模式

启动本地开发服务器，支持热更新（HMR），修改代码后自动刷新页面。

```
pnpm run dev
```

访问地址：`http://localhost:5173`（端口可在配置文件中修改）。

### 🚀 生产构建

生成用于部署的生产环境代码（压缩、优化资源），输出目录为 `dist/`。

```
pnpm build
```

可通过 `--mode` 参数指定环境（如 `pnpm build --mode staging`）。

# 四、代码校验与提交

### ✅ 代码质量检测

#### 🔍 ESLint 代码规范检测

检查 JavaScript/TypeScript 代码是否符合规范，输出错误信息。

```
pnpm lint
```

#### 🎨 StyleLint 样式格式化

自动修复 CSS/Scss 样式代码格式问题（需配合编辑器插件使用更佳）。

```
pnpm lint:stylelint
```

### 📤 规范提交

使用 `commitizen` 工具规范 Git 提交信息，提交前自动执行代码检测。

```
pnpm cz
```

按照交互提示选择提交类型（feat/fix/docs 等）并填写描述。

# 五、常见问题

1.  **依赖安装失败？**尝试清除缓存后重新安装：`pnpm cache clean && pnpm install`。

2.  **端口被占用？**修改 `vite.config.ts` 中的 `server.port` 配置项。

3.  **提交规范不通过？**确保代码已通过 ESLint 和 StyleLint 检测，提交信息符合开发规范。

通过以上步骤，您可以快速搭建项目开发环境并进行规范的代码管理。如需更多配置细节，请参考项目文档或联系技术支持。
