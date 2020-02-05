import React, { Component } from "react";
import {View, Text, StyleSheet, ScrollView } from "react-native";
import Header from '../../../components/Header';
import DrawerTrigger from '../../../components/DrawerTrigger';
import TextVestiaire from '../TextVestiaire';

class MyTicketScreen extends Component{

  static navigationOptions = {
      title: 'Mon Billet',
    };

  render(){
    return(
      <React.Fragment>
        <Header bigtitle='Mon Billet' />
      <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.viewvestiaire}>
        <Text>Partie Vestiaire</Text>
        <TextVestiaire/>
          </View>

          <View style={styles.viewbillet}>
        <Text>Partie Billet</Text>
          </View>


      </ScrollView>
        </React.Fragment>
    );
  }
}

export default MyTicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  viewbillet: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  viewvestiaire: {
    flex: 2,
    backgroundColor: 'cyan'
  }
})
