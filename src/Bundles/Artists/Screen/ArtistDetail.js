import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native'
import Header2 from '../../../components/Header2'
import SocialButton from '../components/SocialButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import env from '../../../config'
import moment from 'moment'
import { connect } from 'react-redux'
import i18n from '../../../translate/index'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import { SafeAreaView } from 'react-navigation'
import { TitleText } from '../../../components/TitleText'
import { StyledText } from '../../../components/StyledText'
import { LinearGradient } from 'expo-linear-gradient'
const Device = require('react-native-device-detection')

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  async getTokenFromExpo() {
    let token = await Notifications.getExpoPushTokenAsync()
    console.log(token)
  }

  async _toggleFavorite() {
    const artist = this.props.navigation.getParam('artist')
    const action = {
      type: 'TOGGLE_FAVORITE',
      value: artist,
    }
    this.props.dispatch(action)
    //si c'est le premier artiste favoris, message infos
    if (this.props.favoritesArtist.length === 0) {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      //test si les notifs ont été activé
      if (status !== 'granted') {
        return Alert.alert(
          i18n.t('alert_fav_artist_title'),
          i18n.t('alert_fav_artiste_allow'),
          [
            { text: 'OK', onPress: () => this.getTokenFromExpo() },
            { text: 'Cancel', style: 'cancel' },
          ],
          { cancelable: false }
        )
      }
      Alert.alert(
        i18n.t('alert_fav_artist_title'),
        i18n.t('alert_fav_artist'),
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }
  }

  _displayFavoriteImage() {
    const artist = this.props.navigation.getParam('artist')
    var sourceImage = require('../../../../assets/ic_favorite_border_white.png')
    if (
      this.props.favoritesArtist.findIndex((item) => item.id === artist.id) !==
      -1
    ) {
      sourceImage = require('../../../../assets/ic_favorite_white.png')
    }
    return <Image source={sourceImage} style={styles.favorite_image}></Image>
  }

  _displayArtist() {
    const artist = this.props.navigation.getParam('artist')
    console.log(this.props.favoritesArtist)
    return (
      <React.Fragment>
        <LinearGradient
          style={{ height: '100%' }}
          start={[0, 1]}
          end={[1, 0]}
          colors={['#22749C', '#43B9D5']}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('ArtistsScreen')
            }}
          >
            <Header2 bigtitle={artist.name} />
          </TouchableWithoutFeedback>

          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{ uri: `${env.API_URI}/api/v1${artist.image}` }}
            />
          </View>

          <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.droidSafeArea}>
              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                style={styles.container_description}
              >
                <TitleText style={styles.title_text}>{artist.name}</TitleText>
              </LinearGradient>

              <TouchableOpacity
                style={styles.favorite_container}
                onPress={() => this._toggleFavorite()}
              >
                {this._displayFavoriteImage()}
              </TouchableOpacity>

              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                style={styles.container_description}
              >
                <Text style={styles.default_text}>
                  {i18n.t('artist_detail_hours')}
                  {'  '}
                  <StyledText style={{ fontWeight: 'normal' }}>
                    {moment(artist.eventDate).format('HH:mm')}
                  </StyledText>
                </Text>
              </LinearGradient>

              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                style={styles.container_description}
              >
                <Text style={styles.default_text}>
                  {i18n.t('artist_detail_stage')}
                  {'  '}
                  <StyledText style={{ fontWeight: 'normal' }}>
                    {artist.eventPlace}
                  </StyledText>
                </Text>
              </LinearGradient>

              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                style={styles.container_description}
              >
                <Text style={styles.default_text}>
                  {i18n.t('artist_detail_biography')}{' '}
                  <StyledText style={styles.description_text}>
                    {artist.description}
                  </StyledText>
                </Text>
              </LinearGradient>

              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                style={styles.container_description}
              >
                <Text style={styles.default_text_lien}>
                  {i18n.t('artist_detail_links')}
                </Text>

                <View style={styles.socialartist}>
                  {artist.Links.map((link) => (
                    <SocialButton
                      key={link.uri}
                      type={link.type}
                      uri={link.uri}
                    ></SocialButton>
                  ))}
                </View>
              </LinearGradient>
            </SafeAreaView>
          </ScrollView>
        </LinearGradient>
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
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 190,
    position: 'relative',
  },
  container_description: {
    width: '96%',
    padding: 5,
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  title_text: {
    fontSize: 35,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    color: '#094E6F',
    textAlign: 'center',
  },
  favorite_container: {
    display: 'none' /*delete this if ou want add favorite feature*/,
    alignItems: 'center',
    marginBottom: 10,
  },
  description_text: {
    fontWeight: 'normal',
    color: '#094E6F',
    margin: 5,
    lineHeight: 25,
  },
  default_text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    color: '#094E6F',
    lineHeight: 25,
  },
  default_text_lien: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    color: '#094E6F',
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
  socialartist: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },
  droidSafeArea: {
    height: '100%',
    flex:
      (Platform.OS === 'android' ? 1 : 0) ||
      (Dimensions.get('screen').height < 600 ? 1 : 0),
    backgroundColor: 'transparent',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    image: {
      width: '100%',
      height: 300,
      position: 'relative',
    },
    favorite_image: {
      width: 60,
      height: 60,
    },
    default_text: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'justify',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 15,
      marginBottom: 10,
      color: '#094E6F',
      lineHeight: 28,
    },
    default_text_lien: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginLeft: 20,
      marginRight: 5,
      marginTop: 25,
      marginBottom: 8,
      color: '#094E6F',
    },
  })
}

const mapStateToProps = (state) => {
  return {
    favoritesArtist: state.toggleFavorite.favoritesArtist,
  }
}
export default connect(mapStateToProps)(ArtistDetail)
