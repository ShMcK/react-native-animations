import React, { Component } from 'react'
import { View, Text, Animated, TouchableHighlight, Easing } from 'react-native'
import styles from './styles'

class DownloadDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Download',
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
    this.val = 0
    this.av1 = new Animated.Value(0)
    this.av2 = new Animated.Value(0)
  }
  runWithState() {
    this.av1.addListener(({value}) => this.setState({ value }))
    Animated.timing(this.av1, {
      toValue: 200,
      duration: 3000
    }).start()
  }
  runWithoutState() {
    this.av2.addListener(({value}) => this.val = value)
    Animated.timing(this.av2, {
      toValue: 200,
      duration: 3000
    }).start()
  }
  reset() {
    this.av1 = new Animated.Value(0)
    this.av2 = new Animated.Value(0)
    this.val = 0
    this.setState({ value: 0 })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.item}>
          <Text>Re-Render</Text>
          <View style={styles.barContainer}>
            <View style={[styles.bar, { width: this.state.value }]} />
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.runWithState.bind(this)}
            >
            <Text style={styles.buttonText}>Run</Text>
          </TouchableHighlight>
          <View>
            <Text>`setState` triggers a choppy re-render</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text>No ReRender</Text>
          <View style={styles.barContainer}>
            <View style={[styles.bar, { width: this.val }]} />
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.runWithoutState.bind(this)}
            >
            <Text style={styles.buttonText}>Run</Text>
          </TouchableHighlight>
          <View>
            <Text>Only visible while first demo is running</Text>
            <Text>Requires re-render</Text>
          </View>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={this.reset.bind(this)}
          >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default DownloadDemo
