import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import env from '../../../../config'
const Device = require('react-native-device-detection')

export class ArtistItem extends React.Component {
  render() {
    const { displayDetailForArtist, artist } = this.props
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={displayDetailForArtist}
      >
        <ImageBackground
          style={styles.image}
          source={{ uri: `${env.API_URI}/api/v1${artist.image}` }}
        />
        <Text style={styles.title_text}>{artist.name}</Text>
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

if (Device.isTablet) {
  Object.assign(styles, {
    item_container: {
      height: 300,
    },
    image: {
      width: '100%',
      height: 300,
      position: 'relative',
    },
  })
}
