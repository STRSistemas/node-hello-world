'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

var fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('static.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
