import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Truck2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.tabtotal}>
        <Text style={styles.textleft}>Total Commande : </Text>
        <Text style={styles.textright}>XX,XX €</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabtotal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#094E6F',
    padding: 10,
    flexDirection: 'row',
  },
  textleft: {
    width: '50%',
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
  },
  textright: {
    width: '50%',
    color: 'white',
    textAlign: 'right',
    fontSize: 20,
  },
})
