# EnforcementBook

使用 [Docs-Guides](https://github.com/RootCluster/Docs-Guides) 模版 Book 风格，构建的文档手册静态页面

## 要求

- [Node.js](https://nodejs.org/en/download): 18.0+
- [Yarn](https://yarn.nodejs.cn/en/docs/install#windows-stable): 1.20+

## 项目结构

```text
EnforcementBook-Web
  ├── blog                          # 博客文章目录
  │   └── 2020-05-30-hola.md
  ├── docs                          # 文档目录
  │   ├── doc1.md
  │   ├── doc2.md
  │   ├── doc3.md
  │   └── mdx.md
  ├── src                           # 页面或自定义的 React 组件目录
  │   ├── css
  │   │   └── custom.css
  │   └── pages
  │       ├── styles.module.css
  │       └── index.js
  ├── static                        # 静态文件目录
  │   └── img
  ├── babel.config.js
  ├── docusaurus.config.ts          # 配置文件目录
  ├── package.json                  # 项目依赖管理
  ├── README.md                     # 项目解释 README
  ├── sidebars.ts                   # 文档侧边栏配置文件
  └── tsconfig.json
```

## 相关操作

```bash
# clone 项目
git clone https://github.com/Enforcement-Handbook/EnforcementBook-Web.git
# 安装依赖
cd EnforcementBook-Web && yarn install

# 本地预览, 默认英文
yarn start
# 指定语言预览
yarn run start --locale zh-Hans
# build
yarn build


# 如何升级
# 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
yarn upgrade-interactive --latest

# 如果你使用的 npm，那么先安装 npm-check 包
npm install -g npm-check
# 使用命令检查更新, a 键选择所有, i 键反选选择
npm-check -u
```

### 更新数据源

数据源使用 subtree 集成，更新时, 先备份 docs 路径下的 `README.md` 文件，原因是 subtree 拉去的仓库有 README.md 会覆盖路径下的文件

```bash
# 首次 clone 项目后，要添加源
git subtree add --prefix=docs --squash https://github.com/Enforcement-Handbook/Laws.git main
# 更新最新的数据源
git subtree pull --prefix=docs --squash https://github.com/Enforcement-Handbook/Laws.git main
```

## 配置调整

更多配置可参考 [Docs-Guides](https://docusaurus.incoder.org) 模版项目，或官方 [Docusaurus](https://docusaurus.io) 文档

## 提交

```bash
# 提交前，本地编译没有明显错误时方可提交
yarn build
```
