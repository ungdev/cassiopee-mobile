import React from 'react'
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Linking,
} from 'react-native'
import env from '../../config'
import Device from 'react-native-device-detection'

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
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item_container: {
    height: 200,
    width: '50%',
  },
  image: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    item_container: {
      height: 300,
      width: '50%',
    },
    image: {
      height: 300,
      width: '100%',
      position: 'relative',
    },
  })
}

export default PartenairesItem
