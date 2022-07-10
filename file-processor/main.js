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

const createCsvWriter = require('csv-writer').createObjectCsvWriter
const csvWriter = createCsvWriter({
	path: './results/file.csv',
	header: [
		{ id: 'name', title: 'NAME' },
		{ id: 'count', title: 'Number' },
	],
	fieldDelimiter: ';',
	encoding: 'latin1'
})

csvWriter
	.writeRecords(data) // returns a promise
	.then(() => {
		console.log('...Done')
	})

fs.writeFileSync('./results/gathered.json', JSON.stringify(data))
