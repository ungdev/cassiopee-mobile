import * as React from 'react'
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { connect } from 'react-redux'
import i18n from '../../translate/index'
const Device = require('react-native-device-detection')

class Billet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkCamera: null,
      checkGalery: null,
    }
  }

  onPressAppPhoto = async () => {
    let { status } = await Permissions.getAsync(Permissions.CAMERA)
    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)
      if (status !== 'granted') {
        alert(i18n.t('alert_text_allow_camera'))
      } else {
        this.setState({
          checkCamera: true,
        })
        this._takeImage()
      }
    } else {
      this._takeImage()
    }
  }

  onPressGalery = async () => {
    let { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        alert(i18n.t('alert_text_allow_galery'))
      } else {
        this.setState({
          checkGalery: true,
        })
        this._pickImage()
      }
    } else {
      this._pickImage()
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      const action = { type: 'SET_BILLET', value: result.uri }
      this.props.dispatch(action)
    }
  }

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      const action = { type: 'SET_BILLET', value: result.uri }
      this.props.dispatch(action)
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container_button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressGalery()}
          >
            <Text style={styles.text}>{i18n.t('ticket_import_galery')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressAppPhoto()}
          >
            <Text style={styles.text}>{i18n.t('ticket_import_camera')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_billet}>
          {this.props.billet && (
            <Image
              source={{ uri: this.props.billet }}
              style={{ width: '75%', height: '75%' }}
            />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container_button: {
    width: '100%',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
  },
  container_billet: {
    alignItems: 'center',
  },
  button: {
    marginBottom: Dimensions.get('screen').height < 600 ? 18 : 22,
    padding: 16,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#bd945a',
  },
  text: {
    fontSize: Dimensions.get('screen').height < 600 ? 12 : 14,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textAlign: 'center',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    button: {
      marginBottom: Dimensions.get('screen').height < 600 ? 18 : 22,
      padding: 26,
      width: '90%',
      borderRadius: 8,
      alignItems: 'center',
      backgroundColor: '#bd945a',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'whitesmoke',
      textAlign: 'center',
    },
  })
}

const mapStateToProps = (state) => {
  return {
    billet: state.setBillet.billet,
  }
}

export default connect(mapStateToProps)(Billet)
