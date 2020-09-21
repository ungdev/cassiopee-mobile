import React from 'react'
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Linking,
  Dimensions,
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
    height: Dimensions.get('screen').height < 600 ? 150 : 200,
    position: 'relative',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    item_container: {
      height: 280,
      width: '50%',
      alignite: 'center',
    },
    image: {
      height: 280,
      width: '98%',
      position: 'relative',
    },
  })
}

export default PartenairesItem
