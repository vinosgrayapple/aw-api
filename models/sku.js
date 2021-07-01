const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const { Transform } = require('stream')

async function list (item, value) {
  return new Promise((resolve, reject) => {
    const csvJson = []
    fs.createReadStream(path.resolve('C:\\Users\\komar\\Dropbox\\sku.csv'))
      .pipe(csv({ trim: true }))
      .pipe(clean())
      .on('data', (row) => csvJson.push(row))
      .on('end', () => {
        const filterJSON = csvJson.filter((sku) =>
          sku[item].toLowerCase().includes(value.trim().toLowerCase())
        )
        resolve(filterJSON)
      })
  })
}

module.exports = {
  list
}
function clean () {
  return new Transform({
    objectMode: true,
    transform (row, encoding, callback) {
      const volume = parseFloat(row['емкость, л.'])
      callback(null, {
        ...row,
        'емкость, л.': volume
      })
    }
  })
}
