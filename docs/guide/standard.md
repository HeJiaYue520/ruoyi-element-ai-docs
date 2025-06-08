# 📁 项目规范
**开发工具：** Visual Studio Code

## 🔧 代码与样式规范工具
### 🚀 ESLint（JS/TS 代码规范）
1. **依赖安装**
   ```bash
   pnpm add eslint @antfu/eslint-config -D
   ```
2. **核心配置**（`eslint.config.js`）
   ```javascript
   import antfu from '@antfu/eslint-config';
   export default antfu({
     vue: { blockOrder: ['script', 'template', 'style'] },
     typescript: true,
     stylistic: { indent: 2, semi: true, quotes: 'single' },
     rules: { 'no-console': 'off' },
     ignores: ['**/node_modules/**', '**/dist/**']
   });
   ```

### 🎨 StyleLint（CSS 样式规范）
1. **依赖安装**
   ```bash
   pnpm add stylelint stylelint-config-standard -D
   ```
2. **核心配置**（`.stylelintrc.cjs`）
   ```javascript
   module.exports = {
     extends: ['stylelint-config-standard'],
     rules: {
       'color-hex-length': 'long',
       'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['v-deep'] }]
     }
   };
   ```

## 🛠️ 编辑器统一配置（EditorConfig）
**配置文件**（`.editorconfig`）
```ini
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
[*.md]
max_line_length = off
```

## 🐾 Git 提交规范
### 📦 依赖工具
- `husky`：Git 钩子管理
- `lint-staged`：暂存区代码检查
- `cz-git`：提交信息规范

### ⚙️ 核心配置
1. **Husky 钩子**
   ```bash
   pnpm prepare # 初始化钩子目录
   npx husky add .husky/pre-commit "npx lint-staged"
   ```
2. **暂存区检查**（`.lintstagedrc`）
   ```json
   {
     "*.{js,ts,vue}": ["eslint --fix", "git add"]
   }
   ```
3. **提交信息规范**（`commitlint.config.js`）
   ```javascript
   module.exports = {
     rules: { 'type-enum': [2, 'always', ['feat', 'fix', 'docs']] },
     prompt: { types: [{ value: 'feat', name: '🚀 新增功能' }] }
   };
   ```

## 📄 快捷命令（package.json）
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:style": "stylelint \"**/*.{css,scss}\"",
    "fix": "eslint . --fix && stylelint --fix \"**/*.{css,scss}\""
  }
}
```
