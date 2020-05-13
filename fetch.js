const axios = require('axios');
const { errMes } = require('./utils/themes');

const getQuote = async () => {
	const url = 'http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php';
	const quote = await axios.get(url);
	return quote.data;
};

const fetchHandler = async () => {
	try {
		const quote = await getQuote();
		console.table(quote);
	} catch (err) {
		console.log(err.message.errMes);
	}
};

module.exports = {
	command: 'get',
	aliases: [ 'g', 'f', 'fetch' ],
	handler: fetchHandler
};
