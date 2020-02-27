import React, { Component } from 'react'
import Header from '../../../components/Header'
import TabNavigatorSocial from '../TabNavigatorSocial'
import { SafeAreaView } from 'react-native'

class SocialScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#171530',
            flex: 1,
          }}
        >
          <Header bigtitle="Réseaux Sociaux" />
          <TabNavigatorSocial />
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default SocialScreen
