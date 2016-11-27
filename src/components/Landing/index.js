/**
 * Landing Page
 * @flow
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Demos</Text>
        </View>
        <View style={styles.items}>
          <View style={styles.item}></View>
        </View>
      </View>
    )
  }
}

export default Landing
