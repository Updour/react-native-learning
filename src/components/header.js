// import library for making component
import React from 'react'
import { View, Text } from 'react-native'
// make a component 

const Header = props => {
  const { textStyles, viewStyles } = styles

  return (
    <View style={viewStyles}>
      <Text style= {textStyles}>{props.headerText}</Text>
    </View>
    )
}

const styles = {
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    // top: 30,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative' 
  },
  textStyles: {
    fontSize: 20
  }
}
// make the component avaible to other part
export default Header