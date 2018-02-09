const express = require('express');
const app = express();

// static file serving
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(3006, () => {
  console.log('We are running on port 3006');
})
