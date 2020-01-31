import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigatorArtiste from '../NavigatorArtiste.js';

class Artiste1Screen extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'red',
      height: 95,
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Artiste 1</Text>
      </View>
    );
  }
}

export default Artiste1Screen;
