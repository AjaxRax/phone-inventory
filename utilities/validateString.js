module.exports.validate = (text) => {
	if (typeof(text) !== "string") {
		console.log('Error: text is not a string');
		return "not_string";
	}
}