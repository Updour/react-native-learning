'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }
  onPasswordChange = (text) => { 
    this.props.passwordChanged(text)
  }
  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password })
  }
  renderError = () => {
    const { errorViewStyle, errorTextStyle } = styles
    if (this.props.error) {
      return (
        <View style={errorViewStyle}>
          <Text style={errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <Card>
      <CardSection>
      <Input 
        label='Email'
        placeholder='user@user.com'
        onChangeText={this.onEmailChange}
        value={this.props.email}
      />
      </CardSection>

      <CardSection>
      <Input 
        secureTextEntry
        label='password'
        placeholder='123456'
        onChangeText={this.onPasswordChange}
        value={this.props.password}
      />
      </CardSection>

      {this.renderError()}

      <CardSection>
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
      </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.auth.email, //email sendfrom reducers : this value value 
    password: state.auth.password,
    error: state.auth.error
  }
}
const styles = {
  errorViewStyle: {
    backgroundColor: 'white'
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 17,
    alignSelf: 'center'
  }
}
export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser }) (LoginForm);