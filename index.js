const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// static file serving
app.use(express.static('public'));

// using middleware
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //extended allows us to send arrays and other data types

// wild card asterisk allows dynamic requests
// get | post | put | delete
app.get('/blog/*.html', (req, res) => {
  res.send('Hello World!');
});

app.route('/form')
  .get((req, res) => {
    // res.send('You would see a FORM');
    // __dirname returns the current directory
    res.sendFile(__dirname + '/private/form.html');
  })
  .post((req, res) => {
    res.send(req.body.name + ', This is the results');
  })



app.listen(3006, () => {
  console.log('We are running on port 3006');
})
