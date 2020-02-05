import React, { Component } from "react";
import {View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Header from '../../../components/Header';
import DrawerTrigger from '../../../components/DrawerTrigger';
import { WebView } from 'react-native-webview';

class PlaylistScreen extends Component{
  render(){
    return(
      <React.Fragment>
        <Header bigtitle='Playlist' />
        <View style={styles.container}>
        <ActivityIndicator size="large"/>
        <WebView
         source = {{ uri:
         'https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A5Hi0XcOVx1nYwmrmJyoiSK'}}
         />
         </View>
        </React.Fragment>
    );
  }
}

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  }
})
