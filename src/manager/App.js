import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDpQxM_IKZ6II37-qTFW_YEvo8vcb7Qj1w",
      authDomain: "authentication-19e50.firebaseapp.com",
      databaseURL: "https://authentication-19e50.firebaseio.com",
      projectId: "authentication-19e50",
      storageBucket: "authentication-19e50.appspot.com",
      messagingSenderId: "525191735139"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
      )
  }
}

export default App;
