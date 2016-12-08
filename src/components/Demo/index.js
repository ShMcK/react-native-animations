import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Demo extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    routeTo: PropTypes.func.isRequired,
    icon: PropTypes.string,
  }
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.routeTo}>
        <View style={styles.inner}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.icon ? <Icon style={styles.icon} name={this.props.icon} size={35} /> : null}
        </View>
      </TouchableHighlight>
    )
  }
}

export default Demo
