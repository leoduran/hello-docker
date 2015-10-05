var expect = require('chai').expect

var calc = require('./calculator.js')

describe('Calculator Tests', function() {
  it('should add two numbers', function() {
    var result = calc.add(1, 2)
    expect(result).to.be.eql(4)
  })
})
