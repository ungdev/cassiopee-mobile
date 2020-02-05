import React, {Component} from 'react'
import { Button, View, Text, TouchableOpacity, Icon } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ArtistsScreen from './Screen/ArtistsScreen'
import ArtistDetail from './Screen/ArtistDetail'
import DrawerNavigator from '../../navigation/DrawerNavigator'

const NavigatorArtist = createStackNavigator({
    ArtistsScreen,
    ArtistDetail
    }
);

export default createAppContainer(NavigatorArtist)
