/**
 * App Navigation
 * @flow
 */

import React, { Component, PropTypes } from 'react'
import { Navigator } from 'react-native'

import Landing from '../Landing'

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Demos', index: 0 }}
        renderScene={(route, navigator) => <Landing />}
      />
    )
  }
}

export default App
