import React, { Component } from 'react'
import { View, Animated, Text, TextInput, Dimensions } from 'react-native'
import styles from './styles'

class ParallelDemo extends Component {
  componentWillMount() {
    this.currentState = 'middle'
    this.avBarY = new Animated.Value(275)
    this.avBarOpacity = new Animated.Value(1)
    this.avCard = new Animated.Value(300)
    this.avButton = new Animated.Value(600)

    // Gesture
    this.gesturePosY = null
    this.gestureThreshold = 75

    this.avPosition = new Animated.Value(0)
    this.animationDuration = 600
  }
  // Gesture
  detectSwipe(y) {
    if (this.gesturePosY - y >= this.gestureThreshold) {
      this.onSwipeUp()
    } else if (y - this.gesturePosY >= this.gestureThreshold) {
      this.onSwipeDown()
    }
  }
  onSwipeUp() {
    Animated.parallel([
      Animated.timing(this.avBarY, {
        toValue: -0,
        duration: this.animationDuration,
      }),
      Animated.timing(this.avBarOpacity, {
        toValue: 0,
        duration: this.animationDuration,
      }),
      Animated.timing(this.avCard, {
        toValue: 0,
        duration: this.animationDuration,
      }),
      Animated.timing(this.avButton, {
        toValue: 10,
        duration: this.animationDuration + 100,
      }),
    ]).start()
  }
  onSwipeDown() {
    Animated.parallel([
      Animated.timing(this.avBarY, {
        toValue: 275,
        duration: this.animationDuration,
      }),
      Animated.timing(this.avBarOpacity, {
        toValue: 1,
        duration: this.animationDuration,
      }),
      Animated.timing(this.avCard, {
        toValue: 300,
        duration: this.animationDuration,
      }),
      Animated.timing(this.avButton, {
        toValue: 300,
        duration: this.animationDuration,
      }),
    ]).start()
  
  }
  render() {
    const cardAnimation = {
      transform: [{
        translateY: this.avCard,
      }]
    }
    const buttonAnimation = {
      transform: [{
        translateY: this.avButton,
      }]
    }
    const barAnimation = {
      transform: [{
        translateY: this.avBarY,
      }],
      opacity: this.avBarOpacity,
    }
    return (
      <View style={styles.container} >

        <Animated.View style={[styles.searchBar, barAnimation]}>
          <TextInput style={[styles.searchBarInput]} />
        </Animated.View>

        <Animated.View style={[styles.box, cardAnimation]}
          onStartShouldSetResponder={(e) => {
            this.gesturePosY = e.nativeEvent.locationY
          } }
          onMoveShouldSetResponder={(e) => this.detectSwipe(e.nativeEvent.locationY)}
          />

        <Animated.View style={[styles.button, buttonAnimation]}>
          <Text style={styles.buttonText}> Go </Text>
        </Animated.View>

      </View>
    )
  }
}

export default ParallelDemo
