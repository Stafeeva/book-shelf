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
    //TODO: generate an id
    this.booksCollection.insertOne(book, (err, result) => {
      callback();
    });
  }

  edit(bookId, data, callback) {
    //TODO: change title to id when we have bookId in DB
    this.booksCollection.updateOne({
      title: bookId,
    }, {'$set': data}, (err, book) => {
      callback();
    });
  }

  delete(bookId, callback) {
    //TODO: change title to id when we have bookId in DB
    //TODO: update responses + error messages
    this.booksCollection.deleteOne({
      title: bookId,
    }, (err, result) => {
      callback();
    });
  }
}

module.exports = BookService;
