import React, {Component} from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ArtistesScreen from './Screen/ArtistesScreen.js';
import Artiste1Screen from './Screen/Artiste1Screen.js';
import Artiste2Screen from './Screen/Artiste2Screen.js';
import DrawerNavigator from '../../navigation/DrawerNavigator.js'

const NavigatorArtiste = createStackNavigator(
  {
    ArtistesScreen: ArtistesScreen,
    Artiste1: Artiste1Screen,
    Artiste2: Artiste2Screen,
  },
  {
    initialRouteName: 'ArtistesScreen',
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name='menu'
            size={26}
          />
        )
      };
    }
  }
);

export default NavigatorArtiste;
