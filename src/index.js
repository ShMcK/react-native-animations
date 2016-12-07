/**
 * App Navigation
 * @flow
 */

import React from 'react'
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation'
import routes from './routes'

const App = () => (
  <NavigationProvider router={routes}>
    <StackNavigation initialRoute={routes.getRoute('Home')} />
  </NavigationProvider>
)

export default App
