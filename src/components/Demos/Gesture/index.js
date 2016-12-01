import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import styles from './styles'

class GestureDemo extends Component {
  componentWillMount() {
    this.gesturePosY = null
    this.gestureThreshold = 75

    this.avPosition = new Animated.Value(0)
  }
  detectSwipe(y) {
    if (this.gesturePosY - y >= this.gestureThreshold) {
      this.onSwipeUp()
    } else if (y - this.gesturePosY >= this.gestureThreshold) {
      this.onSwipeDown()
    }
  }
  onSwipeUp() {
    console.log('swipe up')
     Animated.spring(this.avPosition, {
      toValue: -300,
      friction: 100,
      tension: 350
    }).start()
  }
  onSwipeDown() {
    console.log('swipe down')
    Animated.spring(this.avPosition, {
      toValue: 300,
      friction: 100,
      tension: 350
    }).start()
  }
  render() {
    const animateYValue = {
       transform: [{
        translateY: this.avPosition,
      }]
    }
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animateYValue]}
          onStartShouldSetResponder={(e) => {
            this.gesturePosY = e.nativeEvent.locationY
          }}
          onMoveShouldSetResponder={(e) => this.detectSwipe(e.nativeEvent.locationY)}
        />
      </View>
    )
  }
}

export default GestureDemo
