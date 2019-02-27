import React, { Component } from 'react'
import { View } from 'react-native'
import axios from 'axios' 
import AlbumDetail from './AlbumDetail'

class Albumlist extends Component {

  state = {
    albums : []
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums : response.data}))
  }
  renderAlbums() {
    return this.state.albums.map(i => 
      <AlbumDetail key={i.title} i={i} /> //i = key ={i} di kirim dari props
      );
  }
  render () {
    console.log(this.state)
    return (
     <View>
      {this.renderAlbums()}
     </View>
     )
  };
}

export default Albumlist;