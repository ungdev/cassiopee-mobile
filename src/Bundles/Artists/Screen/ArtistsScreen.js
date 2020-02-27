import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  ImageBackground,
} from 'react-native'
import Header from '../../../components/Header'
import ComingSoon from '../../../components/ComingSoon'
import { ArtistItem } from '../components/ArtistItem'
import { api } from '../../../lib/api'

class ArtistsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      refreshing: false,
      artists: [],
      coming: true,
    }
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming } = this.state
    try {
      const result = await api.get('artists')

      this.setState({ artists: result.data, loading: false, refreshing: false })
      if (result.data.length === 0) {
        this.setState({ coming: true })
      } else {
        this.setState({ coming: false })
      }
    } catch (e) {
      console.log('erreur:', e)
      alert(
        'Une erreur est survenue avec le serveur. Merci de réessayer dans quelques instants. Code erreur : ' +
          e
      )
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.getDataFromServer()
  }
  render() {
    const { artists, loading, refreshing, coming } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <ImageBackground
            source={require('../../../images/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <Header bigtitle="Artistes" />
            <View style={{ paddingTop: 20 }}>
              <ActivityIndicator size="large" color="white" />
            </View>
          </ImageBackground>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <Header bigtitle="Artistes" />
          <ImageBackground
            source={require('../../../images/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <ScrollView
              style={{ flex: 1 }}
              refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                  tintColor={'white'}
                />
              }
            >
              <ComingSoon />
            </ScrollView>
          </ImageBackground>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle="Artistes" />
          <ImageBackground
            source={require('../../../images/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <FlatList
              data={artists}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ArtistItem
                  artist={item}
                  displayDetailForArtist={() =>
                    this.props.navigation.navigate('ArtistDetail', {
                      artist: item,
                    })
                  }
                />
              )}
              refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                  tintColor={'white'}
                />
              }
            />
          </ImageBackground>
        </React.Fragment>
      )
    }
  }
}

export default ArtistsScreen
