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
      demos: [{
        title: 'Transition'
      }, {
        title: 'First',
      }, {
        title: 'First'
      }, {
        title: 'First'
      }]
    }
  }
  routeTo(title, component) {
    this.props.navigator.push({
      title
    })
  }
  demoList() {
    return this.state.demos.map(({component, title}, i) => {
      return (
        <View key={i} >
          <Demo
            title={title}
            routeTo={this.routeTo.bind(this, title, component)} />
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
