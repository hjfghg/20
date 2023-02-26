const fs = require('fs')

const readStream = fs.createReadStream('./index.html');

const writeStream = fs.createWriteStream('./indexNEW.html')

readStream.on('data', (chunk) => {
  console.log('************')
  console.log(chunk.toString())
})

readStream.on('data', (chunk) => {
  writeStream.write('\nЧасть №\n')
  writeStream.write(chunk)
})