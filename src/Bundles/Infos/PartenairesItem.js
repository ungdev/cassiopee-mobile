import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import env from '../../config'
import Device from 'react-native-device-detection'
import BeautyWebView from 'react-native-beauty-webview'

class PartenairesItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }
  render() {
    const { partenaire } = this.props
    const { modalVisible } = this.state
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => this.setModalVisible(!modalVisible)}
      >
        <BeautyWebView
          visible={modalVisible} // Reguired for open and close
          onPressClose={() => this.setModalVisible(!modalVisible)} // Reguired for closing the modal
          url={partenaire.url}
          headerBackground={'#094E6F'}
          backgroundColor={'#094E6F'}
          headerContent={'light'}
          progressColor={'#22749C'}
          progressBarType={'background'}
        />
        <Image
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
    padding: 5,
  },
  image: {
    height: Dimensions.get('screen').height < 600 ? 150 : 200,
    position: 'relative',
    resizeMode: 'contain',
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
      position: 'relative',
      resizeMode: 'contain',
    },
  })
}

export default PartenairesItem
