import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './src/navigation/DrawerNavigator'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)
