const DEFAULT_PORT = 3000;

import express from 'express';
import request from 'request';
import iconv from 'iconv-lite';

const app = express();
import fileUtils from './utils/fileUtils';

/* eslint-disable no-undef */
const port = process.env.PORT || DEFAULT_PORT;

app.get('/', (req, res) => {
    fileUtils
        .getFileContents('fixture-sudoku-game.html')
        .then((data) => { res.send(data); })
        .catch(error => { throw new Error(error) });

    // request({ encoding: null, method: 'GET', uri: 'https://nine.websudoku.com/?select=1&level=1' }, (error, response, html) => {
    //     try {
    //         if (!error) {
    //             const encodedHTML = iconv.decode(new Buffer(html), 'utf-8');
                
    //             res.send(encodedHTML);	
    //         } else {
    //             throw new Error(error);
    //         }
    //     }
    //     catch(error) {
    //         throw new Error(error);
    //     }
    // });
})

app.listen(port, function() {
    console.log(`Listening to port ${port}`);
});

