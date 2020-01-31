import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import AccueilScreen from '../Bundles/Home/Screen/AccueilScreen'
import ProgrammeScreen from '../Bundles/Program/Screen/ProgrammeScreen'
import NavigatorArtiste from '../Bundles/Artists/NavigatorArtiste'
import PlanScreen from '../Bundles/Plans/Screen/PlanScreen'
import InformationsScreen from '../Bundles/Infos/Screen/InformationsScreen'
import SocialScreen from '../Bundles/Social/Screen/SocialScreen'
import PlaylistScreen from '../Bundles/Playlist/Screen/PlaylistScreen'
import MyBilletScreen from '../Bundles/Tickets/Screen/MyBilletScreen'

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
  Accueil: AccueilScreen, 
  Programme: ProgrammeScreen,
  Artistes: NavigatorArtiste,
  Plan: PlanScreen,
  Informations: InformationsScreen,
  Social: SocialScreen,
  Playlist: PlaylistScreen,
  MyBillet: MyBilletScreen
}, {
  contentComponent: CustomDrawerComponent
   });

export default DrawerNavigator;
