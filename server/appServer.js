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

    app.get('/api/books', (req, res) => {
      this.bookService.list(books => {
        res.json(books);
      });
    });

    app.post('/api/books', (req, res) => {
      console.log('========req.body========', req.body);

      res.sendStatus(201);
    });

    app.listen(port, () => console.log(`Express server listening on port: ${port}!`));
  }
}

module.exports = AppServer;
