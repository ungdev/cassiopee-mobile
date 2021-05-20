import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { StyledText } from '../../../components/StyledText'
import { TitleText } from '../../../components/TitleText'
import i18n from '../../../translate/index'
import BeautyWebView from 'react-native-beauty-webview'
const Device = require('react-native-device-detection')

class Reglement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }
  render() {
    const { modalVisible } = this.state
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <BeautyWebView
            visible={modalVisible} // Reguired for open and close
            onPressClose={() => this.setModalVisible(!modalVisible)} // Reguired for closing the modal
            url={'https://www.quentinletellier.fr'}
            headerBackground={'#094E6F'}
            backgroundColor={'#094E6F'}
            headerContent={'light'}
            progressColor={'#22749C'}
            progressBarType={'background'}
          />
          <View style={styles.container_second}>
            <TitleText style={styles.h}>
              {i18n.t('rule_security_title')}
            </TitleText>
          </View>
          <StyledText style={styles.p}>{i18n.t('rule_security')}</StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>{i18n.t('rule_mask_title')}</TitleText>
          </View>
          <StyledText style={styles.textimportant}>
            {i18n.t('rule_mask')}
          </StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>
              {i18n.t('rule_identity_title')}
            </TitleText>
          </View>

          <StyledText style={styles.p}>{i18n.t('rule_identity')}</StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>
              {i18n.t('rule_prevention_title')}
            </TitleText>
          </View>

          <StyledText style={styles.p}>
            {i18n.t('rule_prevention_2021')}
          </StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>
              {i18n.t('rule_ecology_title')}
            </TitleText>
          </View>

          <StyledText style={styles.p}>{i18n.t('rule_ecology')}</StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>{i18n.t('rule_local_title')}</TitleText>
          </View>

          <StyledText style={styles.p}>{i18n.t('rule_local')}</StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>
              {i18n.t('rule_credits_title')}
            </TitleText>
          </View>
          <StyledText style={styles.p}>
            {i18n.t('rule_credits_one')}{' '}
            <StyledText
              style={styles.dev}
              onPress={() => this.setModalVisible(!modalVisible)}
            >
              Quentin Letellier
            </StyledText>{' '}
            {i18n.t('rule_credits_two')}
          </StyledText>
        </LinearGradient>

        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.container_rules}
        >
          <View style={styles.container_second}>
            <TitleText style={styles.h}>
              {i18n.t('rule_development_title')}
            </TitleText>
          </View>
          <StyledText style={styles.p}>{i18n.t('rule_development')}</StyledText>
        </LinearGradient>
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
    width: '97%',
    borderWidth: 0,
    borderColor: '#094E6F',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  container_second: {
    borderBottomWidth: 1,
    borderColor: '#094E6F',
    alignSelf: 'center',
    width: '100%',
  },
  p: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 17,
    textAlign: 'justify',
    color: '#094E6F',
  },
  textimportant: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 20,
    textAlign: 'justify',
    color: '#094E6F',
  },
  bouton: {
    margin: 0,
    padding: 0,
  },
  dev: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 17,
    textAlign: 'justify',
    color: '#094E6F',
    textDecorationLine: 'underline',
  },
  t: {
    marginTop: 15,
    color: '#094E6F',
    fontSize: 28,
    textAlign: 'center',
  },

  h: {
    padding: 3,
    color: '#094E6F',
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
  },
  link: {
    color: '#ffffff',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    p: {
      alignSelf: 'stretch',
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 18,
      textAlign: 'justify',
      color: '#094E6F',
    },
    dev: {
      alignSelf: 'stretch',
      padding: 5,
      fontSize: 18,
      textAlign: 'justify',
      color: '#094E6F',
      textDecorationLine: 'underline',
    },

    t: {
      marginTop: 15,
      color: '#094E6F',
      fontSize: 28,
      textAlign: 'center',
    },

    h: {
      marginTop: 10,
      marginBottom: 10,
      color: '#094E6F',
      fontSize: 25,
      textAlign: 'center',
    },
    title: {
      fontSize: 25,
    },
  })
}

export default Reglement
