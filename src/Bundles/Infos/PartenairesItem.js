import React, { Component } from 'react'
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  Linking,
} from 'react-native'
import env from '../../config'

class PartenairesItem extends React.Component {
  render() {
    const { partenaire } = this.props
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => Linking.openURL(partenaire.url)}
      >
        <ImageBackground
          style={styles.image}
          source={{ uri: `${env.API_URI}/api/v1${partenaire.image}` }}
        />
        <Text style={styles.title_text}>{partenaire.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item_container: {
    height: 200,
  },
  image: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  title_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
})

export default PartenairesItem
