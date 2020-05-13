const { readFileAsync } = require('./utils/readFile');
const { warn, errMes } = require('./utils/themes');

const listHandler = async () => {
	try {
		const quotes = await readFileAsync('quotes.json');

		if (quotes.length > 0) {
			console.table(quotes);
		} else {
			console.log('Add quote first'.warn);
		}
	} catch (err) {
		console.log(err.message.errMes);
	}
};

module.exports = {
	command: 'list',
	desc: 'List all quotes saved in file',
	aliases: [ 'l', 'all' ],
	handler: listHandler
};
