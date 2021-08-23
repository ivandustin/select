const assert    = require('assert')
const algorithm = require('../src/algorithm')

describe('algorithm', function() {

    describe('verse', function() {

        it('is correct', function() {
            let input = [
                ['A', '', ''],
                ['B', '', ''],
                ['', 'A', 'B']
            ]

            let expected = [
                ['A', '', ''],
                ['B', '', '']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['A', '', ''],
                ['', 'A', 'B']
            ]

            let expected = [
                ['A', '', ''],
                ['', 'A', 'B']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['', 'A', 'B'],
                ['A', '', ''],
                ['B', '', '']
            ]

            let expected = [
                ['A', '', ''],
                ['B', '', '']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['A', '',  ''],
                ['A', '',  ''],
                ['A', 'B', 'C'],
                ['A', 'B', 'C']
            ]

            let expected = [
                ['A', '',  ''],
                ['A', 'B', 'C']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['A', '',  ''],
                ['A', '',  ''],
                ['A', 'B', 'C'],
                ['',  'B', 'C']
            ]

            let expected = [
                ['A', '',  ''],
                ['A', 'B', 'C'],
                ['',  'B', 'C']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['', '', 'X', 'Y'],
                ['', '', 'X', 'Y'],
                ['A', '', '', ''],
                ['', 'B', '', '']
            ]

            let expected = [
                ['', '', 'X', 'Y']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['', ''],
                ['', ''],
                ['A', '']
            ]

            let expected = [
                ['', '']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['', ''],
                ['A', '']
            ]

            let expected = [
                ['', ''],
                ['A', '']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['A', 'B'],
                ['A', 'B'],
                ['A', '']
            ]

            let expected = [
                ['A', 'B']
            ]

            assert.deepEqual(algorithm.verse(input), expected)
        })

    })

    describe('unique', function() {

        it('is correct', function() {
            let input = [
                ['A', '', 'B', '', 'C'],
                ['A', '', 'B', '', 'C'],
                ['A', '', 'B', '', 'C']
            ]

            let expected = [
                ['A', '', 'B', '', 'C']
            ]

            assert.deepEqual(algorithm.unique(input), expected)
        })

        it('is correct', function() {
            let input = [
                ['A', '', 'B', '', 'C'],
                ['A', '', 'B', '', 'C'],
                ['A', '', 'B', '', 'C'],
                ['',  '', '',  '', ''],
                ['',  '', '',  '', '']
            ]

            let expected = [
                ['A', '', 'B', '', 'C'],
                ['',  '', '',  '', '']
            ]

            assert.deepEqual(algorithm.unique(input), expected)
        })

    })

})
