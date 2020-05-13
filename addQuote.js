const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync } = require('./utils/writeFile');
const { uuidv4 } = require('./utils/idGen');
const { Quote } = require('./utils/quote');
const { info, errMes } = require('./utils/themes');

const addQuoteHandler = async (args) => {
	const { quote, author, group } = args;
	try {
		const quotes = await readFileAsync('quotes.json');
		const id = uuidv4();
		if (typeof quote === 'string' && quote !== '' && typeof author === 'string' && author !== '') {
			const newQuote = new Quote(id, quote, author, group);
			quotes.push(newQuote);
		} else {
			throw new Error('Insert quote and author');
		}
		const message = await writeFileAsync('quotes.json', quotes);
		console.log(message.info);
	} catch (err) {
		console.log(err.message.errMes);
	}
};

module.exports = {
	command: 'add <quote> <author> [group]',
	aliases: [ 'a' ],
	desc: 'Add quote',
	handler: addQuoteHandler
};
