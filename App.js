import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './src/navigation/DrawerNavigator'
import { AsyncStorage } from 'react-native'
import FirstLaunching from './src/components/FirstLaunching'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { firstLaunch: null }
  }
  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true') // No need to wait for `setItem` to finish, although you might want to handle errors
        this.setState({ firstLaunch: true })
      } else {
        this.setState({ firstLaunch: false })
      }
    }) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
  }

  render() {
    if (this.state.firstLaunch === null) {
      return null // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
    } else if (this.state.firstLaunch == true) {
      return <FirstLaunching />
    } else {
      return <AppContainer />
    }
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)
