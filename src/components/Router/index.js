import React, { Component } from 'react'
import { Navigator } from 'react-native'
import NavigationBarRouteMapper from './routeMapper'
import styles from './styles'

// Routes
import Home from '../Home'
import Transition from '../Transition'

export default class Router extends Component {
  static propTypes = {
    
  }
  renderScene(route, navigator) {
    console.log(route)
    switch (route.title) {
      case 'Transition':
        return <Transition navigator={navigator} />
      default:
        return <Home navigator={navigator} />
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home', title: 'Home' }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationBarRouteMapper} />
        }
      />
    )
  }
}
