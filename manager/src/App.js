import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBXHxBknV38tM8MDH_oYDcYrpWwrHOsFsA',
    authDomain: 'manager-6b313.firebaseapp.com',
    databaseURL: 'https://manager-6b313.firebaseio.com',
    projectId: 'manager-6b313',
    storageBucket: '',
    messagingSenderId: '714476565168'
  };
  firebase.initializeApp(config);
  }
render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
     <RouterComponent />
    </Provider>
  );
}
}

export default App;
