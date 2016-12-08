import React, { Component } from 'react'
import { View, Animated, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class LikeDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Like',
    }
  }
  componentWillMount() {
    this.av = new Animated.Value(1)
  }
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
  }
  tapped() {
    Animated.sequence([
      Animated.spring(this.av, {
        toValue: 1.3,
        friction: 10,
        tension: 1500,
      }),
      Animated.spring(this.av, {
        toValue: 1,
        friction: 5,
        tension: 350,
      }),
    ]).start()
  }
  render() {
    const iconStyle = {
      transform: [{ scale: this.av }]
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={iconStyle} onPress={() => {
          this.tapped()
          this.setState({ liked: !this.state.liked })
        } } >
          <Icon
            name={this.state.liked ? 'heart' : 'heart-o'}
            size={60}
            color='red'
            />
        </TouchableOpacity>
      </View>
    )
  }
}

export default LikeDemo
