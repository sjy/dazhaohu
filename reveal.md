---
theme: 'white'
#transition: "zoom"
progresss: true
controls: true
slideNumber: false
overview: true
loop: true
history: true
---

# 怎么写一个能用的 [npm](https://docs.npmjs.com/all) 包

---

## 啥叫能用 ?

--

### 多环境

- browser
- node

--

### 漂亮的[badge](https://shields.io/#/)

--

### 发布到[npm](https://www.npmjs.com/package/dazhaohu)

--

### CLI[可选]

```bash
npx your-custome-command ...[option]
```

---

## 讲完了

```shell
npm init
npm build
npm publish
```

---

## [package.json](https://docs.npmjs.com/files/package.json)

- [all in one page](https://docs.npmjs.com/all)
- [npm package](https://registry.npmjs.org/npm/latest)
- webpack realated: `module`, `jsnext:main`, `browser`
- publish related: `files`, `version`, `private`, `publishConfig`
- `directories`: `bin`, `doc`, `test`, `lib`, `example`

---

## Module规范

[vue-dist](https://github.com/vuejs/vue/tree/dev/dist)

--

### CommonJS/CJS

```js
const depMod = require('someMod')
...
module.exports = exportMod
```

--

### ES Module

```js
import { namedExp }, defaultExp from 'someMod'
...
export const namedExport = {}
export default defaultExport = {}
```

--

### UMD

```js
(function (root, factory) {
  "use strict";

  // AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  }
  // CommonJS
  else if (typeof exports === 'object') {
    module.exports = factory();
  }
  // Browser
  else {
    root.add = factory();
  }
})(this, function () {
  "use strict";
 // 具体的代码
 ...
})
```

--

### [mjs](https://jakearchibald.com/2017/es-modules-in-browsers/)

```html
<script nomodule src="fallback.js"></script>
<script type="module">
  import { addTextToBody } from './utils.mjs';
  addTextToBody('Modules are pretty cool.');
</script>
```

---

## 构建 - Babel

---

## npm 发布

```bash
npm login
# update package
npm version <newVersion>
npm publish
```

--

### cnpm [sync](https://npm.kezaihui.com/sync/dazhoahu)

--

### Open Source CDN

- [jsDelivr](https://www.jsdelivr.com/)
- [unpkg](https://unpkg.com/dazhaohu@1.0.2/dist/dzh.js)
- cdnjs

```html
<script src="https://cdn.jsdelivr.net/npm/package@version/file"></script>
<script src="https://cdn.jsdelivr.net/npm/dazhaohu@1.0.2/dist/dzh.js"></script>
```

---

## 谢谢

---

## 参考

- [npm all docs]()
- [compat-table](https://kangax.github.io/compat-table/es6/)
- [Packages-wiki](http://wiki.commonjs.org/wiki/Packages/1.0)
- [vue](https://github.com/vuejs/vue)
- [axios](https://github.com/axios/axios)
- [antd](https://github.com/ant-design/ant-design)
- [understanding-exports](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [babel runtime vs babel-polyfill](https://juejin.im/post/5aefe0a6f265da0b9e64fa54)
- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- [package a module](http://dev.topheman.com/package-a-module-for-npm-in-commonjs-es2015-umd-with-babel-and-rollup/)
- [How to write and build JS libraries in 2018](https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953)
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports)
- [es-module-spec](https://www.ecma-international.org/ecma-262/6.0/#table-40)
- [esnext vs es6(es2015)](https://github.com/Microsoft/TypeScript/issues/24083)