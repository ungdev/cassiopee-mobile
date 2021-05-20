import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Platform,
} from 'react-native'
import Header from '../../../components/Header'
import { WebView } from 'react-native-webview'
import i18n from '../../../translate/index'

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
        <Header bigtitle={i18n.t('menu_playlist')} />
        <ImageBackground
          source={require('../../../../assets/background_cassiopee_modif.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'center' }}
        >
          <View style={styles.container}>
            <WebView
              automaticallyAdjustContentInsets={false}
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
                  color: Platform.OS === 'ios' ? 'white' : 'black',
                }}
                size="large"
              />
            )}
          </View>
        </ImageBackground>
      </React.Fragment>
    )
  }
}

export default PlaylistScreen

const styles = StyleSheet.create({
  container: {
    height: '90%',
    padding: 4,
    backgroundColor: 'transparent',
  },
})
