class Quote {
	constructor(id, quote, author, group = 'other') {
		this.id = id;
		this.quote = quote;
		this.author = author;
		this.group = group;
		this.counter = 0;
	}
}

module.exports = {
	Quote
};
