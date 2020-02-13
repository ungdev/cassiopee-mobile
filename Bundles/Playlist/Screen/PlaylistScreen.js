import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import Header from '../../../components/Header'
import { WebView } from 'react-native-webview'

class PlaylistScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
  }

  hideSpinner = () => {
    this.setState({ visible: false })
  }
  showSpinner = () => {
    this.setState({ visible: true })
  }

  render() {
    return (
      <React.Fragment>
        <Header bigtitle="Playlist" />
        <View style={styles.container}>
          <WebView
            onLoadStart={() => this.showSpinner()}
            onLoad={() => this.hideSpinner()}
            source={{
              uri:
                'https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A5Hi0XcOVx1nYwmrmJyoiSK',
            }}
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
      </React.Fragment>
    )
  }
}

export default PlaylistScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
})
