import React from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'
import data from '../DataArtists'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header2 from '../../../components/Header2'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

//import { connect } from 'react-redux'

class ArtistDetail extends React.Component {
  _displayFavoriteImage() {
    var sourceImage = require('../../../images/ic_favorite_border.png')
    return <Image style={styles.favorite_image} source={sourceImage} />
  }

  _displayArtist() {
    const artist = this.props.navigation.getParam('artist')
    return (
      <React.Fragment>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate('ArtistsScreen')
          }}
        >
          <Header2 bigtitle={artist.title} />
        </TouchableWithoutFeedback>

        <ScrollView style={styles.scrollview_container}>
          <View style={styles.image_container}>
            <Image style={styles.image} source={artist.poster} />
          </View>
          <Text style={styles.title_text}>{artist.title}</Text>
          <TouchableOpacity style={styles.favorite_container}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.default_text}>
            Horaire de Passage : {artist.horaire}
          </Text>
          <Text style={styles.default_text}>Scène : {artist.stage}</Text>
          <Text style={styles.default_text}>Biographie :</Text>
          <Text style={styles.description_text}>{artist.overview}</Text>
          <Text style={styles.default_text}>Liens :</Text>

          <View style={styles.socialartist}>
            <Icon
              name="facebook-official"
              size={45}
              onPress={() => Linking.openURL(artist.facebook)}
            />
            <Icon
              name="instagram"
              size={45}
              onPress={() => Linking.openURL(artist.instagram)}
            />
            <Icon
              name="youtube-play"
              size={45}
              onPress={() => Linking.openURL(artist.youtube)}
            />
          </View>
        </ScrollView>
      </React.Fragment>
    )
  }

  render() {
    const artist = this.props.artist
    const displayDetailForArtist = this.props.displayDetailForArtist
    console.log(this.props.navigation.getParam('artist').title)
    return <View style={styles.main_container}>{this._displayArtist()}</View>
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollview_container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 190,
    position: 'relative',
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
    textAlign: 'center',
  },
  favorite_container: {
    alignItems: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
  socialartist: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
})

const mapStateToProps = state => {
  return {
    favoris: state.favoris,
  }
}

export default ArtistDetail
