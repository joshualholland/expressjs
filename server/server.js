const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();
let router = express.Router();

router.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});


app.use('/', router);

app.route('/contact-form')

    .post((req, res) => {
    let userName = req.body.name
    let userEmail = req.body.email

    let userObject = {
        name: userName,
        email: userEmail
    }

    fs.writeFile(path.join(__dirname, './form.json'), JSON.stringify(userObject, null, 2), (err) => {
        if (err) console.log(err)
    });

    res.send('Thanks for submitting!')
});

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res, next) => {
//     res.send('Hello from the server side!')
// });

app.listen(3000);


