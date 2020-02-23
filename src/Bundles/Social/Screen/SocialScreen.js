import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import TabNavigatorSocial from '../TabNavigatorSocial'

class SocialScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bigtitle="Réseaux Sociaux" />
        <TabNavigatorSocial />
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default SocialScreen
