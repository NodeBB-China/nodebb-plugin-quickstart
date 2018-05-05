# QuickStart for NodeBB
本项目是 NodeBB 插件的快速开始轮子， 您可以通过本项目来快速初始化您的 NodeBB 插件项目。创建本项目是为了促进 NodeBB 追随 ES 的现代化。
您可以通过本项目来使用任何的 ES6+ 语法（如果不考虑引擎支持）。
有关 NodeBB 的 Hooks， 以及其他的开发信息。请访问 NodeBB 社区 或者 Github 中的 Wiki。

# 开始
1. 克隆本项目至本地。
2. 删除项目中的 `.git` 文件夹
3. 使用 `git init` 初始化一个属于你的新仓库。
4. 修改... 提交

# 安装依赖
```
pnpm i
```
# 使用类静态方法
例如, 你在 `core.js` 中这样编写:
```javascript
class Core {
    static func () {
        return 'Hello, World!'
    }
}
```

我们需要在 `library.js` 中做出如下更改:
```javascript
// 获取对象的所有键
//  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(origin))
const methods = Object.getOwnPropertyNames(origin)

// 删除不必要的键
// _.pull(methods, 'constructor')
// 如果类使用静态方法， 请注释掉上方， 并使用下方的代码代替
_.pull(methods, 'prototype', 'length', 'name')

// 载入插件库核心
// const Origin = require('./src/core')
// const origin = new Origin()
const origin = require('./src/core')
```
