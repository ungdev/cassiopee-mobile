import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, Text } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from '../navigation/DrawerNavigator'
import { Provider } from 'react-redux'
import Store from '../store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

const slides = [
  {
    key: 'somethun',
    title: 'Cassiopée te souhaite la bienvenue !',
    text:
      'Découvre dès maintenant toutes les informations du plus gros événement de Champagne-Ardenne entièrement organisé par des étudiants.',
    image: 'md-heart',
  },
  {
    key: 'somethun1',
    title: 'Pourquoi cette Application ?',
    text:
      'Parmis les fonctionnalités, tu peux accèder à la billeterie, consulter les événements de la soirée et les horaires des navettes, découvrir les artistes, ajouter ton billet  ou encore noter ton numéro de vestiaire pendant la soirée ;-).',
    image: 'ios-musical-notes',
  },
  {
    key: 'somethun2',
    title: 'Put Your Hands Up !',
    text:
      "Le dévelopeur travaille activement pour te proposer d'autres nouveautés alors vérifie tes mises à jours régulièrement, le reste arrive bientôt...",
    image: 'ios-cog',
  },
  {
    key: 'somethun3',
    title: 'Are you Reaady ?',
    text: "C'est parti !",
    image: 'ios-star',
  },
]

export default class FirstLaunching extends React.Component {
  constructor() {
    super()
    this.state = { showRealApp: false }
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
    fontSize: 18,
    lineHeight: 30,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 10,
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