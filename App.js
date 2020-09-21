import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './src/navigation/DrawerNavigator'
import { AsyncStorage, ImageBackground } from 'react-native'
import FirstLaunching from './src/components/FirstLaunching'
import { Provider } from 'react-redux' //distribution store in App
import Store from './src/store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstLaunch: null }
  }

  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true') // No need to wait for `setItem` to finish, although you might want to handle errors
        this.setState({ firstLaunch: true })
      } else {
        this.setState({ firstLaunch: false })
      }
    }) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
  }

  render() {
    let persistor = persistStore(Store)
    if (this.state.firstLaunch === null) {
      return (
        <ImageBackground
          source={require('./assets/splash.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'center' }}
        ></ImageBackground>
      ) // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
    } else if (this.state.firstLaunch == true) {
      return (
        <Provider store={Store}>
          <PersistGate
            loading={
              <ImageBackground
                source={require('./assets/splash.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'center' }}
              ></ImageBackground>
            }
            persistor={persistor}
          >
            <FirstLaunching />
          </PersistGate>
        </Provider>
      )
    } else {
      return (
        <Provider store={Store}>
          <PersistGate
            loading={
              <ImageBackground
                source={require('./assets/splash.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'center' }}
              ></ImageBackground>
            }
            persistor={persistor}
          >
            <AppContainer />
          </PersistGate>
        </Provider>
      )
    }
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)
