import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import styles from './styles'

class ColorDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Colors',
    }
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 120,
      duration: 5000
    }).start()
  }
  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0, 0, 0)', 'rgb(51, 250, 170)', ]
    })
    const animatedStyle = {
      backgroundColor: interpolateColor
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    )
  }
}

export default ColorDemo
