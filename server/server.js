const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());

mongo.connect(url, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('connected!======');

  const db = client.db('books');
  const books = db.collection('books');

  app.get('/api/books', (req, res) => {

    console.log('fetching books from mongo:');
    books.find().toArray((err, items) => {
      console.log('books', items);
      res.json(items);
    });
  });

  app.post('/api/books', (req, res) => {
    console.log('========req.body========', req.body);

    res.sendStatus(201);
  })

  app.listen(port, () => console.log(`Bookshelf listening on port ${port}!`));

});
