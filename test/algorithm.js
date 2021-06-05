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

    describe('word', function() {

        it('is correct', function() {
            let input = ['ABC', '123', 'ABC']
            assert.deepEqual(algorithm.word(input), ['ABC'])
        })

        it('is correct', function() {
            let input = ['123', 'ABC', 'ABC']
            assert.deepEqual(algorithm.word(input), ['ABC'])
        })

        it('is correct', function() {
            let input = ['123', 'ABC', 'ABX']
            assert.deepEqual(algorithm.word(input), ['123', 'ABC', 'ABX'])
        })

        it('is correct', function() {
            let input = ['', '', '']
            assert.deepEqual(algorithm.word(input), [''])
        })

        it('is correct', function() {
            let input = ['ABC', '', '']
            assert.deepEqual(algorithm.word(input), [''])
        })

        it('is correct', function() {
            let input = ['ABC', 'ABC', '']
            assert.deepEqual(algorithm.word(input), ['ABC'])
        })

        it('is correct', function() {
            let input = ['ABC', '']
            assert.deepEqual(algorithm.word(input), ['ABC', ''])
        })

        it('is correct', function() {
            let input = []
            assert.throws(function() {
                algorithm.word(input)
            })
        })

    })

})
