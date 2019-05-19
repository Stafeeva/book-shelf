const uuidv4 = require('uuid/v4');

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
    const generatedId = uuidv4();
    const newBook = book;

    newBook.id = generatedId;

    this.booksCollection.insertOne(newBook, (err, result) => {
      callback();
    });
  }

  edit(bookId, data, callback) {
    this.booksCollection.updateOne({
      id: bookId,
    }, {'$set': data}, (err, book) => {
      callback();
    });
  }

  delete(bookId, callback) {
    //TODO: update responses + error messages
    this.booksCollection.deleteOne({
      id: bookId,
    }, (err, result) => {
      callback();
    });
  }
}

module.exports = BookService;
