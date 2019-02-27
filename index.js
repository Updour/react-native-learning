/** @format */
// import library | modules 

import React from 'react'
import { AppRegistry, Text, View } from 'react-native' 
import Header from './src/components/header'
import Albumlist from './src/components/AlbumList'
// render component
const App = () => (
  <View>
    <Header headerText={'Header!'}/>
    <Albumlist />
  </View>
)
  // render into devices
  AppRegistry.registerComponent('AwesomeProject', () => App)