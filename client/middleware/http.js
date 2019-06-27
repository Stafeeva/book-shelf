const axios = require('axios');

import { setBooks } from '../actions';

export const httpMiddleware = store => next => action => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      axios.get('/api/books').then(response => {
        const books = response.data;

        store.dispatch(setBooks(books));
      }).catch(err => console.log(err));

      break;

    default:
      return next(action);
  }
};
