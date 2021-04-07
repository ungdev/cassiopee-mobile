import React, { Component } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import Header from '../../../components/Header.js'
import TabNavigatorInfo from '../TabNavigatorInfo.js'
import i18n from '../../../translate/index'

class InformationsScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#094E6F',
          }}
        >
          <ImageBackground
            source={require('../../../../assets/Logo_Cassiopée/background.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'center' }}
          >
            <Header bigtitle={i18n.t('menu_infos')} />
            <TabNavigatorInfo />
          </ImageBackground>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default InformationsScreen
