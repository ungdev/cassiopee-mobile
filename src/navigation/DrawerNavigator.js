import React from 'react'
import { View, SafeAreaView, ScrollView, Image } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import HomeScreen from '../Bundles/Home/Screen/HomeScreen'
import ProgramScreen from '../Bundles/Program/Screen/ProgramScreen'
import NavigatorArtist from '../Bundles/Artists/NavigatorArtist'
import PlanScreen from '../Bundles/Plans/Screen/PlanScreen'
import InformationsScreen from '../Bundles/Infos/Screen/InformationsScreen'
import SocialScreen from '../Bundles/Social/Screen/SocialScreen'
import PlaylistScreen from '../Bundles/Playlist/Screen/PlaylistScreen'
import MyTicketScreen from '../Bundles/Tickets/Screen/MyTicketScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={require('../images/panneau.png')}
        style={{ height: 120, width: 190 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const DrawerNavigator = createDrawerNavigator(
  {
    Accueil: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: <Icon name="ios-home" style={{ fontSize: 24 }} />,
      },
    },
    Programme: {
      screen: ProgramScreen,
      navigationOptions: {
        drawerIcon: <Icon name="ios-calendar" style={{ fontSize: 24 }} />,
      },
    },
    Artistes: {
      screen: NavigatorArtist,
      navigationOptions: {
        drawerIcon: <Icon name="ios-star" style={{ fontSize: 24 }} />,
      },
    },
    Plan: {
      screen: PlanScreen,
      navigationOptions: {
        drawerIcon: <Icon name="ios-map" style={{ fontSize: 24 }} />,
      },
    },
    Informations: {
      screen: InformationsScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="ios-information-circle" style={{ fontSize: 24 }} />
        ),
      },
    },
    'Réseaux Sociaux': {
      screen: SocialScreen,
      navigationOptions: {
        drawerIcon: <Icon name="ios-contacts" style={{ fontSize: 24 }} />,
      },
    },
    Playlist: {
      screen: PlaylistScreen,
      navigationOptions: {
        drawerIcon: <Icon name="ios-musical-notes" style={{ fontSize: 24 }} />,
      },
    },
    MyBillet: {
      screen: MyTicketScreen,
      navigationOptions: {
        drawerIcon: <Icon name="md-card" style={{ fontSize: 24 }} />,
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
  }
)

export default DrawerNavigator
