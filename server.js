'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(process.env.PORT);
app.use(express.static('public'));
app.use(bodyParser.json({limit: '500mb'}));
const url = require('url');
app.set('trust proxy', true);
require('dotenv').config();
const fs = require('fs');

app.post('/activate', (req, res) => {
	let userData = {
		topic: req.body.topic,
		recipient: req.body.recipient
	};

	fs.writeFile('./user.json', JSON.stringify(userData, null, 4), (err) => {
		if (err) console.error('Error: ', err);
		console.log('User data saved & Iron.io worker activated!');
	});

});
