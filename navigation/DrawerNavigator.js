import React from 'react'
import {View,Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import HomeScreen from '../Bundles/Home/Screen/HomeScreen'
import ProgramScreen from '../Bundles/Program/Screen/ProgramScreen'
import NavigatorArtist from '../Bundles/Artists/NavigatorArtist'
import PlanScreen from '../Bundles/Plans/Screen/PlanScreen'
import InformationsScreen from '../Bundles/Infos/Screen/InformationsScreen'
import SocialScreen from '../Bundles/Social/Screen/SocialScreen'
import PlaylistScreen from '../Bundles/Playlist/Screen/PlaylistScreen'
import MyTicketScreen from '../Bundles/Tickets/Screen/MyTicketScreen'

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../images/pictures.jpg')} style={{height: 120, width: 120 }}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)


const DrawerNavigator = createDrawerNavigator({
  Accueil: HomeScreen,
  Programme: ProgramScreen,
  Artistes: NavigatorArtist,
  Plan: PlanScreen,
  Informations: InformationsScreen,
  "Réseaux Sociaux": SocialScreen,
  Playlist: PlaylistScreen,
  MyBillet: MyTicketScreen
}, {
  contentComponent: CustomDrawerComponent
   });

export default DrawerNavigator;
