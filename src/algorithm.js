const assert          = require('assert')
const collatia        = require('collatia')
const minimum_witness = 2
const max_deviation   = 0.2
const empty           = ''

function select(verses) {
    return unique(verse(verses))
}

function verse(verses) {
    assert(verses.length > 0, 'Empty verses')
    return general(verses, same)
}

function general(array, compare) {
    let scores = array.map(function(value, index_a) {
        let score = array.filter(function(value, index_b) {
            return compare(array[index_a], array[index_b])
        }).length
        return score
    }).map(value => Math.min(value, minimum_witness))
    return unique(filter(array, scores, max(scores)))
}

function identity(value) {
    return value
}

function max(array) {
    return Math.max(...array)
}

function filter(array, scores, n) {
    return array.filter(function(value, index) {
        let score = scores[index]
        return score == n
    })
}

function unique(array) {
    let strings = array.map(String)
    return array.filter(function(value, index) {
        let string = value.toString()
        return strings.indexOf(string) == index
    })
}

function normalize(array) {
    return array.map((value, index)=> value ? String.fromCharCode(index + 1) : 0).filter(identity).join(empty)
}

function exact(a, b) {
    return a == b
}

function same(a, b) {
    return deviation(a, b) <= max_deviation
}

function deviation(a, b) {
    assert.equal(a.length, b.length)
    return collatia.deviation(normalize(a), normalize(b))
}

module.exports = { select, verse, normalize, deviation, same }
