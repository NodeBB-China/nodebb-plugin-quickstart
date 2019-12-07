# QuickStart for NodeBB
本项目是 NodeBB 插件的快速开始轮子， 您可以通过本项目来快速初始化您的 NodeBB 插件项目。创建本项目是为了促进 NodeBB 追随 ES 的现代化。
您可以通过本项目来使用任何的 ES6+ 语法（如果不考虑引擎支持）。
有关 NodeBB 的 Hooks， 以及其他的开发信息。请访问 NodeBB 社区 或者 Github 中的 Wiki。

> 请注意： NodeBB v1.13.x 系统函数库，钩子已经基本支持 Promise 回调。 所以， 本库移除 Callbackify 部分。

# 开始
1. 克隆本项目至本地。
2. 删除项目中的 `.git` 文件夹
3. 使用 `git init` 初始化一个属于你的新仓库。
4. 执行 `yarn` 安装依赖（推荐使用 `yarn`)
4. 修改... 提交

# 调试
1. 编写插件，保存。
2. `yarn link` 来软链接插件
3. 在 NodeBB 目录下执行 `yarn link nodebb-plugin-quickstart` 来引入插件
4. `./nodebb build && ./nodebb dev` 启动 NodeBB 开发环境 

# 使用说明
编写完成后，别忘记为插件添加使用说明和屏幕截图哦！