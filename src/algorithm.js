const assert          = require('assert')
const { same }        = require('collatia')
const minimum_witness = 2
const empty           = ''

function select(verses) {
    return unique(verse(verses).map(function(verse) {
        return verse.map(function(value, index) {
            let words = verses.map(verse => verse[index]).filter(identity)
            return value ? word(words) : [value]
        })
    }))
}

function verse(verses) {
    assert(verses.length > 0, 'Empty verses')
    let normal = verses.map(normalize)
    return general(verses, normal, same)
}

function word(words) {
    assert(words.length > 0, 'Empty words')
    return general(words, words, exact)
}

function general(array, values, compare) {
    let scores = array.map(function(value, index_a) {
        let score = array.filter(function(value, index_b) {
            return compare(values[index_a], values[index_b])
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
    return array.map(value => value ? 1 : 0).join(empty)
}

function exact(a, b) {
    return a == b
}

module.exports = { select, verse, word }
