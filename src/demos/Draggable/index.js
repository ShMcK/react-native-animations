import React, { Component } from 'react'
import { View, Animated, PanResponder } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Draggable extends Component {
  static route = {
    navigationBar: {
      title: 'Draggable',
    }
  }
  componentWillMount() {
    this.createXYAnimation()
  }
  createXYAnimation() {
    this.animatedValue = new Animated.ValueXY()
    this._value = { x: 0, y: 0 }
    this.animatedValue.addListener(value => this._value = value)
    this.createPanResponder()
  }
  createPanResponder() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        })
        this.animatedValue.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.animatedValue.x,
          dy: this.animatedValue.y
        }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset()
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start()
      },
    })
  }
  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
          <Icon name='arrows' size={80} color='lightgrey' />
        </Animated.View>
      </View>
    )
  }
}

export default Draggable