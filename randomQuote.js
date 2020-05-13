const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync } = require('./utils/writeFile');
const { errMes, info } = require('./utils/themes');

const randomQuoteHandler = async () => {
	try {
		const quotes = await readFileAsync('quotes.json');
		if (quotes.length > 0) {
			const quote = quotes[Math.floor(Math.random() * quotes.length)];
			quote.counter++;
			console.table(quote);
			await writeFileAsync('quotes.json', quotes);
		} else {
			throw new Error('No quotes to show'.info);
		}
	} catch (err) {
		console.log(err.message.errMes);
	}
};

module.exports = {
	command: 'random',
	aliases: [ 'ran' ],
	desc: 'Get random quote from file',
	handler: randomQuoteHandler
};
