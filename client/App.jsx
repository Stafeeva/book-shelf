import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';

import Header from './components/Header.jsx';
import Booklist from './components/Booklist.jsx';

const store = createStore(
  rootReducer,
  middleware
);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Booklist />
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
