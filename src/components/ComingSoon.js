import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class ComingSoon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../images/panneau.png')}
        ></Image>
        <Text style={styles.title}>Bientôt disponible...</Text>
      </View>
    )
  }
}

export default ComingSoon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  image: {
    marginTop: 25,
    width: 220,
    height: 140,
  },
})
