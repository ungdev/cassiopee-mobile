import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native'
import Accordion from '../Accordion/Accordion.js'

class Navettes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Accordion />
      </View>
    )
  }
}

export default Navettes

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
