import React from 'react'
import { StyleSheet, View } from 'react-native'
import List, { List as ListModel } from './List'
import List2, { List2 as ListModel2 } from './List2'

const aller: ListModel = {
  name: 'Beurnonville -> UTT',
  items: [
    { name: '21H30', id: '21H30', id2: '-1' },
    { name: '22H00', id: '22H00', id2: '-1' },
    { name: '22H15', id: '22H15', id2: '-1' },
    { name: '22H30', id: '22H30', id2: '-1' },
    { name: '22H45', id: '22H45', id2: '-1' },
    { name: '23H00', id: '23H00', id2: '-1' },
    { name: '23H15', id: '23H15', id2: '-1' },
    { name: '23H30', id: '23H30', id2: '-1' },
    { name: '23H45', id: '23H45', id2: '-1' },
    { name: '00H00', id: '24H00', id2: '00H00' },
    { name: '00H15', id: '24H15', id2: '0H15' },
    { name: '00H30', id: '24H30', id2: '0H30' },
  ],
}

const retour: ListModel2 = {
  name: 'UTT -> Beurnonville',
  items: [
    { name: '1H00', id: '25H00', id2: '1H00' },
    { name: '1H30', id: '25H30', id2: '1H30' },
    { name: '2H00', id: '26H00', id2: '2H00' },
    { name: '2H30', id: '26H30', id2: '2H30' },
    { name: '3H00', id: '27H00', id2: '3H00' },
    { name: '3H30', id: '27H30', id2: '3H30' },
    { name: '3H45', id: '27H45', id2: '3H45' },
    { name: '4H00', id: '28H00', id2: '4H00' },
    { name: '4H15', id: '28H15', id2: '4H15' },
    { name: '4H30', id: '28H30', id2: '4H30' },
    { name: '4H45', id: '28H45', id2: '4H45' },
    { name: '5H00', id: '29H00', id2: '5H00' },
    { name: '5H15', id: '30H15', id2: '5H15' },
    { name: '5H30', id: '30H30', id2: '5H30' },
  ],
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export default () => {
  return (
    <View style={styles.container}>
      <List {...{ aller }} />
      <List2 {...{ retour }} />
    </View>
  )
}
