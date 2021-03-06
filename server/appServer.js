const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

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

    app.put('/api/books/:id', (req, res) => {
      const bookId = req.params.id;
      const bookData = req.body;

      bookService.edit(bookId, bookData, () => {
        res.sendStatus(200);
      });
    })

    app.delete('/api/books/:id', (req, res) => {
      const bookId = req.params.id;

      bookService.delete(bookId, () => {
        res.sendStatus(204);
      });
    })

    const config = require('../webpack.config.js');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));

    app.listen(port, () => console.log(`Express server listening on port: ${port}!`));
  }
}

module.exports = AppServer;
