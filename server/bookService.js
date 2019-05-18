class BookService {
  constructor(booksCollection) {
    this.booksCollection = booksCollection;
  }

  list(callback) {
    this.booksCollection.find().toArray((err, items) => {
      callback(items);
    });
  }

  add(book, callback) {
    this.booksCollection.insertOne(book, (err, result) => {
      console.log('====result====', result);

      callback();
    })
  }
}

module.exports = BookService;
