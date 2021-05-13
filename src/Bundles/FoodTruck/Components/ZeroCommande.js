import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { TitleText } from '../../../components/TitleText'
import i18n from '../../../translate'

class ZeroCommande extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../../assets/logo_2021_dayedition.png')}
        ></Image>
        <TitleText style={styles.title}>
          {i18n.t('foodtruck_zero_commande')}
        </TitleText>
      </View>
    )
  }
}

export default ZeroCommande

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
