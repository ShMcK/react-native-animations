import React, { Component, PropTypes } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import styles from './styles'

class Demo extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    routeTo: PropTypes.func.isRequired,
  }
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.routeTo}>
        <Text>{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}

export default Demo
