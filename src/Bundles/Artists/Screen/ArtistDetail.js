import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  SafeAreaView,
} from 'react-native'
import Header2 from '../../../components/Header2'
import SocialButton from '../components/SocialButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import env from '../../../config'
import moment from 'moment'
import { connect } from 'react-redux'

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      infoNotif: 0,
    }
  }
  _toggleFavorite() {
    const artist = this.props.navigation.getParam('artist')
    const action = {
      type: 'TOGGLE_FAVORITE',
      value: artist,
    }
    this.props.dispatch(action)
    if (
      this.props.favoritesArtist.findIndex(item => item.id === artist.id) == -1
    ) {
      Alert.alert(
        'Notification des artistes favoris',
        'Cette fonctionalité sera disponible dans une prochaine mise à jour :-)',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }
  }

  _displayFavoriteImage() {
    const artist = this.props.navigation.getParam('artist')
    var sourceImage = require('../../../images/ic_favorite_border_white.png')
    if (
      this.props.favoritesArtist.findIndex(item => item.id === artist.id) !== -1
    ) {
      sourceImage = require('../../../images/ic_favorite_white.png')
    }
    return <Image source={sourceImage} style={styles.favorite_image}></Image>
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
          <Header2 bigtitle={artist.name} />
        </TouchableWithoutFeedback>

        <View style={styles.main_container}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{ uri: `${env.API_URI}/api/v1${artist.image}` }}
            />
          </View>
          <SafeAreaView style={styles.droidSafeArea}>
            <ImageBackground
              source={require('../../../images/Logo_Cassiopée/coverartiste.png')}
              style={{ width: '100%', height: '100%' }}
            >
              <ScrollView
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                }}
              >
                <Text style={styles.title_text}>{artist.name}</Text>
                <TouchableOpacity
                  style={styles.favorite_container}
                  onPress={() => this._toggleFavorite()}
                >
                  {this._displayFavoriteImage()}
                </TouchableOpacity>
                <Text style={styles.default_text}>
                  Horaire de Passage :{'  '}
                  <Text style={{ fontWeight: 'normal' }}>
                    {moment(artist.eventDate).format('HH:mm')}
                  </Text>
                </Text>
                <Text style={styles.default_text}>
                  Scène :{'  '}
                  <Text style={{ fontWeight: 'normal' }}>
                    {artist.eventPlace}
                  </Text>
                </Text>
                <Text style={styles.default_text}>
                  Biographie :{' '}
                  <Text style={styles.description_text}>
                    {artist.description}
                  </Text>
                </Text>
                <Text style={styles.default_text_lien}>Liens : </Text>

                <View style={styles.socialartist}>
                  {artist.Links.map(link => (
                    <SocialButton
                      key={link.uri}
                      type={link.type}
                      uri={link.uri}
                    ></SocialButton>
                  ))}
                </View>
              </ScrollView>
            </ImageBackground>
          </SafeAreaView>
        </View>
      </React.Fragment>
    )
  }

  render() {
    const artist = this.props.artist
    const displayDetailForArtist = this.props.displayDetailForArtist
    //console.log(this.props)
    return <View style={styles.main_container}>{this._displayArtist()}</View>
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  image_container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 190,
    position: 'relative',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  favorite_container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  description_text: {
    fontStyle: 'italic',
    color: 'whitesmoke',
    margin: 5,
    lineHeight: 23,
  },
  default_text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 10,
    color: 'white',
  },
  default_text_lien: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 5,
    marginTop: 25,
    marginBottom: 8,
    color: 'white',
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
  socialartist: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
  droidSafeArea: {
    flex: Platform.OS === 'android' ? 1 : 0,
  },
})

const mapStateToProps = state => {
  return {
    favoritesArtist: state.toggleFavorite.favoritesArtist,
  }
}
export default connect(mapStateToProps)(ArtistDetail)
