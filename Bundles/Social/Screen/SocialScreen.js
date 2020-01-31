import React, { Component } from "react";
import {View, Text, StyleSheet } from "react-native";
import Header from '../../../components/Header.js';
import DrawerTrigger from '../../../components/DrawerTrigger.js';
import TabNavigatorSocial from '../TabNavigatorSocial.js';

class SocialScreen extends Component{

  render(){
    return(
      <React.Fragment>
      <Header bigtitle='Social'/>
        <TabNavigatorSocial/>
        </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default SocialScreen;
