import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header2 from '../../../components/Header2'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import env from '../../../config'
import moment from 'moment'

class ArtistDetail extends React.Component {
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

          <ImageBackground
            source={require('../../../images/Logo_Cassiopée/coverartiste.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <Text style={styles.title_text}>{artist.name}</Text>
            <Text style={styles.default_text}>
              Horaire de Passage :{'  '}
              <Text style={{ fontWeight: 'normal' }}>
                {moment(artist.eventDate).format('HH:mm')}
              </Text>
            </Text>
            <Text style={styles.default_text}>
              Scène :{'  '}
              <Text style={{ fontWeight: 'normal' }}>{artist.eventPlace}</Text>
            </Text>
            <Text style={styles.default_text}>Biographie :</Text>
            {/* <Text style={styles.description_text}>{artist.overview}</Text> */}
            <Text style={styles.default_text_lien}>Liens : </Text>

            <View style={styles.socialartist}>
              <Icon
                name="facebook-official"
                size={45}
                color={'whitesmoke'}
                onPress={() => Linking.openURL(artist.link)}
              />
              <Icon
                name="instagram"
                size={45}
                color={'whitesmoke'}
                onPress={() => Linking.openURL(artist.link)}
              />
              <Icon
                name="youtube-play"
                size={45}
                color={'whitesmoke'}
                onPress={() => Linking.openURL(artist.link)}
              />
            </View>
          </ImageBackground>
        </View>
      </React.Fragment>
    )
  }

  render() {
    const artist = this.props.artist
    const displayDetailForArtist = this.props.displayDetailForArtist
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
    color: 'whitesmoke',
    textAlign: 'center',
  },
  favorite_container: {
    alignItems: 'center',
    marginBottom: 10,
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
    marginLeft: 45,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 10,
    color: 'whitesmoke',
  },
  default_text_lien: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 45,
    marginRight: 5,
    marginTop: 25,
    marginBottom: 8,
    color: 'whitesmoke',
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
  socialartist: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
})

export default ArtistDetail
