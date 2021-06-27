import CoverageBabel from './index'

require('chai').should()

describe('CoverageBabel', function () {
  it('returns hello world message', function () {
    const cls = new CoverageBabel('Ben')
    cls.helloMessage().should.equal('hello Ben')
  })
})