
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';


class Facebook extends React.Component {
  render() {

      let JS = '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v5.0"></script>';

      let source = JS + '<a class="fb-page" data-href="https://www.facebook.com/gala.utt/" data-tabs="timeline, events" data-width="500" data-height="3000" data-small-header="false" data-hide-cover="false" adapt_container_width="true"></a>';

      return (
        <View style={styles.container}>
        <WebView style={styles.webfacebook}
          source={{html: source}}
          javaScriptEnabled={true}
        />
        </View>
      );
  }
}

export default Facebook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,

  },
  webfacebook: {
    width: 750,
  }

  });
