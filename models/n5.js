const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const csvJson = []
fs.createReadStream(path.resolve(__dirname, 'sku.csv'))
  .pipe(csv({ trim: true }))
  .on('data', (row) => csvJson.push(row))
  .on('end', () => console.log(csvJson))
