import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableOpacity
          onPress={() => { if (index > 0) { navigator.pop() } } }>
          <Text style={styles.leftButton}>
            Back
          </Text>
        </TouchableOpacity>
      )
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.openMenu) return (
      <TouchableOpacity
        onPress={() => route.openMenu()}>
        <Text style={styles.rightButton}>
          {route.rightText || 'Menu'}
        </Text>
      </TouchableOpacity>
    )
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style={styles.title}>
        {route.title}
      </Text>
    )
  }
}

export default NavigationBarRouteMapper

