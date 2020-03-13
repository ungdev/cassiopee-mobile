import React from 'react'
import { StyleSheet, View } from 'react-native'
import List, { List as ListModel } from './List'
import List2, { List2 as ListModel2 } from './List2'

const aller: ListModel = {
  name: 'Beurnonville -> UTT',
  items: [
    { name: '21H30' },
    { name: '22H00' },
    { name: '22H15' },
    { name: '22H30' },
    { name: '22H45' },
    { name: '23H00' },
    { name: '23H15' },
    { name: '23H30' },
    { name: '23H45' },
    { name: '00H00' },
    { name: '00H15' },
    { name: '00H30' },
  ],
}

const retour: ListModel2 = {
  name: 'UTT -> Beurnonville',
  items: [
    { name: '1H00' },
    { name: '1H30' },
    { name: '2H00' },
    { name: '2H30' },
    { name: '3H00' },
    { name: '3H30' },
    { name: '3H45' },
    { name: '4H00' },
    { name: '4H15' },
    { name: '4H30' },
    { name: '4H45' },
    { name: '5H00' },
    { name: '5H15' },
    { name: '5H30' },
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
