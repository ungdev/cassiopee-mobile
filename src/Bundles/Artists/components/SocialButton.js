import React from 'react'
import { TouchableOpacity, Linking, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import i18n from '../../../translate/index'
const Device = require('react-native-device-detection')

class SocialButton extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    uri: PropTypes.string,
  }

  _showAlert(url) {
    Alert.alert(
      i18n.t('alert_info_title'),
      i18n.t('alert_text_redirect'),
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
            <Icon
              name="facebook-official"
              size={Device.isTablet ? 60 : 45}
              color={'whitesmoke'}
            />
          </TouchableOpacity>
        )
      case 'instagram':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon
              name="instagram"
              size={Device.isTablet ? 60 : 45}
              color={'whitesmoke'}
            />
          </TouchableOpacity>
        )
      case 'youtube':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon
              name="youtube-play"
              size={Device.isTablet ? 60 : 45}
              color={'whitesmoke'}
            />
          </TouchableOpacity>
        )
      case 'twitter':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon
              name="twitter"
              size={Device.isTablet ? 60 : 45}
              color={'whitesmoke'}
            />
          </TouchableOpacity>
        )
      case 'web':
        return (
          <TouchableOpacity onPress={() => this._showAlert(url)}>
            <Icon2
              name="web"
              size={Device.isTablet ? 60 : 45}
              color={'whitesmoke'}
            />
          </TouchableOpacity>
        )
      default:
    }
  }
}
export default SocialButton
