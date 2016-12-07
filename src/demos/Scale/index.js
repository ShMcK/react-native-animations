import React, { Component } from 'react'
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

class ScaleDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Scale',
    }
  }
  constructor(props) {
    super(props)
    this.handlePressIn = this.handlePressIn.bind(this)
    this.handlePressOut = this.handlePressOut.bind(this)
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(1)
  }
  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0,
      friction: 6,
      tension: 40,
    }).start()
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 2,
      friction: 6,
      tension: 40,
    }).start()
  }
  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.text}>Press Me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default ScaleDemo
