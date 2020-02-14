import React, { Component } from 'react'
import { Platform, StyleSheet, View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'

class Facebook extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
  }

  hideSpinner = () => {
    this.setState({ visible: false })
  }

  render() {
    let JS =
      '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v5.0"></script>'

    let source =
      JS +
      '<a class="fb-page" data-href="https://www.facebook.com/gala.utt/" data-tabs="timeline, events" data-width="500" data-height="3000" data-small-header="false" data-hide-cover="false"</a>'

    return (
      <View style={styles.container}>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={styles.webfacebook}
          source={{ html: source }}
          javaScriptEnabled={true}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{
              flex: 1,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
          />
        )}
      </View>
    )
  }
}

export default Facebook

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  webfacebook: {
    width: 730,
  },
})
