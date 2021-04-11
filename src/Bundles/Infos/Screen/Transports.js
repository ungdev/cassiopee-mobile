import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import Accordion from '../Accordion/Accordion.js'
import i18n from '../../../translate/index'
import { TitleText } from '../../../components/TitleText.js'
import { StyledText } from '../../../components/StyledText.js'
import { LinearGradient } from 'expo-linear-gradient'
const Device = require('react-native-device-detection')

class Transports extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.main_container}>
          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
            style={styles.container}
          >
            <View style={styles.container_second}>
              <TitleText style={styles.title}>
                {i18n.t('transport_shuttle_title')}
              </TitleText>
            </View>

            <StyledText style={styles.paragraphe}>
              {i18n.t('transport_shuttle_before')}
            </StyledText>

            <StyledText
              style={styles.buslink}
              onPress={() => Linking.openURL('https://www.tcat.fr/')}
            >
              www.tcat.fr
            </StyledText>
          </LinearGradient>

          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
            style={styles.container}
          >
            <View style={styles.container_second}>
              <TitleText style={styles.title}>
                {i18n.t('transport_car_title')}
              </TitleText>
            </View>

            <StyledText style={styles.paragraphe}>
              {i18n.t('transport_car')}
            </StyledText>
          </LinearGradient>

          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
            style={styles.container}
          >
            <View style={styles.container_second}>
              <TitleText style={styles.title}>
                {i18n.t('transport_train_title')}
              </TitleText>
            </View>

            <StyledText style={styles.paragraphe}>
              {i18n.t('transport_train')}
            </StyledText>
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }
}

/*If you want add Shuttle info, add this component : <Accordion /> */

export default Transports

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    borderWidth: 0,
    borderColor: '#094E6F',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    width: '95%',
  },
  container_second: {
    borderBottomWidth: 1,
    borderColor: '#094E6F',
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    marginBottom: 5,
    color: '#094E6F',
    fontSize: 25,
    textAlign: 'center',
  },
  paragraphe: {
    marginTop: 15,
    textAlign: 'justify',
    color: '#094E6F',
    fontSize: 17,
  },
  buslink: {
    marginTop: 15,
    textAlign: 'center',
    color: '#094E6F',
    textDecorationLine: 'underline',
    fontSize: 17,
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    title: {
      color: '#094E6F',
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 10,
    },
    paragraphe: {
      marginTop: 10,
      textAlign: 'justify',
      color: '#094E6F',
      fontSize: 18,
    },
  })
}
