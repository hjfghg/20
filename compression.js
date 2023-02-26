const fs = require('fs')
const zlib = require('zlib')

const compress = () => {
    const gzip = zlib.createGzip()
    const input = fs.createReadStream('./indexNEW.html')
    const output = fs.createWriteStream('./index.html.gz')
    input.pipe(gzip).pipe(output)
}

compress()