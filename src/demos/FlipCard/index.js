import React, { Component } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'
import styles from './styles'

class FlipCardDemo extends Component {
  static route = {
    navigationBar: {
      title: 'FlipCard',
    }
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    // value listener
    this.value = 0
    this.animatedValue.addListener(({ value }) => {
      this.value = value
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start()
    }
  }
  render() {
    const frontAnimatedStyle = {
      transform: [{
        rotateX: this.frontInterpolate,
      }]
    }
    const backAnimatedStyle = {
      transform: [{
        rotateX: this.backInterpolate,
      }]
    }
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>
              Front
          </Text>
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
            <Text style={styles.flipText}>
              Back
          </Text>
          </Animated.View>
        </View>
        <TouchableOpacity
          onPress={this.flipCard.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Flip!</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

export default FlipCardDemo
