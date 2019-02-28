'use strict';

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common'
import * as firebase from 'firebase'


class LoginForm extends Component {
  state = { email: '', password : '', error: '', loading: false }


  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error : '', loading : true })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess())
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginFailed())
    });
  }
  
  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  onLoginFailed = () => {
    this.setState({ error : 'Authentication Failed !', loading: false })
  }

  renderButton = () => {
    if (this.state.loading) {
      return (
        <Spinner size='small' />
      )
    }
    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    )
  }
  render() {
    const { errorTextStyle } = styles
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='Input@email.com'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorTextStyle}> 
          {this.state.error} 
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
      );
    }
  }
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

  export default LoginForm;