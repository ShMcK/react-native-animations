import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import styles from './styles'

class ParallelDemo extends Component {
  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(1)
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 300,
        duration: 2000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3
      })
    ]).start()
  }
  render() {
    const animateStyles = {
      transform: [{
        translateY: this.animatedValue1
      }, {
        scale: this.animatedValue2
      }]
    }
    return (
      <View style={styles.container} >
        <Animated.View style={[styles.box, animateStyles]} />
      </View>
    )
  }
}

export default ParallelDemo
