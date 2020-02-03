import React, { Component } from "react";
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
import DrawerTrigger from '../../../components/DrawerTrigger';
import Icon from 'react-native-vector-icons/Feather';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Header from '../../../components/Header'
import data from '../DataArtistes'

class ArtisteItem extends React.Component {

  render() {
    const artiste = this.props.artiste
    const displayDetailForArtiste = this.props.displayDetailForArtiste
    return (
      <TouchableOpacity style={styles.item_container} onPress={() => displayDetailForArtiste(artiste.id)}>
        <ImageBackground
          style={styles.image}
          source={artiste.poster}
        />
        <Text style={styles.title_text}>{artiste.title}</Text>
        </TouchableOpacity>
    )
  }
}


class ArtistesScreen extends React.Component {

  static navigationOptions = {
    title: 'Artistes',
    headerStyle: {
      backgroundColor: 'red',
      height: 95,
    },
    headerLeft: () => <DrawerTrigger/>,
  };

  _displayDetailForArtiste = (idArtiste) =>{
    //console.log("display artist with id" + idArtiste)
    this.props.navigation.navigate("ArtisteDetail", {idArtiste: idArtiste})
  }

  render() {
    return (
      <View style={styles.main_container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ArtisteItem artiste={item} displayDetailForArtiste={this._displayDetailForArtiste}/>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  item_container: {
   height: 190,
 },
 image: {
   width: "100%",
   height: 190,
   position: 'relative',

 },
 title_text: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 20,
   position: 'absolute',
   bottom: 5,
   right: 5
 }
})

export default ArtistesScreen;
