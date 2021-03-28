import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import openMap from 'react-native-open-maps'
import email from 'react-native-email'
import i18n from '../../../translate/index'
const Device = require('react-native-device-detection')

class Infos extends React.Component {
  _goToUTT() {
    openMap({
      latitude: 48.270371,
      longitude: 4.065387,
      query: '12 Rue Marie Curie, 10000 Rosières-prés-Troyes, France',
    })
  }

  handleEmailGala = () => {
    const to = ['gala@utt.fr'] // string or array of email addresses
    email(to, {
      // Optional additional arguments
      subject: '',
      body: '',
    }).catch(console.error)
  }

  handleEmailUng = () => {
    const to = ['ung@utt.fr'] // string or array of email addresses
    email(to, {
      // Optional additional arguments
      cc: ['quentin.letellier@utt.fr'], // string or array of email addresses
      subject: '',
      body: '',
    }).catch(console.error)
  }

  render() {
    return (
      <ScrollView style={styles.main_container}>
        <View style={styles.category}>
          <View>
            <Text style={styles.title}>{i18n.t('info_access_title')}</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-body"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_age')}</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="star"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_dresscode')}</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-beer"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_spirit')}</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>{i18n.t('info_adress_title')}</Text>
          </View>

          <TouchableOpacity style={styles.element} onPress={this._goToUTT}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-pin"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>12 Rue Marie Curie, Troyes</Text>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>{i18n.t('info_date_title')}</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-calendar"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_date')}</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>{i18n.t('info_schedule_title')}</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-time"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_schedule_open')}</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-warning"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>
              {i18n.t('info_schedule_ticket_close')}
            </Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-volume-high"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_schedule_close')}</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>{i18n.t('info_privacy_title')}</Text>
          </View>

          <TouchableOpacity
            style={styles.element}
            onPress={() =>
              Linking.openURL('https://gala.utt.fr/confidentialite')
            }
          >
            <View style={styles.element_icon}>
              <Icon
                name="ios-lock-closed"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_privacy')}</Text>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>{i18n.t('info_contact_title')}</Text>
          </View>

          <TouchableOpacity
            style={styles.element}
            onPress={this.handleEmailGala}
          >
            <View style={styles.element_icon}>
              <Icon
                name="ios-mail"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_contact_mail_gala')}</Text>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.element}
            onPress={this.handleEmailUng}
          >
            <View style={styles.element_icon}>
              <Icon
                name="ios-settings"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
            <Text style={styles.text}>{i18n.t('info_contact_mail_ung')}</Text>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'whitesmoke'}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Infos

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  category: {
    padding: 5,
    margin: 10,
    width: '95%',
    borderWidth: 2,
    borderColor: 'whitesmoke',
    flexDirection: 'column',
  },

  title: {
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#C6E9FA',
  },

  element: {
    flexDirection: 'row',
    height: 35,
    borderTopWidth: 1,
    borderColor: 'whitesmoke',
    padding: 5,
  },

  element_icon: {
    width: '7%',
  },

  element_arrow: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    top: 5,
  },

  text: {
    marginTop: 4,
    fontSize: 15,
    marginLeft: 10,
    color: 'whitesmoke',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    title: {
      marginBottom: 7,
      fontWeight: 'bold',
      fontSize: 24,
      color: '#C6E9FA',
    },
    text: {
      marginTop: 4,
      fontSize: 22,
      marginLeft: 10,
      color: 'whitesmoke',
    },
    element: {
      flexDirection: 'row',
      height: 45,
      borderTopWidth: 1,
      borderColor: 'whitesmoke',
      padding: 5,
    },
  })
}
