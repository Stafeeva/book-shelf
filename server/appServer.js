const express = require('express');
const bodyParser = require('body-parser');

class AppServer {
  constructor(bookService) {
    this.bookService = bookService;
  }

  start() {
    const app = express();

    const port = 3000;

    app.use(express.static('public'));

    app.use(bodyParser.json());

    const { bookService } = this;

    app.get('/api/books', (req, res) => {
      bookService.list(books => {
        res.json(books);
      });
    });

    app.post('/api/books', (req, res) => {
      const book = req.body;

      bookService.add(book, () => {
        res.sendStatus(201);
      });
    });

    app.delete('/api/books/:id', (req, res) => {
      const bookId = req.params.id;

      bookService.delete(bookId, () => {
        res.sendStatus(204);
      });
    })

    app.listen(port, () => console.log(`Express server listening on port: ${port}!`));
  }
}

module.exports = AppServer;
