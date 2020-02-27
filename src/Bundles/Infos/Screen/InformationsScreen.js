import React, { Component } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import Header from '../../../components/Header.js'
import TabNavigatorInfo from '../TabNavigatorInfo.js'

class InformationsScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#171530',
          }}
        >
          <ImageBackground
            source={require('../../../images/Logo_Cassiopée/background.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'center' }}
          >
            <Header bigtitle="Informations" />
            <TabNavigatorInfo />
          </ImageBackground>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default InformationsScreen
