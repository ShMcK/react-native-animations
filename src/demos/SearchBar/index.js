import React, { Component } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class SearchBar extends Component {
  static route = {
    navigationBar: {
      title: 'SearchBar',
    }
  }
  componentWillMount() {
    this.pavY = new Animated.Value(0)
    this.pavScale = new Animated.Value(0)
    this.savScale = new Animated.Value(1)
  }
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  animatePopUp() {
    Animated.parallel([
      Animated.spring(this.pavScale, {
        toValue: 1,
      }),
      Animated.spring(this.pavY, {
        toValue: 0,
      }),
      Animated.spring(this.savScale, {
        toValue: 0.3,
      })
    ]).start()
  }
  animatePopDown() {
    Animated.parallel([
      Animated.spring(this.pavScale, {
        toValue: 0,
        friction: 8,
      }),
      Animated.spring(this.pavY, {
        toValue: 100,
        friction: 18,
      }),
      Animated.spring(this.savScale, {
        toValue: 1,
        delay: 300,
      })
    ]).start()
  }
  render() {
    const popUpAnimation = {
      transform: [{ translateY: this.pavY }, { scale: this.pavScale }],
    }
    const searchBarAnimation = {
      transform: [{ scale: this.savScale }]
    }
    return (
      <View style={styles.container}>

        <View style={styles.searchBarPosition}>
          <TouchableOpacity style={[styles.searchBar, searchBarAnimation]}
            onPress={() => {
              this.setState({ open: true })
              this.animatePopUp()
            } }>
            <Icon name='search' size={25} color='grey' />
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.popUpPosition, popUpAnimation]}
          onPress={() => {
            this.setState({ open: false })
            this.animatePopDown()
          } }>
          <View style={styles.popUpContainer}>
            <Icon name='microphone' size={35} color='black' />
          </View>
          <View style={styles.popUpContainerBottom} />
        </TouchableOpacity>

      </View>
    )
  }
}

export default SearchBar
