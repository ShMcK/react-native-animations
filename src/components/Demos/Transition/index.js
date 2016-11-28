import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import styles from './styles'

class TransitionDemo extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(100)
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 2500,
      easing: Easing.bounce,
    }).start()
  }
  render() {
    const animatedStyle = {
      height: this.animatedValue,
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    )
  }
}

export default TransitionDemo
