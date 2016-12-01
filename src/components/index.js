/**
 * App Navigation
 * @flow
 */

import React, { Component } from 'react'
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('Home')} />
      </NavigationProvider>
    )
  }
}

export default App
