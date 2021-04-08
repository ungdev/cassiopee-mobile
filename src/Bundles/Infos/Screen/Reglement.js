import React from 'react'
import { ScrollView, StyleSheet, Text, Linking, View } from 'react-native'
import { StyledText } from '../../../components/StyledText'
import { TitleText } from '../../../components/TitleText'
import i18n from '../../../translate/index'
const Device = require('react-native-device-detection')

class Reglement extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TitleText style={styles.t}>{i18n.t('rule_title')}</TitleText>

        <View style={styles.container_rules}>
          <TitleText style={styles.h}>
            {i18n.t('rule_security_title')}
          </TitleText>
          <StyledText style={styles.p}>{i18n.t('rule_security')}</StyledText>
        </View>

        <View style={styles.container_rules}>
          <StyledText style={styles.textimportant}>
            {i18n.t('rule_mask')}
          </StyledText>
        </View>

        <View style={styles.container_rules}>
          <TitleText style={styles.h}>
            {i18n.t('rule_identity_title')}
          </TitleText>
          <StyledText style={styles.p}>{i18n.t('rule_identity')}</StyledText>
        </View>

        <View style={styles.container_rules}>
          <TitleText style={styles.h}>
            {i18n.t('rule_prevention_title')}
          </TitleText>
          <StyledText style={styles.p}>
            {i18n.t('rule_prevention_2021')}
          </StyledText>
        </View>

        <View style={styles.container_rules}>
          <TitleText style={styles.h}>{i18n.t('rule_ecology_title')}</TitleText>
          <StyledText style={styles.p}>{i18n.t('rule_ecology')}</StyledText>
        </View>

        <View style={styles.container_rules}>
          <TitleText style={styles.h}>{i18n.t('rule_local_title')}</TitleText>
          <StyledText style={styles.p}>{i18n.t('rule_local')}</StyledText>
        </View>

        <TitleText style={styles.t}>{i18n.t('rule_credits_title')}</TitleText>

        <View style={styles.container_rules}>
          <StyledText style={styles.p}>
            {i18n.t('rule_credits_one')}{' '}
            <StyledText
              style={styles.dev}
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/quentin-letellier')
              }
            >
              Quentin Letellier,
            </StyledText>{' '}
            {i18n.t('rule_credits_two')}
          </StyledText>
        </View>

        <TitleText style={styles.h}>
          {i18n.t('rule_development_title')}
        </TitleText>

        <View style={styles.container_rules}>
          <StyledText style={styles.p}>{i18n.t('rule_development')}</StyledText>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },
  container_rules: {
    width: '98%',
    borderWidth: 2,
    borderColor: 'whitesmoke',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  p: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 17,
    textAlign: 'justify',
    color: 'whitesmoke',
  },
  textimportant: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 20,
    textAlign: 'justify',
    color: 'whitesmoke',
  },
  dev: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 17,
    textAlign: 'justify',
    color: 'whitesmoke',
    textDecorationLine: 'underline',
  },

  t: {
    marginTop: 15,
    color: '#C6E9FA',
    fontSize: 28,
    textAlign: 'center',
  },

  h: {
    padding: 3,
    color: '#a6e2ff',
    fontSize: 24,
    textAlign: 'left',
  },
  title: {
    fontSize: 28,
  },
  link: {
    color: '#00b5ec',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    p: {
      alignSelf: 'stretch',
      padding: 5,
      fontSize: 18,
      textAlign: 'justify',
      color: 'whitesmoke',
    },
    dev: {
      alignSelf: 'stretch',
      padding: 5,
      fontSize: 18,
      textAlign: 'justify',
      color: 'whitesmoke',
      textDecorationLine: 'underline',
    },

    t: {
      marginTop: 15,
      color: '#C6E9FA',
      fontSize: 28,
      textAlign: 'center',
    },

    h: {
      marginTop: 15,
      padding: 5,
      color: '#a6e2ff',
      fontSize: 25,
      textAlign: 'left',
    },
    title: {
      fontSize: 22,
    },
  })
}

export default Reglement
