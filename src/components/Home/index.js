/**
 * Home Page
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import demos from '../../demos/demos.json'

import routes from '../../routes'
import Demo from '../Demo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { demos }
  }
  routeTo(title) {
    this.props.navigator.push(routes.getRoute(title))
  }
  demoList() {
    return this.state.demos.map(({title}, i) => {
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
