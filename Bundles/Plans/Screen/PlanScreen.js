import React, { Component } from "react";
import {View, Text, StyleSheet } from "react-native";
import Header from '../../../components/Header.js';
import DrawerTrigger from '../../../components/DrawerTrigger.js';

class PlanScreen extends Component{
  render(){
    return(
      <React.Fragment>
        <Header bigtitle='Plan' />
      <View style={styles.container}>
        <Text>Plan</Text>
      </View>
        </React.Fragment>
    );
  }
}

export default PlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
