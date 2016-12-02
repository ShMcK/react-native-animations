/**
 * Home Page
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

import Router from '../Router'
import Demo from '../Demo'

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
        'Parallel',
        'FlipCard',
        'CardMove',
        'Gesture',
        'MultiState Card',
      ]
    }
  }
  routeTo(title) {
    this.props.navigator.push(Router.getRoute(title))
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
