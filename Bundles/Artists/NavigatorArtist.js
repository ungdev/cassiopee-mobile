import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ArtistsScreen from './Screen/ArtistsScreen'
import ArtistDetail from './Screen/ArtistDetail'
import Header2 from '../../components/Header2'

const NavigatorArtist = createStackNavigator(
  {
    ArtistsScreen: {
      screen: ArtistsScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
        title: 'Artistes',
      }),
    },
    ArtistDetail: {
      screen: ArtistDetail,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
        title: '',
      }),
    },
  },
  { initialRouteName: 'ArtistsScreen' }
)

export default createAppContainer(NavigatorArtist)
