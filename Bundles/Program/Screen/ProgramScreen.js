import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../../components/Header'

class ProgramScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bigtitle="Programme" />
        <View style={styles.container}>
          <Text>Programme</Text>
        </View>
      </React.Fragment>
    )
  }
}

export default ProgramScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
