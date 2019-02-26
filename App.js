import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './containers/Calculator';
import calculator from './reducer/calculator';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunkMiddleware from 'redux-thunk';

const store = createStore(calculator, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Calculator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
