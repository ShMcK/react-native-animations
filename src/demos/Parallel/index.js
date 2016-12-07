import React, { Component } from 'react'
import { View, Text, Animated, TouchableHighlight } from 'react-native'
import styles from './styles'

class ParallelDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Parallel',
    }
  }
  componentWillMount() {
    this.avY = new Animated.Value(0)
    this.avScale = new Animated.Value(1)
    this.avColor = new Animated.Value(0)
  }
  componentDidMount() {
    this.position = 0
    this.animate()
  }
  animate() {
    if (this.position === 1) {
      this.animateUp()
    } else if (this.position === 0) {
      this.animateDown()
    }
  }
  animateDown() {
    this.position = 1
    Animated.parallel([
      Animated.timing(this.avY, {
        delay: 800,
        toValue: 300,
        duration: 2000,
      }),
      Animated.spring(this.avScale, {
        delay: 800,
        toValue: 3,
        duration: 2000,
      }),
      Animated.timing(this.avColor, {
        toValue: 120,
        duration: 2000
      })
    ]).start()
  }
  animateUp() {
    this.position = 0
    Animated.parallel([
      Animated.timing(this.avY, {
        delay: 800,
        toValue: 0,
        duration: 2000,
      }),
      Animated.spring(this.avScale, {
        delay: 800,
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(this.avColor, {
        toValue: 0,
        duration: 2000
      })
    ]).start()
  }
  render() {
    const interpolateColor = this.avColor.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0, 0, 0)', 'rgb(51, 250, 170)',]
    })
    const animateStyles = {
      backgroundColor: interpolateColor,
      transform: [{
        translateY: this.avY
      }, {
        scale: this.avScale
      }]
    }
    return (
      <View style={styles.container} >
        <TouchableHighlight style={styles.button} onPress={this.animate.bind(this)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>

        <Text style={styles.text}>Run multiple animations in parallel</Text>

        <Animated.View style={[styles.box, animateStyles]} />
      </View>
    )
  }
}

export default ParallelDemo
