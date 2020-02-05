import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native'
import NavigatorArtist from '../NavigatorArtist'
import data from '../DataArtists'
//import { connect } from 'react-redux'

class ArtistDetail extends React.Component {

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

  _displayArtist() {

      return (
        <ScrollView style={styles.scrollview_container}>
          <View style={styles.image_container}>

          <Image
            style={styles.image}
            source={require('../../../images/pictures.jpg')}
          />
          </View>
          <Text style={styles.title_text}>{artist.title} METTRE SUPER GRANDE LIGNE DE OPEN CLASSROOM</Text>
          <TouchableOpacity
            style={styles.favorite_container}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.default_text}>Horaire de Passage : {artist.horaire}</Text>
          <Text style={styles.default_text}>Scène : {artist.stage}</Text>
          <Text style={styles.default_text}>Biographie</Text>
          <Text style={styles.description_text}>{artist.overview}</Text>
          <Text style={styles.default_text}>Liens</Text>
          <Text style={styles.default_text}>{artist.facebook}</Text>
          <Text style={styles.default_text}>{artist.instagram}</Text>
          <Text style={styles.default_text}>{artist.youtube}</Text>
        </ScrollView>
      )
  }

  render() {
    const artist = this.props.artist
    const displayDetailForArtist = this.props.displayDetailForArtist
    console.log(this.props)
    return (
      <View style={styles.main_container}>
        {this._displayArtist()}
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
    favoritesArtist: state.favoritesArtist
  }
}

export default ArtistDetail
