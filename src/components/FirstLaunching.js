import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from '../navigation/DrawerNavigator'
import { Provider } from 'react-redux'
import Store from '../store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import i18n from '../translate/index'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const slides = [
  {
    key: 'slide1',
    title: i18n.t('first_launching_slide_one_title'),
    text: i18n.t('first_launching_slide_one'),
    image: 'md-heart',
  },
  {
    key: 'slide2',
    title: i18n.t('first_launching_slide_two_title'),
    text: i18n.t('first_launching_slide_two'),
    image: 'ios-musical-notes',
  },
  {
    key: 'slide3',
    title: i18n.t('first_launching_slide_three_title'),
    text: i18n.t('first_launching_slide_three'),
    image: 'ios-cog',
  },
  {
    key: 'slide4',
    title: i18n.t('first_launching_slide_four_title'),
    text: i18n.t('first_launching_slide_four'),
    image: 'ios-star',
  },
]

export default class FirstLaunching extends React.Component {
  constructor() {
    super()
    this.state = { showRealApp: false }
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync()
  }

  async registerForPushNotificationsAsync() {
    //Demande de permissions
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    //Si la permission n'est pas accordée on fait rien.
    if (status !== 'granted') {
      return
    }
    let token = await Notifications.getExpoPushTokenAsync()
    console.log(token)
  }

  _renderItem = ({ item }) => (
    <View style={styles.mainContent}>
      <Ionicons
        style={{ backgroundColor: 'transparent' }}
        name={item.image}
        size={200}
        color="white"
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    )
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    )
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true })
  }

  render() {
    let persistor = persistStore(Store)
    if (this.state.showRealApp) {
      return (
        <Provider store={Store}>
          <PersistGate persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      )
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          dotStyle={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
          onDone={this._onDone}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: '#171530',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 280,
    height: 280,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 8,
    fontSize: Dimensions.get('screen').height < 600 ? 14 : 18,
    lineHeight: Dimensions.get('screen').height < 600 ? 20 : 30,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: Dimensions.get('screen').height < 600 ? 0 : 10,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)
