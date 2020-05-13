const addQuote = require('./addQuote');
const removeQuote = require('./removeQuote');
const listQuotes = require('./listQuotes');
const randomQuote = require('./randomQuote');
const listBy = require('./listBy');
const fetch = require('./fetch');

require('yargs')
	.command(addQuote)
	.command(removeQuote)
	.command(listQuotes)
	.command(randomQuote)
	.command(listBy)
	.command(fetch)
	.help().argv;
