const express = require('express');
const tesseract = require('node-tesseract-ocr');
const getItemNumber = require('./models/formatItemNumber');
const getCarriers = require('./models/formatCarriers');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	tesseract
		.recognize('./documents/1.jpg', {
			lang: 'eng',
			
		})
		.then(text => {
			console.log(text);
			res.render('index', {
				itemNumbers: getItemNumber.formatItemNumber(text),
				carriers: getCarriers.formatCarriers(text)
			})
		})
		.catch(err => {
			console.log(`An error has occured! Error: ${err}`);
		})
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}!`); });
