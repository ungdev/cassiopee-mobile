import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../../components/Header'
//import MapLeaflet from './mapleaflet'

class PlanScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bigtitle="Plan" />
        <Text>Plan</Text>
      </React.Fragment>
    )
  }
}

export default PlanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
