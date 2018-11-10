const DEFAULT_PORT = 8000;

const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(DEFAULT_PORT, () => {
	console.log(`Listening to port ${DEFAULT_PORT}`); // eslint-disable-line no-console
});
