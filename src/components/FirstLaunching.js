import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from '../navigation/DrawerNavigator'
import Store from '../store/configureStore'
import { persistStore } from 'redux-persist'
import i18n from '../translate/index'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import { api } from '../lib/api'
import { connect } from 'react-redux'

const slides = [
  {
    key: 'slide1',
    title: i18n.t('first_launching_slide_one_title'),
    text: i18n.t('first_launching_slide_one_2021'),
    image: 'md-heart',
  },
  {
    key: 'slide2',
    title: i18n.t('first_launching_slide_two_title'),
    text: i18n.t('first_launching_slide_two_2021'),
    image: 'ios-musical-notes',
  },
  {
    key: 'slide3',
    title: i18n.t('first_launching_slide_three_title'),
    text: i18n.t('first_launching_slide_three_2021'),
    image: 'ios-cog',
  },
  {
    key: 'slide4',
    title: i18n.t('first_launching_slide_four_title'),
    text: i18n.t('first_launching_slide_four'),
    image: 'ios-star',
  },
]

class FirstLaunching extends React.Component {
  constructor() {
    super()
    this.state = { showRealApp: false }
  }

  async registerForPushNotificationsAsync() {
    //Demande de permissions
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    //Si la permission n'est pas accordée on fait rien.
    if (status !== 'granted') {
      return
    }
    //Récupération Token
    let token = await Notifications.getExpoPushTokenAsync()
    //Stockage dans l'Appli
    console.log('token recupere', token.data)
    const action = { type: 'SET_TOKEN', value: token }
    this.props.dispatch(action)
    //On envoie ensuite au serveur
    try {
      const result = await api.post('expoTokens', { token: token.data })
      console.log('Token envoyé au serveur')
    } catch (e) {
      console.log('token pas envoyé au serveur')
      console.log('reponse', e.response)
      alert(i18n.t('error2') + e)
    }
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
          name="md-arrow-forward-sharp"
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
    this.setState({ showRealApp: true })
    this.registerForPushNotificationsAsync()
  }

  render() {
    let persistor = persistStore(Store)
    if (this.state.showRealApp) {
      return <AppContainer />
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
    backgroundColor: '#094E6F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 280,
    height: 280,
  },
  text: {
    color: 'white',
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

const mapStateToProps = (state) => {
  return {
    keyToken: state.setkeyToken.keyToken,
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default connect(mapStateToProps)(FirstLaunching)
