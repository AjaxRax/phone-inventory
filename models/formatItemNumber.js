const validateString = require('../utilities/validateString');

module.exports.formatItemNumber = (text) => {
	validateString.validate(text);

	let string = "";

	let itemNumbers = [];

	for(let i = 0; i < text.length; i++) {
		if (text[i] !== "\n") {
			string += text[i];
		} else {
			// Append item numbers to the list
			if (string.length == 7) {
				// If item is a number
				if (!isNaN(string)) {
					itemNumbers.push(string);
				}
			}
			string = ""
		}
	}

	return itemNumbers;

}