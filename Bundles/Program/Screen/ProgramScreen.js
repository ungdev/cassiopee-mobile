import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'

class ProgramScreen extends Component {
  static navigationOptions = {
    drawerIcon: <Icon name="ios-timer" style={{ fontSize: 24 }} />,
  }
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
