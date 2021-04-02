import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function FoodTruckChoice({ navigation }) {
  return (
    <View style={styles.main_container}>
      <View style={styles.second_container}>
        <TouchableOpacity
          style={styles.button}
          title="Go to TRUCK 1"
          onPress={() => navigation.navigate('Food Truck 1')}
        >
          <Text style={styles.text}>Name Food Truck 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.second_container}>
        <TouchableOpacity
          style={styles.button}
          title="Go to TRUCK 2"
          onPress={() => navigation.navigate('Food Truck 2')}
        >
          <Text style={styles.text}>Name Food Truck 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
  },
  second_container: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    margin: '5%',
    padding: 5,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: '#0A3D60',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
})
