const express = require('express');
const app = express();

// static file serving
app.use(express.static('public'));

// wild card asterisk allows dynamic requests
// get | post | put | delete
app.get('/blog/*.html', (req, res) => {
  res.send('Hello World!');
});

app.route('/form')
  .get((res, req) => {
    res.send('You would see a FORM');
  })
  .post((res, req) => {
    res.send('This is the results');
  })



app.listen(3006, () => {
  console.log('We are running on port 3006');
})
