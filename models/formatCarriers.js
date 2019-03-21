function getCarriers(text) {
	let carriers = [];
	let carrier = "";

	const CARRIERS = ['TMOBILE', 'AT&T', 'VERIZON'];

	for (let i=0; i < text.length; i++) {
		if (text[i] !== "\n") {
			carrier += text[i];
		} else {
			if (isNaN(carrier)) {
				for (let j=0; j < CARRIERS.length; j++) {
					if (carrier === CARRIERS[j]) {
						carriers.push(carrier);
					}
				}
			}
			carrier = "";
		}
	}

	return carriers;
}

module.exports.formatCarriers = (text) => {
	if(!typeof(text) === "string") {
		console.log('Error: text is not a string');
		return "not_string";
	}

	return getCarriers(text)
}