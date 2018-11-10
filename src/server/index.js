const puppeteer = require('puppeteer');

const DEFAULT_PORT = 8000;

const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/puzzle/', (req, res) => {
	(async() => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto('https://google.com');

		const $scrape = () => document.body.outerHTML;

		const result = await page.evaluate($scrape);

		browser.close();

		res.send(result);
	})();
});

app.listen(DEFAULT_PORT, () => {
	console.log(`Listening to port ${DEFAULT_PORT}`); // eslint-disable-line no-console
});
