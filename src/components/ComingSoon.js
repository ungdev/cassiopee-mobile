import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import i18n from '../translate/index'
import { TitleText } from './TitleText'

class ComingSoon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/logo_2021_dayedition.png')}
        ></Image>
        <TitleText style={styles.title}>
          {i18n.t('coming_soon_title')}
        </TitleText>
      </View>
    )
  }
}

export default ComingSoon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 28,
    color: 'white',
  },
  image: {
    marginTop: 38,
    width: 320,
    height: 180,
    resizeMode: 'contain',
  },
})
