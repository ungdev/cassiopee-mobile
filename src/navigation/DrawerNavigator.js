import React from 'react'
import { ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native'
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
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-navigation'
const Device = require('react-native-device-detection')

const CustomDrawerComponent = (props) => (
  <LinearGradient
    style={{ height: '100%' }}
    start={[0, 1]}
    end={[1, 0]}
    colors={['#22749C', '#43B9D5']}
  >
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={require('../../assets/logo_2021_dayedition.png')}
          style={{
            height: Device.isTablet ? 90 : 70,
            width: Device.isTablet ? 270 : 200,
            alignSelf: 'center',
            marginTop: Dimensions.get('screen').height > 700 ? 55 : 30,
            marginBottom: 30,
            resizeMode: 'cover',
          }}
        />

        <DrawerItems {...props} />
      </ScrollView>
      <Image
        style={styles.bottomImage}
        source={require('../../assets/bottom_chateau_menu.png')}
      />
    </SafeAreaView>
  </LinearGradient>
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
            style={{
              fontSize: Device.isTablet ? 27 : 24,
              color: 'white',
            }}
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
    Food_Truck: {
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
      activeTintColor: '#ffffff',
      activeBackgroundColor: '#094E6F',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: Device.isTablet ? 26 : 22,
        fontFamily: 'brigade-condensed-regular',
        fontWeight: 'normal',
      },
    },
    drawerBackgroundColor: 'transparent',
  }
)

export default DrawerNavigator

const styles = StyleSheet.create({
  containerBottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '18%',
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
  },
  bottomImage: {
    height: Device.isTablet ? 90 : 200,
    width: Device.isTablet ? 270 : 300,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  },
})
