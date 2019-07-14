const axios = require('axios');

import { setBooks } from '../actions';

export const httpMiddleware = store => next => action => {
  switch (action.type) {
    case 'ADD_BOOK':
      axios.post('api/books', action.book).then(response => {
        console.log('done!');
      });

      break;

    case 'DELETE_BOOK':
      axios.delete(`api/books/${action.id}`).then(response => {
        console.log('deleted!');
      });

      break;

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
