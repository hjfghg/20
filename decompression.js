const fs = require('fs')
const zlib = require('zlib')

const decompress = () => {
    const unzip = zlib.createUnzip()
    const input = fs.createReadStream('./index.html.gz')
    const output = fs.createWriteStream('./index.html')
    input.pipe(unzip).pipe(output)
}

decompress()