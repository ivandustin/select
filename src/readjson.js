const fs = require('fs')

function readjson(filepath) {
    return JSON.parse(fs.readFileSync(filepath).toString())
}

module.exports = readjson
