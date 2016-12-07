import React, { Component } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import styles from './styles'

const { height } = Dimensions.get('window')

const dropAnimation = {
  delay: 300,
  toValue: height,
  duration: 3000,
}

class StaggerDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Stagger',
    }
  }
  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.stagger(1500, [
      Animated.timing(this.animatedValue1, dropAnimation),
      Animated.timing(this.animatedValue2, dropAnimation),
      Animated.timing(this.animatedValue3, dropAnimation)
    ]).start()
  }
  render() {
    const animatedStyle1 = { height: this.animatedStyle1 }
    const animatedStyle2 = { height: this.animatedValue2 }
    const animatedStyle3 = { height: this.animatedValue3 }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { backgroundColor: 'red' }, animatedStyle1]} />
        <Animated.View style={[styles.box, { backgroundColor: 'green' }, animatedStyle2]} />
        <Animated.View style={[styles.box, { backgroundColor: 'blue' }, animatedStyle3]} />
      </View>
    )
  }
}

export default StaggerDemo

