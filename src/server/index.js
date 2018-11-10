const DEFAULT_PORT = 8000;

const express = require('express');

const os = require('os');

const app = express();

// const mongoose = require('mongoose');

const puppeteer = require('puppeteer');

// mongoose.connect('mongodb://localhost/sudoku-game');

// const db = mongoose.connection;

// db.on('error', () => {});
// db.once('open', () => {});

// const puzzleSchema = new mongoose.Schema({
// 	name: String
// });
// const Puzzle = mongoose.model('Puzzle', puzzleSchema);

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
	// const puzzle = new Puzzle({ name: os.userInfo().username });

	// puzzle.save();

	res.send({ username: os.userInfo().username });
});

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
