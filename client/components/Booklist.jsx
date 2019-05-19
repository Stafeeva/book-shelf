import React, { Component } from 'react';
const axios = require('axios');

import AddBook from './AddBook.jsx';

class Booklist extends Component {

  componentWillMount() {
    axios.get('/api/books').then(response => {
      console.log('=======response=======', response);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Booklist</h1>
        <AddBook />
      </div>
    );
  }
}

export default Booklist;
