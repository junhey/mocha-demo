const should = require('should')
const min = require('../lib/min')
describe('#min', () => {
  // 测试有沒有取得正确的最小值
  it('should return the minimum in array', done => {
    var minimum = min([1001, 20, 100, 1000,200]);
    minimum.should.equal(20);
    done();
  })
  // 测试有沒有回传 undefined
  it('should return undefined when array is empty', done => {
    var minimum = min([]);
    (minimum === undefined).should.be.true;
    done();
  })
})