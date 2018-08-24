
[![Build Status](https://travis-ci.org/junhey/mocha-demo.svg?branch=master)](https://travis-ci.org/junhey/mocha-demo) 
[![Coverage Status](https://coveralls.io/repos/github/junhey/mocha-demo/badge.svg)](https://coveralls.io/github/junhey/mocha-demo)

mocha 是一个 unit testing framework

参考文档：  
[mocha](https://mochajs.org)  
[should](https://shouldjs.github.io)  
[Travis CI](https://docs.travis-ci.com)  

------

新建目录结构如下
```bash
.
├── README.md
├── index.js
├── lib
│   ├── average.js
│   ├── max.js
│   └── min.js
└── package.json

1 directory, 6 files
```
其中三个小功能在lib目录下：
```javascript
// 取得数组的平均值
module.exports = function average(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}
// max.js
// 取得数组中的最大值
module.exports = function max(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    max = array[i] > max ? array[i] : max
  }
  return max
}
// min.js
// 取得数组中的最小值
module.exports = function min(array) {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    min = array[i] < min ? array[i] : min
  }
  return min
}
```

安装相关

```bash
npm install mocha -g
npm install mocha --save-dev
npm install should --save-dev
```

**mocha** 语法
```javascript
describe('测试标题', function(){
    it('测试內容', function(done){
        // 進行測試
    })
    it('测试內容2', function(done){
        // 進行測試
    })
})
```

# 测试覆盖率

1. 使用 Istanbul 这个工具来检测代码的测试覆盖率

项目中安装 Istanbul：
npm install istanbul --save-dev

然后在 package.json 中的 scripts 里添加：

"cover": "istanbul cover node_modules/mocha/bin/_mocha"
这个命令用于生成测试覆盖率报告，它也可以在本地运行，也可以在 Travis 里运行：

npm run cover

它将会先执行测试，然后生成一个 coverage 目录，里面有测试覆盖率报告，其中的 html 文件可以直接打开查看。当然运行的结果也会在终端中显示出来：

```
> mocha-demo@1.0.0 cover /Users/uc/Documents/github/mocha-demo
> istanbul cover node_modules/mocha/bin/_mocha



  #average
    ✓ should return the average of array
    ✓ should return NaN when array is empty

  #max
    ✓ should return the maximum in array
    ✓ should return undefined when array is empty

  #min
    ✓ should return the minimum in array
    ✓ should return undefined when array is empty


  6 passing (9ms)

=============================================================================
Writing coverage object [/Users/uc/Documents/github/mocha-demo/coverage/coverage.json]
Writing coverage reports at [/Users/uc/Documents/github/mocha-demo/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 15/15 )
Branches     : 75% ( 3/4 )
Functions    : 100% ( 3/3 )
Lines        : 100% ( 15/15 )
================================================================================
➜  mocha-demo git:(master) ✗ npm install coveralls --save-dev
+ coveralls@3.0.2
added 51 packages from 71 contributors and audited 194 packages in 14.469s
found 0 vulnerabilities
```

2. 将测试覆盖率报告提交给 Coveralls

首先需要安装 coveralls：
```
npm install coveralls --save-dev
```
然后在 package.json 中的 scripts 里添加：
```
"coveralls": "npm run cover -- --report lcovonly && cat ./coverage/lcov.info | coveralls"
```
然后在 .travis.yml 中添加：
```
after_success:
- npm run coveralls
```
完整的.travis.yml如下：
```
language: node_js
node_js:
    - "8"
    - "7"
    - "6"
branches:
  only:
  - master
install:
  - npm install
script:
  - npm test
after_success:
  - npm run coveralls
```

那么下一次提交代码的时候就会将测试覆盖率报告提交给 Coveralls 啦。