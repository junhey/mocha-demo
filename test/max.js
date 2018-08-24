const should = require('should')
const max = require('../lib/max')

describe('#max',()=>{
  //测试是否取得正确的最大值
  it('should return the maximum in array',done =>{
    var maximum = max([1,10,200,208]);
    maximum.should.equal(208);
    done();
  })
  
  //测试为空是否返回undefined
  it('should return undefined when array is empty',done =>{
    const maximum = max([]);
    (maximum===undefined).should.be.true;
    done();
  })

})