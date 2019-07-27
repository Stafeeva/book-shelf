import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';

import Header from './components/Header.jsx';
import BookList from './components/BookList.jsx';
import Bookshelf from './components/Bookshelf.jsx';

import './styles/styles.scss';

const store = createStore(
  rootReducer,
  middleware
);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Bookshelf />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
