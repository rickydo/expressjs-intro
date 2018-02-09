const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3006, () => {
  console.log('We are running on port 3006');
})
