import * as React from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

class Billet extends React.Component {
  state = {
    image: null,
  }

  render() {
    let { image } = this.state

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button} onPress={this._pickImage}>
            <Text style={styles.text}>
              Importer votre billet depuis votre Galerie
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this._takeImage}>
            <Text style={styles.text}>
              Importer votre billet depuis votre Appareil Photo
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_billet}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: '75%', height: '75%' }}
            />
          )}
        </View>
      </View>
    )
  }

  componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status1 } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      const { status2 } = await Permissions.askAsync(Permissions.CAMERA)
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }
  _takeImage = async () => {
    let picture = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!picture.cancelled) {
      this.setState({ image: picture.uri })
    }
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

export default Billet
