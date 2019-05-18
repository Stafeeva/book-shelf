const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/api/books', (req, res) => {
  res.json([
    {
      id: '123',
      title: 'Animal Farm',
    }
  ]);
});

app.post('/api/books', (req, res) => {
  console.log('========req.body========', req.body);

  res.sendStatus(201);
})

app.listen(port, () => console.log(`Bookshelf listening on port ${port}!`));
