import React, { Component } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'
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
    this.av2 = new Animated.Value(1)
  }
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
  }
  tapped() {
    Animated.parallel([
      Animated.sequence([
        Animated.spring(this.av2, {
          toValue: 1.2,
          friction: 10,
          tension: 1500,
        }),
        Animated.spring(this.av2, {
          toValue: 1,
          friction: 10,
          tension: 1500,
        }),
      ]),
      Animated.sequence([
        Animated.spring(this.av, {
          toValue: 0.8,
          friction: 10,
          tension: 1500,
        }),
        Animated.spring(this.av, {
          toValue: 1,
          friction: 10,
          tension: 1500,
        }),
      ])
    ]).start()
  }
  render() {
    const iconStyle1 = { transform: [{ scale: this.av }] }
    const iconStyle2 = { transform: [{ scale: this.av2 }] }

    return (
      <View style={styles.container}>

        <View style={styles.likeContainer}>
          <TouchableOpacity style={iconStyle1} onPress={() => {
            this.tapped()
            this.setState({ liked: !this.state.liked })
          } } >
            <Icon
              name={this.state.liked ? 'heart' : 'heart-o'}
              size={60}
              color='red'
              />
          </TouchableOpacity>
          <Text style={styles.label}>In</Text>
        </View>

        <View style={styles.likeContainer}>
          <TouchableOpacity style={iconStyle2} onPress={() => {
            this.tapped()
            this.setState({ liked: !this.state.liked })
          } } >
            <Icon
              name={this.state.liked ? 'heart' : 'heart-o'}
              size={60}
              color='red'
              />
          </TouchableOpacity>
          <Text style={styles.label}>Out</Text>
        </View>

      </View>
    )
  }
}

export default LikeDemo
