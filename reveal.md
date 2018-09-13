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

# 怎么写一个能用的 npm 包

---

## 能用 ?

### 多环境

- browser
- node

### 漂亮的badge

### 发布到npm

### CLI

## 讲完了

```shell
npm init
npm build
npm publish
```

## package.json

- [npm](https://registry.npmjs.org/npm/latest)

- 字段分类

## 规范

[vue-dist](https://github.com/vuejs/vue/tree/dev/dist)

### CommonJS/CJS

```js
const depMod = require('someMod')
...
module.exports = exportMod
```

### ES Module

```js
import { namedExp }, defaultExp from 'someMod'
...
export const namedExport = {}
export default defaultExport = {}
```

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

### mjs

```html
<script nomodule src="fallback.js"></script>
<script type="module">
  import {addTextToBody} from './utils.mjs';
  addTextToBody('Modules are pretty cool.');
</script>
```

## 构建

- files, version, private
- esModule

## 运行方式

- 可依赖
- 可执行 (可选)

### commander

## Open Source CDN

- [jsDelivr](https://www.jsdelivr.com/)
- unpkg
- cdnjs

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/package@version/file"></script>
```

## 谢谢

## 参考

- [compat-table](https://kangax.github.io/compat-table/es6/)
- [module-in-browser](https://jakearchibald.com/2017/es-modules-in-browsers/)
- [Packages-wiki](http://wiki.commonjs.org/wiki/Packages/1.0)
- [vue](https://github.com/vuejs/vue)
- [axios](https://github.com/axios/axios)
- [antd](https://github.com/ant-design/ant-design)
- [jsDelivr-vue](http://wiki.commonjs.org/wiki/Packages)
- [understanding-exports](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [babel runtime vs babel-polyfill](https://juejin.im/post/5aefe0a6f265da0b9e64fa54)
- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- [package a module](http://dev.topheman.com/package-a-module-for-npm-in-commonjs-es2015-umd-with-babel-and-rollup/)
- [How to write and build JS libraries in 2018](https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953)
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports)
- [es-module-spec](https://www.ecma-international.org/ecma-262/6.0/#table-40)
- [esnext vs es6(es2015)](https://github.com/Microsoft/TypeScript/issues/24083)