import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import openMap from 'react-native-open-maps'
import email from 'react-native-email'
import i18n from '../../../translate/index'
import { TitleText } from '../../../components/TitleText'
import { StyledText } from '../../../components/StyledText'
import { LinearGradient } from 'expo-linear-gradient'
import { useScrollToTop } from '@react-navigation/native'
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
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.category}
        >
          <View>
            <TitleText style={styles.title}>
              {i18n.t('info_access_title')}
            </TitleText>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-body"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>{i18n.t('info_age')}</StyledText>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-fitness"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              {i18n.t('info_dresscode')}
            </StyledText>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-beer"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>{i18n.t('info_spirit')}</StyledText>
          </View>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.category}
        >
          <View>
            <TitleText style={styles.title}>
              {i18n.t('info_adress_title')}
            </TitleText>
          </View>

          <TouchableOpacity style={styles.element} onPress={this._goToUTT}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-pin"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              12 Rue Marie Curie, Troyes
            </StyledText>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.category}
        >
          <View>
            <TitleText style={styles.title}>
              {i18n.t('info_date_title')}
            </TitleText>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-calendar"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>{i18n.t('info_date')}</StyledText>
          </View>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.category}
        >
          <View>
            <TitleText style={styles.title}>
              {i18n.t('info_schedule_title')}
            </TitleText>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-time"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              {i18n.t('info_schedule_open')}
            </StyledText>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-volume-high"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              {i18n.t('info_schedule_close')}
            </StyledText>
          </View>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.category}
        >
          <View>
            <TitleText style={styles.title}>
              {i18n.t('info_privacy_title')}
            </TitleText>
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
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              {i18n.t('info_privacy')}
            </StyledText>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.category}
        >
          <View>
            <TitleText style={styles.title}>
              {i18n.t('info_contact_title')}
            </TitleText>
          </View>

          <TouchableOpacity
            style={styles.element}
            onPress={this.handleEmailGala}
          >
            <View style={styles.element_icon}>
              <Icon
                name="ios-mail"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              {i18n.t('info_contact_mail_gala')}
            </StyledText>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
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
                color={'#094E6F'}
              />
            </View>
            <StyledText style={styles.text}>
              {i18n.t('info_contact_mail_ung')}
            </StyledText>
            <View style={styles.element_arrow}>
              <Icon
                name="ios-arrow-forward"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    )
  }
}

/* <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon
                name="ios-warning"
                size={Device.isTablet ? 36 : 25}
                color={'#094E6F'}
              />
            </View>
            <Text style={styles.text}>
              {i18n.t('info_schedule_ticket_close')}
            </Text>
   </View> */

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
    borderWidth: 0,
    borderColor: '#094E6F',
    flexDirection: 'column',
    borderRadius: 10,
    alignSelf: 'center',
  },

  title: {
    marginBottom: 7,
    fontSize: 25,
    color: '#094E6F',
    textAlign: 'center',
  },

  element: {
    flexDirection: 'row',
    height: 35,
    borderTopWidth: 1,
    borderColor: '#094E6F',
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
    fontSize: 17,
    marginLeft: 10,
    color: '#094E6F',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    category: {
      padding: 5,
      margin: 10,
      width: '95%',
      borderWidth: 0,
      borderColor: '#094E6F',
      flexDirection: 'column',
      borderRadius: 10,
      alignSelf: 'center',
    },
    title: {
      textAlign: 'center',
      marginBottom: 7,
      fontWeight: 'bold',
      fontSize: 25,
      color: '#094E6F',
    },
    text: {
      marginTop: 8,
      fontSize: 18,
      marginLeft: 10,
      color: '#094E6F',
    },
    element: {
      flexDirection: 'row',
      height: 45,
      borderTopWidth: 1,
      borderColor: '#094E6F',
      padding: 5,
    },
  })
}
