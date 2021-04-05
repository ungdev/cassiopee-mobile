import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import Accordion from '../Accordion/Accordion.js'
import i18n from '../../../translate/index'
import { TitleText } from '../../../components/TitleText.js'
import { StyledText } from '../../../components/StyledText.js'
const Device = require('react-native-device-detection')

class Transports extends React.Component {
  render() {
    return (
      <ScrollView style={styles.main_container}>
        <TitleText style={styles.title}>
          {i18n.t('transport_shuttle_title')}
        </TitleText>
        <View style={styles.container}>
          <StyledText style={styles.paragraphe}>
            {i18n.t('transport_shuttle_before')}
          </StyledText>
          <StyledText
            style={styles.buslink}
            onPress={() => Linking.openURL('https://www.tcat.fr/')}
          >
            www.tcat.fr
          </StyledText>
        </View>

        <TitleText style={styles.title}>
          {i18n.t('transport_car_title')}
        </TitleText>
        <View style={styles.container}>
          <StyledText style={styles.paragraphe}>
            {i18n.t('transport_car')}
          </StyledText>
        </View>
        <StyledText style={styles.title}>
          {i18n.t('transport_train_title')}
        </StyledText>
        <View style={styles.container}>
          <StyledText style={styles.paragraphe}>
            {i18n.t('transport_train')}
          </StyledText>
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
    backgroundColor: 'transparent',
  },
  container: {
    borderWidth: 2,
    borderColor: 'whitesmoke',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  title: {
    marginTop: 15,
    color: '#C6E9FA',
    fontSize: 28,
    textAlign: 'center',
  },
  paragraphe: {
    textAlign: 'justify',
    color: 'whitesmoke',
    fontSize: 17,
  },
  buslink: {
    textAlign: 'center',
    color: 'whitesmoke',
    textDecorationLine: 'underline',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    title: {
      marginTop: 15,
      color: '#C6E9FA',
      fontSize: 25,
      textAlign: 'center',
    },
    paragraphe: {
      textAlign: 'justify',
      color: 'whitesmoke',
      fontSize: 20,
    },
  })
}
