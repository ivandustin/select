const { same } = require('collatia')

function parablepsis(manuscripts, previous) {
    manuscripts = manuscripts.map(clone)
    if (!previous)
        return manuscripts
    return manuscripts.map(function(manuscript) {
        let { name, words } = manuscript
        if (is_empty(words)) {
            let before = find(name, previous)
            if (before) {
                let last_word = get_last_word(before.words)
                if (last_word) {
                    let variants = manuscripts.filter(function(manuscript) {
                        return !is_empty(manuscript.words) && same(get_last_word(manuscript.words), last_word)
                    })
                    if (variants.length > 0) {
                        manuscript = variants.map(function(variant) {
                            let { words } = variant
                            variant       = clone(manuscript)
                            variant.words = copy(words)
                            return variant
                        })
                    }
                }
            }
        }
        return manuscript
    }).flat()
}

function identity(value) {
    return value
}

function is_empty(array) {
    return array.findIndex(identity) == -1
}

function copy(array) {
    return array.slice()
}

function clone(manuscript) {
    manuscript       = Object.assign({}, manuscript)
    manuscript.words = manuscript.words.map(copy)
    return manuscript
}

function find(name, manuscripts) {
    return manuscripts.find(manuscript => manuscript.name == name)
}

function get_last_word(words) {
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i]
        if (word)
            return word
    }
    return null
}

module.exports = parablepsis
