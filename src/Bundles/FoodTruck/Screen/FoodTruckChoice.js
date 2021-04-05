import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../../../components/Header.js'
import { TitleText } from '../../../components/TitleText.js'
import i18n from '../../../translate/index'

export default function FoodTruckChoice({ navigation }) {
  return (
    <React.Fragment>
      <Header bigtitle={i18n.t('menu_foodtruck')} />
      <View style={styles.main_container}>
        <TitleText style={styles.tipText}>
          Choisissez votre Food Truck.
        </TitleText>
        <TouchableOpacity
          style={styles.button}
          title="Go to TRUCK 1"
          onPress={() => navigation.navigate('Food Truck 1')}
        >
          <TitleText style={styles.text}>Name Food Truck 1</TitleText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          title="Go to TRUCK 2"
          onPress={() => navigation.navigate('Food Truck 2')}
        >
          <TitleText style={styles.text}>Name Food Truck 2</TitleText>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    margin: '5%',
    padding: 5,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: '#0A3D60',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
  },

  tipText: {
    fontSize: 28,
  },
})
