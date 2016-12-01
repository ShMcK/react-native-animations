import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import styles from './styles'

class RotateDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Rotate',
    }
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 10000,
    }).start()
  }
  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    const animatedStyle = {
      transform: [{
        rotate: interpolateRotation
      }]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    )
  }
}

export default RotateDemo
