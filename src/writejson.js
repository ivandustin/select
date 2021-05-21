const fs = require('fs')

function writejson(filepath, object) {
    let data = JSON.stringify(object, null, 4)
    fs.writeFileSync(filepath, data)
}

module.exports = writejson
