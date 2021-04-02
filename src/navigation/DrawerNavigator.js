import React from 'react'
import { ScrollView, Image, ImageBackground, Dimensions } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import HomeScreen from '../Bundles/Home/Screen/HomeScreen'
import ProgramScreen from '../Bundles/Program/Screen/ProgramScreen'
import NavigatorArtist from '../Bundles/Artists/NavigatorArtist'
import PlanScreen from '../Bundles/Plans/Screen/PlanScreen'
import InformationsScreen from '../Bundles/Infos/Screen/InformationsScreen'
import SocialScreen from '../Bundles/Social/Screen/SocialScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/FontAwesome5'
import i18n from '../translate/index'
import FoodTruckScreen from '../Bundles/FoodTruck/Screen/FoodTruckScreen'
const Device = require('react-native-device-detection')

const CustomDrawerComponent = (props) => (
  <ImageBackground
    source={require('../../assets/Logo_Cassiopée/tower3.png')}
    style={{ width: '100%', height: '100%' }}
  >
    <ScrollView>
      <Image
        source={require('../../assets/Logo_Cassiopée/LogoClair.png')}
        style={{
          height: Device.isTablet ? 90 : 70,
          width: Device.isTablet ? 270 : 200,
          alignSelf: 'center',
          marginTop: Dimensions.get('screen').height > 700 ? 88 : 30,
          marginBottom: 20,
          resizeMode: 'cover',
        }}
      />

      <DrawerItems {...props} />
    </ScrollView>
  </ImageBackground>
)

const DrawerNavigator = createDrawerNavigator(
  {
    Accueil: {
      screen: HomeScreen,
      navigationOptions: {
        title: i18n.t('menu_home'),
        drawerIcon: (
          <Icon
            name="ios-home"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    Programme: {
      screen: ProgramScreen,
      navigationOptions: {
        title: i18n.t('menu_program'),
        drawerIcon: (
          <Icon
            name="ios-calendar"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    Artistes: {
      screen: NavigatorArtist,
      navigationOptions: {
        title: i18n.t('menu_artist'),
        drawerIcon: (
          <Icon
            name="ios-star"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    Plan: {
      screen: PlanScreen,
      navigationOptions: {
        title: i18n.t('menu_map'),
        drawerIcon: (
          <Icon
            name="ios-map"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
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
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    /*"Asso'": {
      screen: AssoScreen,
      navigationOptions: {
        title: i18n.t('menu_asso'),
        drawerIcon: (
          <Icone
            name="hand-holding-heart"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },*/
    'Réseaux Sociaux': {
      screen: SocialScreen,
      navigationOptions: {
        title: i18n.t('menu_social'),
        drawerIcon: (
          <Icone
            name="share-alt"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    'Food Truck': {
      screen: FoodTruckScreen,
      navigationOptions: {
        title: i18n.t('menu_foodtruck'),
        drawerIcon: (
          <Icon
            name="ios-fast-food"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    /*Playlist: {
      screen: PlaylistScreen,
      navigationOptions: {
        title: i18n.t('menu_playlist'),
        drawerIcon: (
          <Icon
            name="ios-musical-notes"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },
    'Mon Billet': {
      screen: MyTicketScreen,
      navigationOptions: {
        title: i18n.t('menu_ticket'),
        drawerIcon: (
          <Icon
            name="md-card"
            style={{ fontSize: Device.isTablet ? 27 : 24, color: 'white' }}
          />
        ),
      },
    },*/
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#46403b',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        color: 'white',
        fontSize: Device.isTablet ? 18 : 14,
      },
    },
    drawerBackgroundColor: 'transparent',
  }
)

export default DrawerNavigator
