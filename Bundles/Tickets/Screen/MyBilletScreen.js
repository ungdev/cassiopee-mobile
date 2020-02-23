import React, { Component } from "react";
import {View, Text, StyleSheet } from "react-native";
import Header from '../../../components/Header.js';
import DrawerTrigger from '../../../components/DrawerTrigger.js';

class MyBilletScreen extends Component{

  static navigationOptions = {
      title: 'Mon Billet',
    };

  render(){
    return(
      <React.Fragment>
        <Header bigtitle='Mon Billet' />
      <View style={styles.container}>
        <Text>Mon Billet</Text>
      </View>
        </React.Fragment>
    );
  }
}

export default MyBilletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
