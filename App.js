import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './src/navigation/DrawerNavigator'

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)
