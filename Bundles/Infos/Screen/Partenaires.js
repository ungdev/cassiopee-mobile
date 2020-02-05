import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


class Partenaires extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TESTTTT</Text>
        <Text style={styles.instructions}>YOLOOOOOO</Text>
      </View>
    );
  }
}

export default Partenaires;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  });
