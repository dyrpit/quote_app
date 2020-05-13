const colors = require('colors');

colors.setTheme({
	info: [ 'bgGreen', 'black' ],
	warn: [ 'bgYellow', 'black' ],
	errMes: [ 'bgRed', 'black' ]
});

module.exports = {
	info: colors.info,
	warn: colors.warn,
	errMes: colors.err
};
