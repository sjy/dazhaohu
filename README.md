# 打招呼 Greeting
<p align="start">
  <a href="https://npmcharts.com/compare/dazhaohu?minimal=true"><img src="https://img.shields.io/npm/dm/dazhaohu.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/dazhoad"><img src="https://img.shields.io/npm/v/dazhaohu.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/dazhaohu"><img src="https://img.shields.io/npm/l/dazhaohu.svg" alt="License"></a>
  <a href="https://travis-ci.com/sjy/dazhaohu.svg?branch=master"><img src="https://travis-ci.com/sjy/dazhaohu.svg?branch=master" alt="Build"></a>
  <a href='https://coveralls.io/github/sjy/dazhaohu?branch=master'><img src='https://coveralls.io/repos/github/sjy/dazhaohu/badge.svg?branch=master' alt='Coverage Status' /></a>
  <br>
</p>

## Install

```bash
npm install dazhaohu # or yarn add dazhouhu
```

## Build

```bash
npm run build # or yarn build
```

## CLI

```bash
npx dzh --help
dzh -n 5
```

## NOTICE

If you want to execute `fixture/tryesm.mjs`, make sure your systems' nodejs version has been updated to v10 or later and execute with [--experimental-modules](https://nodejs.org/api/esm.html) option.

``` bash
node --experimental-modules fixtrue/tryesm.mjs

```

## TODO

Remove ugly `postinstall` hack which caused by[babel-version-issue-with-jest](https://github.com/facebook/jest/issues/6913)
