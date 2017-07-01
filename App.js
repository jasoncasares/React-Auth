import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDDdZQtyJ6STgx-hmAU3RpJBCf8oATlnBI',
    authDomain: 'react-authentication-900f1.firebaseapp.com',
    databaseURL: 'https://react-authentication-900f1.firebaseio.com',
    projectId: 'react-authentication-900f1',
    storageBucket: 'react-authentication-900f1.appspot.com',
    messagingSenderId: '805497213914'
    });
  }
  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
