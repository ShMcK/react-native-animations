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
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.avBarY, {
        toValue: -0,
        duration: 2000,
        delay: 1000,
      }),
      Animated.timing(this.avBarOpacity, {
        toValue: 0,
        duration: 1500,
        delay: 1000,
      }),
      Animated.timing(this.avCard, {
        toValue: 0,
        duration: 2000,
        delay: 1000,
      }),
      Animated.timing(this.avButton, {
        toValue: 10,
        duration: 2000,
        delay: 1000,
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
        translateY: this.avBarY
      }],
      opacity: this.avBarOpacity,
    }
    return (
      <View style={styles.container} >

        <Animated.View style={[styles.searchBar, barAnimation]}>
          <TextInput style={[styles.searchBarInput]}/>
        </Animated.View>

        <Animated.View style={[styles.box, cardAnimation]} />

        <Animated.View style={[styles.button, buttonAnimation]}>
          <Text style={styles.buttonText}> Go </Text>
        </Animated.View>

      </View>
    )
  }
}

export default ParallelDemo
