'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  
componentWillUpdate() {
  LayoutAnimation.spring()
}

renderDescription () {
  const { expanded } = this.props;
  const { body } = this.props.library.item;

  if (expanded) {
    return (
      <CardSection>
      <Text style={{ flex: 1 }}>{body}</Text>
      </CardSection>
    )
  }
}

  render() {
    const { titleStyle } = styles
    const { id, title } = this.props.library.item
    return (
      <TouchableOpacity
        onPress={() => this.props.selectLibrary(id)}
      >

      <CardSection>
        <Text style={titleStyle}>
          {title}
        </Text>
      </CardSection>
      {this.renderDescription()}
      </TouchableOpacity>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
    color: 'red'
  }
}
const mapStateToProps = (state, ownProps) => {
  
  const expanded = state.selectedLibraryId === ownProps.library.item.id
  // main logic to simple when render renderDescription
  return { expanded }
  // return { selectedLibraryId : state.selectedLibraryId }
}
export default connect(mapStateToProps, actions) (ListItem);