import React from 'react'
import { TouchableOpacity, Linking, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'

class SocialButton extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    uri: PropTypes.string,
  }

  _showAlert(url) {
    Alert.alert(
      'Information',
      "Vous allez être redirigé vers une page de l'artiste",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => Linking.openURL(url) },
      ],
      { cancelable: false }
    )
  }

  render() {
    const expr = this.props.type
    const url = this.props.uri

    switch (expr) {
      case 'facebook':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon name="facebook-official" size={45} color={'whitesmoke'} />
          </TouchableOpacity>
        )
      case 'instagram':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon name="instagram" size={45} color={'whitesmoke'} />
          </TouchableOpacity>
        )
      case 'youtube':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon name="youtube-play" size={45} color={'whitesmoke'} />
          </TouchableOpacity>
        )
      case 'twitter':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon name="twitter" size={45} color={'whitesmoke'} />
          </TouchableOpacity>
        )
      case 'web':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon2 name="web" size={45} color={'whitesmoke'} />
          </TouchableOpacity>
        )
      default:
    }
  }
}
export default SocialButton
