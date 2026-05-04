[README.md](https://github.com/user-attachments/files/27366230/README.md)
# Nora

基于 [Hexo](https://hexo.io/) 与 [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 的个人博客源码，文章以 Markdown 编写，默认语言为简体中文。

## 技术栈

| 项目 | 说明 |
|------|------|
| [Hexo](https://hexo.io/) | 7.x 静态站点生成器 |
| [hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) | 主题（Card UI） |
| Node.js | 建议 LTS 版本 |

## 环境要求

- [Node.js](https://nodejs.org/)（建议当前 LTS）
- npm 或兼容的包管理器（pnpm / yarn）

## 快速开始

克隆仓库后，在项目根目录执行：

```bash
npm install
```

本地预览（默认 <http://localhost:4000/>）：

```bash
npm run server
```

生成静态文件到 `public/`：

```bash
npm run build
```

清理生成产物：

```bash
npm run clean
```

## 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run server` | 启动本地开发服务器 |
| `npm run build` | 执行 `hexo generate` 生成站点 |
| `npm run clean` | 清理缓存与生成目录 |
| `npm run deploy` | 一键部署（需已配置 `_config.yml` 中的 `deploy`） |

## 目录说明

| 路径 | 说明 |
|------|------|
| `source/_posts/` | 博客文章（Markdown） |
| `source/about/` | 关于页等独立页面 |
| `themes/butterfly/` | Butterfly 主题 |
| `_config.yml` | Hexo 主配置（站点信息、URL、部署等） |
| `_config.butterfly.yml` | Butterfly 主题配置（导航、样式、插件等） |

新建文章示例：

```bash
npx hexo new "文章标题"
```

## 部署说明

当前仓库中的 `_config.yml` 使用 `hexo-deployer-git` 推送到 GitHub Pages 仓库。部署前请确认：

1. `url` 已改为你的线上域名（与 GitHub Pages 或自定义域名一致）。
2. `deploy` 中的 `repo`、`branch` 与目标仓库一致。
3. 本机已配置可访问该仓库的凭据（如 SSH key 或 token），再执行 `npm run deploy`。

生成目录 `public/` 与部署缓存已在 `.gitignore` 中忽略，适合将**源码仓库**与**Pages 仓库**分开维护。

## 主题与文档

- Butterfly 中文文档：<https://butterfly.js.org/>
- Butterfly English：<https://butterfly.js.org/en/>
- Hexo 文档：<https://hexo.io/docs/>

## 许可

博客正文与站点配置版权归作者所有。主题 [hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 遵循其仓库内的开源许可；使用前请阅读主题仓库说明。
