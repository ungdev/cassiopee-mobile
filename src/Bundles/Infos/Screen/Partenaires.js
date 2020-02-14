import React, { Component } from 'react'
import { Platform, StyleSheet, View, FlatList } from 'react-native'
import dataPartenaires from '../DataPartenaires'
import PartenairesItem from '../PartenairesItem'

class Partenaires extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={dataPartenaires}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <PartenairesItem partenaire={item} />}
        />
      </View>
    )
  }
}

export default Partenaires

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
})
