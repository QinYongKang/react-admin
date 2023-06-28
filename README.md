# react admin [react - ts - vite - template]

# 一个`React`后台管理模板「admin template」

## 支持`vite`生成动态路由，支持路由`keepalive`功能

## 代码简介，致力打造成一个标准的模版，可直接用于生产环境开发

#
- 账户 admin/user， 密码 任意密码


## 相关技术栈

- `react`，`react18`，`vite`，`vite3`，`antd`，`antd5.x`，`ts`，`typescript`，`redux`，`react-redux`，`@reduxjs/toolkit`
- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Antd5](https://ant.design)
- [ProComponents](https://procomponents.ant.design)
- [Redux](https://react-redux.js.org)
- [Redux-toolkit](https://redux-toolkit.js.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## 环境

- nodejs >= 16
- npm
- pnpm

### pnpm 相关命令 [pnpm](https://www.pnpm.cn/cli/add)

### 推荐使用 webstrom vscode 开发

### 开始

1. 安装依赖包
   ```bash
   pnpm install
   ```
2. 启动项目，访问链接：http://localhost:5793
   ```bash
   pnpm run dev
   ```

### 发布

- 生产环境打包
  ```bash
  pnpm build
  ```
- 测试环境打包
  ```bash
  pnpm build:sit
  ```

### 推荐使用`nginx`部署

- config 如下

```bash
# 后台管理模板
location ^~ /react-admin-template{
  index index.html;

  if ($request_uri ~* .*[.](js|css|map|jpg|png|svg|ico)$) {
    #设置过期时间120秒，120秒过后向服务器重新请求数据
    add_header Cache-Control max-age=120;
  }

  if ($request_filename ~* ^.*[.](html|htm)$) {
    add_header Cache-Control "public, no-cache";
    #html文件协商缓存，也就是每次都询问服务器，浏览器本地是是否是最新的，是最新的就直接用，非最新的服务器就会返回最新
  }


  try_files $uri $uri/ /react-admin-vite-antd5/index.html;
}
```

### 提交格式

- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 仅仅修改了文档，比如 README, CHANGELOG 等等
- `test`: 增加/修改测试用例，包括单元测试、集成测试等
- `style`: 修改了空行、缩进格式、引用包排序等等（不改变代码逻辑）
- `perf`: 优化相关内容，比如提升性能、体验、算法等
- `refactor`: 代码重构，「没有新功能或者 bug 修复」
- `chore`: 改变构建流程、或者增加依赖库、工具等
- `revert`: 回滚到上一个版本
- `merge`: 代码合并

## License

This project is licensed under the MIT License. .
