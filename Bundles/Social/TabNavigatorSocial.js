import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer} from 'react-navigation';
import Facebook from './Screen/Facebook.js'
import Instagram from './Screen/Instagram.js'
import Twitter from './Screen/Twitter.js'


const TabNavigatorSocial = createAppContainer(
	createMaterialTopTabNavigator({
		Facebook: {
			screen: Facebook
		},
    Twitter: {
      screen: Twitter
    },
		Instagram: {
			screen: Instagram
		},
	},
{tabBarOptions: {
  labelStyle: {
    fontSize: 15,
    textAlign: 'center',
  },
  tabStyle: {
    witdh: 100,
  }
}})
);

export default TabNavigatorSocial;
