const DEFAULT_PORT = 8000;
const PORT = process.env.PORT || DEFAULT_PORT;

const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/ping', (req, res) => {
	res.send('pong');
});

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);	// eslint-disable-line no-console
});
