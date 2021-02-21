import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Accordion from '../Accordion/Accordion.js'
import i18n from '../../../translate/index'
const Device = require('react-native-device-detection')

class Transports extends React.Component {
  render() {
    return (
      <ScrollView style={styles.main_container}>
        <Text style={styles.title}>{i18n.t('transport_shuttle_title')}</Text>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>
            {i18n.t('transport_shuttle_before')}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>
            {i18n.t('transport_shuttle_after')}
          </Text>
        </View>
        <Accordion />
        <Text style={styles.title}>{i18n.t('transport_car_title')}</Text>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>{i18n.t('transport_car')}</Text>
        </View>
        <Text style={styles.title}>{i18n.t('transport_train_title')}</Text>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>{i18n.t('transport_train')}</Text>
        </View>
      </ScrollView>
    )
  }
}

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
    fontSize: 25,
    textAlign: 'center',
  },
  paragraphe: {
    textAlign: 'justify',
    color: 'whitesmoke',
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
      fontSize: 18,
    },
  })
}
