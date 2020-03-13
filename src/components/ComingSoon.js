import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class ComingSoon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../images/Logo_Cassiopée/LogoClair.png')}
        ></Image>
        <Text style={styles.title}>Bientôt disponible...</Text>
      </View>
    )
  }
}

export default ComingSoon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  image: {
    marginTop: 38,
    width: 320,
    height: 180,
    resizeMode: 'contain',
  },
})