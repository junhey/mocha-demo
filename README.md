# mocha-demo

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
// 取得陣列的平均值
module.exports = function average(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}
// max.js
// 取得陣列中的最大值
module.exports = function max(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    max = array[i] > max ? array[i] : max
  }
  return max
}
// min.js
// 取得陣列中的最小值
module.exports = function min(array) {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    min = array[i] < min ? array[i] : min
  }
  return min
}
```
