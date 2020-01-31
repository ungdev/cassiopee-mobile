import React, { Component } from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DrawerTrigger from '../../../components/DrawerTrigger.js';
import Icon from 'react-native-vector-icons/Feather';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Header from '../../../components/Header.js'

class ArtistesScreen extends React.Component {

  static navigationOptions = {
    title: 'Artistes',
    headerStyle: {
      backgroundColor: 'red',
      height: 95,
    },
    headerLeft: <DrawerTrigger/>,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Liste Artistes</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Artiste1')}
        >
        <Text>Artistes 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Artiste2')}
        >
        <Text>Artiste2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ArtistesScreen;
