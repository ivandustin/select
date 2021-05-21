#!/usr/bin/env node
const package     = require('./package.json')
const fs          = require('fs')
const path        = require('path')
const argparse    = require('argparse')
const expand      = require('./src/expand')
const readjson    = require('./src/readjson')
const writejson   = require('./src/writejson')
const algorithm   = require('./src/algorithm')
const parablepsis = require('./src/parablepsis')

function main() {
    let args      = parse()
    let dir       = args.o
    let filepaths = expand(args.file)
    let input     = filepaths.map(read)
    let output    = input.map(selection)
    save(output, mkdir(dir))
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('-o', { metavar: 'OUTPUT', required: true })
    parser.add_argument('file', { nargs: '+' })
    return parser.parse_args()
}

function read(filepath) {
    let data = readjson(filepath)
    return { filepath, data }
}

function selection(input) {
    let previous = null
    input.data.forEach(function(verse) {
        let manuscripts = parablepsis(verse.manuscripts, previous)
        let verses      = manuscripts.map(manuscript => manuscript.words)
        verse.selection = []
        try {
            verse.selection = algorithm.select(verses)
        } catch (e) {
            console.error(`Selection error address=${verse.address} error=${e.message}`)
        }
        previous = verse.manuscripts
    })
    return input
}

function save(inputs, dir) {
    inputs.forEach(function(input) {
        let basename = path.basename(input.filepath)
        let filepath = path.join(dir, basename)
        writejson(filepath, input.data)
    })
}

function mkdir(dir) {
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true })
    return dir
}

main()
