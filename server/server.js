const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/books', (req, res) => {
  res.json([
    {
      id: '123',
      title: 'Animal Farm',
    }
  ]);
});

app.listen(port, () => console.log(`Bookshelf listening on port ${port}!`));
