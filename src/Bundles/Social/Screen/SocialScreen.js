import React, { Component } from 'react'
import Header from '../../../components/Header'
import TabNavigatorSocial from '../TabNavigatorSocial'
import { SafeAreaView } from 'react-native'
import i18n from '../../../translate/index'

class SocialScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#0A3D60',
            flex: 1,
          }}
        >
          <Header bigtitle={i18n.t('menu_social')} />
          <TabNavigatorSocial />
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default SocialScreen
