import React from 'react'
import { SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import HomeScreen from '../Bundles/Home/Screen/HomeScreen'
import ProgramScreen from '../Bundles/Program/Screen/ProgramScreen'
import NavigatorArtist from '../Bundles/Artists/NavigatorArtist'
import InformationsScreen from '../Bundles/Infos/Screen/InformationsScreen'
import AssoScreen from '../Bundles/Asso/AssoScreen'
import SocialScreen from '../Bundles/Social/Screen/SocialScreen'
import PlaylistScreen from '../Bundles/Playlist/Screen/PlaylistScreen'
import MyTicketScreen from '../Bundles/Tickets/Screen/MyTicketScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/FontAwesome5'

const CustomDrawerComponent = props => (
  <ImageBackground
    source={require('../images/Logo_Cassiopée/tower3.png')}
    style={{ width: '100%', height: '100%' }}
  >
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={require('../images/Logo_Cassiopée/LogoClair.png')}
          style={{
            height: 100,
            width: 230,
            alignSelf: 'center',
            marginTop: 72,
            resizeMode: 'cover',
          }}
        />

        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  </ImageBackground>
)

const DrawerNavigator = createDrawerNavigator(
  {
    Accueil: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="ios-home" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Programme: {
      screen: ProgramScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="ios-calendar" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Artistes: {
      screen: NavigatorArtist,
      navigationOptions: {
        drawerIcon: (
          <Icon name="ios-star" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Informations: {
      screen: InformationsScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon
            name="ios-information-circle"
            style={{ fontSize: 24, color: 'white' }}
          />
        ),
      },
    },
    "Asso'": {
      screen: AssoScreen,
      navigationOptions: {
        drawerIcon: (
          <Icone
            name="hand-holding-heart"
            style={{ fontSize: 24, color: 'white' }}
          />
        ),
      },
    },
    'Réseaux Sociaux': {
      screen: SocialScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="ios-contacts" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Playlist: {
      screen: PlaylistScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon
            name="ios-musical-notes"
            style={{ fontSize: 24, color: 'white' }}
          />
        ),
      },
    },
    'Mon Billet': {
      screen: MyTicketScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="md-card" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#46403b',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        color: 'white',
        fontSize: 14,
      },
    },
  }
)

export default DrawerNavigator
