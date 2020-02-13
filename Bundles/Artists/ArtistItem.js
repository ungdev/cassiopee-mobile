import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import data from './DataArtists'

class ArtistItem extends React.Component {
  render() {
    const { displayDetailForArtist, artist } = this.props
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => displayDetailForArtist(artist)}
      >
        <ImageBackground style={styles.image} source={artist.poster} />
        <Text style={styles.title_text}>{artist.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item_container: {
    height: 190,
  },
  image: {
    width: '100%',
    height: 190,
    position: 'relative',
  },
  title_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
})

export default ArtistItem
