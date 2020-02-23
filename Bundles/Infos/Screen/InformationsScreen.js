import React, { Component } from "react";
import {View, Text, StyleSheet } from "react-native";
import Header from '../../../components/Header.js';
import DrawerTrigger from '../../../components/DrawerTrigger.js';
import TabNavigatorInfo from '../TabNavigatorInfo.js';

class InformationsScreen extends Component{
  render(){
    return(
      <React.Fragment>
        <Header bigtitle='Informations' />
        <TabNavigatorInfo/>
        </React.Fragment>
    );
  }
}

export default InformationsScreen;
