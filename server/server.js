const mongo = require('mongodb').MongoClient;
const BookService = require('./bookService');
const AppServer = require('./appServer');

const url = 'mongodb://localhost:27017';

mongo.connect(url, (err, client) => {
  if (err) {
    console.error('failed to connect to MongoDB:', err);

    return;
  }

  console.log('connected to MongoDB:', url);

  const db = client.db('books');
  const booksCollection = db.collection('books');

  const bookService = new BookService(booksCollection);

  const appServer = new AppServer(bookService);

  appServer.start();
});
