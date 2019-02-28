/** @format */
// import library | modules 

import React from 'react'
import { AppRegistry, Text, View } from 'react-native' 
// import Header from './src/components/header' <Header headerText={'Header!'}/>
// import Albumlist from './src/components/AlbumList' <Albumlist />
import App from './src/firebase/app'
// render component
// const App = () => (
//   <View style={{ flex: 1 }}>
//     <App />
//   </View>
//   )
  // render into devices
AppRegistry.registerComponent('AwesomeProject', () => App)