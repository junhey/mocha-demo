# mocha-demo

mocha 是一个 unit testing framework

参考文档：[mocha](https://mochajs.org) [should](https://shouldjs.github.io) [Travis CI](https://docs.travis-ci.com)

------

新建目录结构如下

.
├── README.md
├── index.js
├── lib
│   ├── average.js
│   ├── max.js
│   └── min.js
└── package.json

1 directory, 6 files

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