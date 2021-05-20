import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../../../components/Header.js'
import TabNavigatorInfo from '../TabNavigatorInfo.js'
import i18n from '../../../translate/index'
import { LinearGradient } from 'expo-linear-gradient'

class InformationsScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#094E6F',
          }}
        >
          <LinearGradient
            style={{ height: '100%' }}
            start={[0, 1]}
            end={[1, 0]}
            colors={['#22749C', '#43B9D5']}
          >
            <Header bigtitle={i18n.t('menu_infos')} />
            <TabNavigatorInfo />
          </LinearGradient>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default InformationsScreen
