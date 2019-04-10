"use strict";
let user = require('./user.json');
require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// NewsAPI config to help me get recent article of chosen topic
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY)

// Use Google News API to get link of most recent article of chosen topic.
newsapi.v2.everything({
	q: user.topic,
	sortBy: 'publishedAt',
}).then((response) => {

	const url = response.articles[0].url;

	client.messages
		.create({
			body: `${user.topic}: ${url}`,
			from: process.env.TWILIO_NUM,
			to: user.recipient
		})
		.then(message => console.log(message.sid));
});
