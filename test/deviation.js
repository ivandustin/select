const assert        = require('assert')
const { deviation } = require('collatia')

describe('deviation', function() {

    it('is correct', function() {
        assert.equal(deviation('ABC', 'ABC'), 0)
    })

    it('is correct', function() {
        assert.equal(deviation('XYZ', 'ABC'), 1)
    })

    it('is correct', function() {
        assert.equal(deviation('ABC', 'ABX'), 0.3333333333333333)
    })

    it('is correct', function() {
        assert.equal(deviation('ABCD', 'ABXY'), 0.5)
    })

    it('is correct', function() {
        assert.equal(deviation('A', ''), 1)
        assert.equal(deviation('', 'B'), 1)
    })

    it('is correct', function() {
        assert.equal(deviation('', ''), 0)
    })

})
