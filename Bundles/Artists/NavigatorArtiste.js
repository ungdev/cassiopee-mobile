import React, {Component} from 'react';
import { Button, View, Text, TouchableOpacity, Icon } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ArtistesScreen from './Screen/ArtistesScreen';
import ArtisteDetail from './Screen/ArtisteDetail';
import DrawerNavigator from '../../navigation/DrawerNavigator'

const NavigatorArtiste = createStackNavigator({
    ArtistesScreen,
    ArtisteDetail
    }
);

export default createAppContainer(NavigatorArtiste)
