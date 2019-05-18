class BookService {
  constructor(booksCollection) {
    this.booksCollection = booksCollection;
  }

  list(callback) {
    this.booksCollection.find().toArray((err, items) => {
      callback(items);
    });
  }
}

module.exports = BookService;
