import React, { Component } from "react";
import {View, Text, StyleSheet } from "react-native";
import Header from '../../../components/Header.js';
import DrawerTrigger from '../../../components/DrawerTrigger.js';
import { WebView } from 'react-native-webview';

class ArtistesScreen extends Component{
  render(){
    return(
      <React.Fragment>
        <Header bigtitle='Playlist' />
        <View style={styles.container}>
        <WebView
         source = {{ uri:
         'https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A5Hi0XcOVx1nYwmrmJyoiSK'}}
         />
         </View>
        </React.Fragment>
    );
  }
}

export default ArtistesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  }
})
