import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../../components/Header'
import DrawerTrigger from '../../../components/DrawerTrigger'
import TextVestiaire from '../TextVestiaire'
import Billet from '../Billet'

class MyTicketScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bigtitle="Mon Billet" />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.viewvestiaire}>
            <TextVestiaire />
          </View>

          <View style={styles.viewbillet}>
            <Billet />
          </View>
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default MyTicketScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  viewbillet: {
    flex: 5,
  },
  viewvestiaire: {
    flex: 2,
    borderBottomWidth: 2,
  },
})
