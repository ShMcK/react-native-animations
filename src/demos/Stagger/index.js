import React, { Component } from 'react'
import { ListView, Text, View, Animated, Dimensions } from 'react-native'
import styles from './styles'

const { height } = Dimensions.get('window')

class StaggerDemo extends Component {
  static route = {
    navigationBar: {
      title: 'Stagger',
    }
  }
  componentWillMount() {
    this.animationList = []
    const dropAnimation = {
      delay: 100,
      toValue: height,
      duration: 2000,
    }
    this.rows = [
      { title: 'First', color: 'blue' },
      { title: 'Second', color: 'red' },
      { title: 'Third', color: 'green' },
      { title: 'Fourth', color: 'orange' },
      { title: 'Fifth', color: 'purple' },
      { title: 'Sixth', color: 'pink' },
      { title: 'Seventh', color: 'beige' },
      { title: 'Eighth', color: 'indigo' },
    ]

    this.rows.forEach((r, i) => {
      const name = 'av' + i
      this[name] = new Animated.Value(0)
      this['avStyle' + i] = { height: this[name] }
      this.animationList.push(
        Animated.timing(this[name], dropAnimation)
      )
    })
  }
  componentDidMount() {
    Animated.stagger(1500, this.animationList).start()
  }
  render() {
    return (
      <View>
        {this.rows.map((row, i) => (
          <Animated.View key={i} style={[
            styles.listItem,
            this['avStyle' + i],
            { backgroundColor: row.color }
          ]}>
            <Text style={styles.text}>{row.title}</Text>
          </Animated.View>
        ))}
      </View>
    )
  }
}

export default StaggerDemo
