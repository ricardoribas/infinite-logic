const DEFAULT_PORT = 3000;

const express = require('express');
const request = require('request');
const iconv = require('iconv-lite');
const app = express();

/* eslint-disable no-undef */
const port = process.env.PORT || DEFAULT_PORT;

app.get('/', (req, res) => {
  request({ encoding: null, method: 'GET', uri: 'https://www.websudoku.com/?select=1&level=1' }, (error, response, html) => {
    try {
      if (!error) {
        const encodedHTML = iconv.decode(new Buffer(html), 'utf-8');

        res.send(encodedHTML);
      } else {
        throw new Error(error);
      }
    }
    catch (error) {
      throw new Error(error);
    }
  });
});

app.listen(port, function () {
  console.log(`Listening to port ${port}`);
});

