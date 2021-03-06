import React from 'react'
import { ScrollView, StyleSheet, Text, Linking } from 'react-native'
import i18n from '../../../translate/index'

class Reglement extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.t}>{i18n.t('rule_title')}</Text>
        <Text style={styles.h}>{i18n.t('rule_security_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_security')}</Text>
        <Text style={styles.h}>{i18n.t('rule_identity_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_identity')}</Text>
        <Text style={styles.h}>{i18n.t('rule_dresscode_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_dresscode')}</Text>
        <Text style={styles.h}>{i18n.t('rule_prevention_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_prevention')}</Text>
        <Text style={styles.h}>{i18n.t('rule_ecology_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_ecology')}</Text>
        <Text style={styles.h}>{i18n.t('rule_local_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_local')}</Text>
        <Text style={styles.h}>{i18n.t('rule_social_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_social')}</Text>
        <Text style={styles.t}>{i18n.t('rule_credits_title')}</Text>
        <Text style={styles.p}>
          {i18n.t('rule_credits_one')}{' '}
          <Text
            style={styles.dev}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/quentin-letellier')
            }
          >
            Quentin Letellier,
          </Text>{' '}
          {i18n.t('rule_credits_two')}
        </Text>
        <Text style={styles.h}>{i18n.t('rule_development_title')}</Text>
        <Text style={styles.p}>{i18n.t('rule_development')}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  p: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 15,
    textAlign: 'justify',
    color: 'whitesmoke',
  },
  dev: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 15,
    textAlign: 'justify',
    color: 'whitesmoke',
    textDecorationLine: 'underline',
  },

  t: {
    marginTop: 15,
    color: '#bd945a',
    fontSize: 25,
    textAlign: 'center',
  },

  h: {
    marginTop: 15,
    padding: 5,
    color: '#f7ce8c',
    fontSize: 20,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
  },
  link: {
    color: '#00b5ec',
  },
})

export default Reglement
