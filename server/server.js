const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact-form', (req, res) => {
    fs.appendFileSync('form.json', req.body.email)
    fs.appendFileSync('form.json', req.body.name)
    res.send('Thanks for sumbitting')
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
    res.send('Hello from the server side!')
});

app.listen(3000);

