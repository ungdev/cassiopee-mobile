import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native'
import NavigatorArtiste from '../NavigatorArtiste';
import data from '../DataArtistes'
//import { connect } from 'react-redux'

class ArtisteDetail extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'red',
      height: 95,
    }

  };

  _displayFavoriteImage() {
    var sourceImage = require('../../../images/ic_favorite_border.png')
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }

  _displayArtiste() {
      const artiste = this.props.artiste
      console.log(this.props)
      return (
        <ScrollView style={styles.scrollview_container}>
          <View style={styles.image_container}>

          <Image
            style={styles.image}
            source={require('../../../images/pictures.jpg')}
          />
          </View>
          <Text style={styles.title_text}>{artiste.title}</Text>
          <TouchableOpacity
            style={styles.favorite_container}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.default_text}>Horaire de Passage : </Text>
          <Text style={styles.default_text}>Scène : </Text>
          <Text style={styles.default_text}>Biographie</Text>
          <Text style={styles.description_text}></Text>
          <Text style={styles.default_text}>Liens</Text>
          <Text style={styles.default_text}></Text>
          <Text style={styles.default_text}></Text>
          <Text style={styles.default_text}></Text>
        </ScrollView>
      )
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayArtiste(data)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_container:{
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
  },
  scrollview_container: {
    flex: 1,
  },
  image: {
    resizeMode:'cover',
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  favorite_container: {
    alignItems: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_image: {
    width: 40,
    height: 40
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesArtiste: state.favoritesArtiste
  }
}

export default ArtisteDetail
