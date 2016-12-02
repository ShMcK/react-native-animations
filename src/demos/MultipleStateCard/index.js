import React, { Component } from 'react'
import { View, Animated, Text, TextInput, Dimensions } from 'react-native'
import styles from './styles'

const height = Dimensions.get('window').height

class ParallelDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Card Move',
    }
  }
  componentWillMount() {
    this.currentState = 'card'
    this.avBarY = new Animated.Value(height)
    this.avCardY = new Animated.Value(300)
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
    if (this.currentState === 'card') {
      setTimeout(() => this.currentState = 'list', 300)
      Animated.parallel([
        Animated.timing(this.avBarY, {
          toValue: -0,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avBarY, {
          toValue: height,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avCardY, {
          toValue: 0,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avButton, {
          toValue: 10,
          duration: this.animationDuration + 100,
        }),
      ]).start()
    } else if (this.currentState === 'search') {
      setTimeout(() => this.currentState = 'card', 300)
      Animated.parallel([
        Animated.timing(this.avBarY, {
          toValue: 275,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avBarY, {
          toValue: height,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avCardY, {
          toValue: 300,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avButton, {
          toValue: 300,
          duration: this.animationDuration + 100,
        }),
      ]).start()
    }
  }
  onSwipeDown() {
    if (this.currentState === 'list') {
      setTimeout(() => this.currentState = 'card', 300)
      Animated.parallel([
        Animated.timing(this.avBarY, {
          toValue: 275,
          duration: this.animationDuration,
        }),
        // TODO
        Animated.timing(this.avBarY, {
          toValue: height,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avCardY, {
          toValue: 300,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avButton, {
          toValue: 300,
          duration: this.animationDuration,
        }),
      ]).start()
    } else if (this.currentState === 'card') {
      setTimeout(() => this.currentState = 'search', 300)
      Animated.parallel([
        Animated.timing(this.avBarY, {
          toValue: 600,
          duration: this.animationDuration,
        }),
        // TODO
        Animated.timing(this.avBarY, {
          toValue: height - 150,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avCardY, {
          toValue: 600,
          duration: this.animationDuration,
        }),
        Animated.timing(this.avButton, {
          toValue: 600,
          duration: this.animationDuration + 100,
        }),
      ]).start()
    }

  }
  render() {
    const cardAnimation = {
      transform: [{
        translateY: this.avCardY,
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
