import React, { Component } from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  const { constainerStyles } = styles
  return (
    <View style={constainerStyles}>
      {props.children}
    </View>
  )
}
const styles = { 
  constainerStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative' 
  }
}
export { CardSection }