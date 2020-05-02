import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './src/navigation/DrawerNavigator'
import { AsyncStorage, ImageBackground } from 'react-native'
import FirstLaunching from './src/components/FirstLaunching'
import { Provider } from 'react-redux' //distribution store in App
import Store from './src/store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstLaunch: null, isReady: false }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./src/images/background_cassiopee_modif.png'),
      require('./src/images/chevron_white_up.png'),
      require('./src/images/chevron_white_down.png'),
      require('./src/images/ic_favorite_border_white.png'),
      require('./src/images/ic_favorite_white.png'),
      require('./src/images/Logo_Cassiopée/background.png'),
      require('./src/images/Logo_Cassiopée/coverartiste.png'),
      require('./src/images/Logo_Cassiopée/tower3.png'),
      require('./src/images/Logo_Cassiopée/LogoClair.png'),
    ])
    await Promise.all([...imageAssets])
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
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    let persistor = persistStore(Store)
    if (this.state.firstLaunch === null) {
      return null // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
    } else if (this.state.firstLaunch == true) {
      return <FirstLaunching />
    } else {
      return (
        <Provider store={Store}>
          <PersistGate persistor={persistor}>
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
