'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as firebase from 'firebase'
import { Header, Spinner, Button } from './common'
import LoginForm from './components/LoginForm'

class App extends Component {

  state = { loggedIn : null }

  initializeFirebase = () => {
    firebase.initializeApp({
     apiKey: "AIzaSyDpQxM_IKZ6II37-qTFW_YEvo8vcb7Qj1w",
     authDomain: "authentication-19e50.firebaseapp.com",
     databaseURL: "https://authentication-19e50.firebaseio.com",
     projectId: "authentication-19e50",
     storageBucket: "authentication-19e50.appspot.com",
     messagingSenderId: "525191735139"
   });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn : true })
      } else {
        this.setState({ loggedIn : false })
      }
    });
  }
  componentWillMount() {
   this.initializeFirebase()
  }
  renderContent = () => {
    switch ( this.state.loggedIn ) {
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}> 
          Log Out 
        </Button>
        )
      case false:
        return <LoginForm />
      default:  
        return <Spinner size='large' />
    } 
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication !!'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;