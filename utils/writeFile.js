const fs = require('fs');
const util = require('util');

const writeFileAsync = async (fileName, data) => {
	const writeFile = util.promisify(fs.writeFile);
	try {
		const dataJson = JSON.stringify(data);
		await writeFile(fileName, dataJson);
		return 'File saved';
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = {
	writeFileAsync
};
