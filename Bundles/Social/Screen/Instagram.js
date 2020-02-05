import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';


class Instagram extends React.Component {
  render() {
      return (
        <WebView
          source={{uri: 'https://www.instagram.com/cassiopee_galautt/'}}
        />
      );
  }
}

export default Instagram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  });
