import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import HomeScreen from '../Bundles/Home/Screen/HomeScreen'
import ProgramScreen from '../Bundles/Program/Screen/ProgramScreen'
import NavigatorArtist from '../Bundles/Artists/NavigatorArtist'
import PlanScreen from '../Bundles/Plans/Screen/PlanScreen'
import InformationsScreen from '../Bundles/Infos/Screen/InformationsScreen'
import AssoScreen from '../Bundles/Asso/AssoScreen'
import SocialScreen from '../Bundles/Social/Screen/SocialScreen'
import PlaylistScreen from '../Bundles/Playlist/Screen/PlaylistScreen'
import MyTicketScreen from '../Bundles/Tickets/Screen/MyTicketScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/FontAwesome5'
import i18n from '../translate/index'

const CustomDrawerComponent = (props) => (
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
            marginTop: Dimensions.get('screen').height < 600 ? 15 : 72,
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
        title: i18n.t('menu_home'),
        drawerIcon: (
          <Icon name="ios-home" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Programme: {
      screen: ProgramScreen,
      navigationOptions: {
        title: i18n.t('menu_program'),
        drawerIcon: (
          <Icon name="ios-calendar" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Artistes: {
      screen: NavigatorArtist,
      navigationOptions: {
        title: i18n.t('menu_artist'),
        drawerIcon: (
          <Icon name="ios-star" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Plan: {
      screen: PlanScreen,
      navigationOptions: {
        title: i18n.t('menu_map'),
        drawerIcon: (
          <Icon name="ios-map" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Informations: {
      screen: InformationsScreen,
      navigationOptions: {
        title: i18n.t('menu_infos'),
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
        title: i18n.t('menu_asso'),
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
        title: i18n.t('menu_social'),
        drawerIcon: (
          <Icon name="ios-contacts" style={{ fontSize: 24, color: 'white' }} />
        ),
      },
    },
    Playlist: {
      screen: PlaylistScreen,
      navigationOptions: {
        title: i18n.t('menu_playlist'),
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
        title: i18n.t('menu_ticket'),
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
