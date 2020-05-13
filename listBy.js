const { readFileAsync } = require('./utils/readFile');
const { errMes } = require('./utils/themes');

const listByHandler = async ({ group }) => {
	try {
		const quotes = await readFileAsync('quotes.json');
		const g = group.toLowerCase();
		const quotesByCategory = quotes.filter((q) => q.group.toLowerCase() === g);
		if (quotesByCategory.length > 0) {
			console.table(quotesByCategory);
		} else {
			const groups = [ ...new Set(quotes.map((q) => q.group)) ];
			throw new Error(`No quotes in this category. Available categories: ${groups}`);
		}
	} catch (err) {
		console.log(err.message.errMes);
	}
};

module.exports = {
	command: 'lb <group>',
	desc: 'List quotes by group',
	handler: listByHandler
};
