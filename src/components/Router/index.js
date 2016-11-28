import React, { Component } from 'react'
import { Navigator } from 'react-native'
import NavigationBarRouteMapper from './routeMapper'
import styles from './styles'

// Routes
import Home from '../Home'
import TransitionDemo from '../Demos/Transition'
import ScaleDemo from '../Demos/Scale'
import DraggableDemo from '../Demos/Draggable'
import ColorDemo from '../Demos/Colors'
import RotateDemo from '../Demos/Rotate'
import SequenceDemo from '../Demos/Sequence'
import StaggerDemo from '../Demos/Stagger'
import ParallelDemo from '../Demos/Parallel'

export default class Router extends Component {
  renderScene(route, navigator) {
    switch (route.title) {
      case 'Transition':
        return <TransitionDemo navigator={navigator} />
      case 'Scale':
        return <ScaleDemo navigator={navigator} />
      case 'Draggable':
        return <DraggableDemo navigator={navigator} />
      case 'Colors':
        return <ColorDemo navigator={navigator} />
      case 'Rotate':
        return <RotateDemo navigator={navigator} />
      case 'Sequence':
        return <SequenceDemo navigator={navigator} />
      case 'Stagger':
        return <StaggerDemo navigator={navigator} />
      case 'Parallel':
        return <ParallelDemo navigator={navigator} />
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
