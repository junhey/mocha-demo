// min.js
// 取得数组中的最小值
module.exports = function min(array) {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    min = array[i] < min ? array[i] : min
  }
  return min
}
