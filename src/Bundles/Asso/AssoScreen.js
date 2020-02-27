import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Platform,
} from 'react-native'
import Header from '../../components/Header'
import { WebView } from 'react-native-webview'

class AssoScreen extends Component {
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
        <Header bigtitle="Asso'" />
        <ImageBackground
          source={require('../../images/background_cassiopee_modif.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'center' }}
        >
          <View style={styles.container}>
            <WebView
              onLoadStart={() => this.showSpinner()}
              onLoad={() => this.hideSpinner()}
              source={{
                uri: 'https://www.astree.asso.fr/fr/',
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

export default AssoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: 'transparent',
  },
})
