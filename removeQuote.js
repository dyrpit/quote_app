const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync } = require('./utils/writeFile');
const { info, errMes } = require('./utils/themes');

const removeQuoteHandler = async ({ id }) => {
	try {
		let quotes = await readFileAsync('quotes.json');
		quotes = quotes.filter((q) => q.id !== id);
		const message = await writeFileAsync('quotes.json', quotes);
		if (message) console.log('Qoute removed from file'.info);
	} catch (err) {
		console.log(err.message.errMes);
	}
};

module.exports = {
	command: 'remove <id>',
	desc: 'Removes quotes from file',
	aliases: [ 'r', 'd', 'delete' ],
	handler: removeQuoteHandler
};
