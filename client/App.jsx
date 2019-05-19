import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';

class App extends Component {
  render() {
    return [
      <Header />,
      <h1>Bookshelf</h1>
    ];
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
