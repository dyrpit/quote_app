const fs = require('fs');
const util = require('util');

const readFileAsync = async (fileName = 'quotes.json') => {
	const readFile = util.promisify(fs.readFile);
	try {
		const response = await readFile(fileName, 'utf8');
		const quotes = JSON.parse(response);
		return quotes;
	} catch (err) {
		return [];
	}
};

module.exports = {
	readFileAsync
};
