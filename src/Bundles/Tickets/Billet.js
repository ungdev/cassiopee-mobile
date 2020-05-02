import * as React from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { connect } from 'react-redux'
import i18n from '../../translate/index'

class Billet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkCamera: null,
      checkGalery: null,
    }
  }

  componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    const { status1 } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status1 === 'granted') {
      this.setState({
        checkGalery: true,
      })
    }
    const { status2 } = await Permissions.askAsync(Permissions.CAMERA)
    if (status2 === 'granted') {
      this.setState({
        checkCamera: true,
      })
    }
  }

  onPressAppPhoto = async () => {
    let { status } = await Permissions.getAsync(Permissions.CAMERA)
    if (status !== 'granted') {
      alert(i18n.t('alert_text_allow_camera'))
      const { status2 } = await Permissions.askAsync(Permissions.CAMERA)
      if (status2 === 'granted') {
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
      alert(i18n.t('alert_text_allow_galery'))
      const { status1 } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status1 === 'granted') {
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
    marginBottom: 22,
    padding: 16,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#bd945a',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => {
  return {
    billet: state.setBillet.billet,
  }
}

export default connect(mapStateToProps)(Billet)
