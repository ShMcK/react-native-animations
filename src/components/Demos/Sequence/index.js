import React, { Component, PropTypes } from 'react'
import { View, Animated } from 'react-native'
import styles from './styles'

class AnimationSequence extends Component {
  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(1)
  }
  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animatedValue1, {
        toValue: 150,
        duration: 1000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3,
      }),
      Animated.timing(this.animatedValue1, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: .5,
      })
    ]).start()
  }
  render() {
    const animatedStyle = {
      transform: [{
        translateY: this.animatedValue1
      }, {
        scale: this.animatedValue2
      }]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    )
  }
}

export default AnimationSequence
