'use strict';

import React, { Component } from 'react';

import { View,  FlatList } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

  _renderItem = (library) => {
    console.log('a', this.props.libraries)
    return <ListItem library={library} />
  }

  render() {
    console.log('prop', this.props.library)
    return (
      <FlatList 
        data={this.props.libraries}
        renderItem={this._renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}
const mapStateToProps = state => {
  return { libraries : state.libraries }
}

export default connect(mapStateToProps) (LibraryList);