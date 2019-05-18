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
      callback();
    });
  }

  delete(bookId, callback) {
    //TODO: update when we have bookId in DB
    this.booksCollection.deleteOne({
      title: bookId,
    }, (err, result) => {
      callback();
    });
  }
}

module.exports = BookService;
