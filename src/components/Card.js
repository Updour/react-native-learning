import React, { Component } from 'react'
import { View } from 'react-native'

const Card = (props) => {
  const { containerStyles } = styles
  return (
    <View style={containerStyles}> 
      {props.children}
    </View>
  )
}
// styling
const styles = {
  containerStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10 
  }
}

export default Card