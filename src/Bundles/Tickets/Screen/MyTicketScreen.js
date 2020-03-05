import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Header from '../../../components/Header'
import TextVestiaire from '../TextVestiaire'
import Billet from '../Billet'

class MyTicketScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <ImageBackground
          source={require('../../../images/Logo_Cassiopée/background.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <Header bigtitle="Mon Billet" />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.viewvestiaire}>
              <TextVestiaire />
            </View>

            <View style={styles.viewbillet}>
              <Billet />
            </View>
          </ScrollView>
        </ImageBackground>
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
  },
})
