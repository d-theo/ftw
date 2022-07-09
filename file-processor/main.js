const guru = require('./guru')
const bokun = require('./bokun')
const freetour = require('./freetour')
const fs = require('fs')

const hours = process.argv[2]
const lang = process.argv[3]

console.log(hours, lang)

const data = guru(hours, lang)
	.concat(bokun(hours, lang))
	.concat(freetour(hours, lang))
console.log(data)

fs.writeFileSync('./results/gathered.json', JSON.stringify(data))
