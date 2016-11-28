/**
 * Home Page
 * @flow
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

import Demo from './Demo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: [
        'Transition',
        'Scale',
        'Draggable',
        'Colors',
        'Rotate',
        'Sequence',
        'Stagger',
      ]
    }
  }
  routeTo(title) {
    this.props.navigator.push({
      title
    })
  }
  demoList() {
    return this.state.demos.map((title, i) => {
      return (
        <View key={i} >
          <Demo
            title={title}
            routeTo={this.routeTo.bind(this, title)} />
        </View>
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.items}>
          {this.demoList()}
        </View>
      </View>
    )
  }
}

export default Home
