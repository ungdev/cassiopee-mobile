import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native'
import Header from '../../../components/Header'
import ComingSoon from '../../../components/ComingSoon'
import { ArtistItem } from '../components/ArtistItem'
import { api } from '../../../lib/api'
import i18n from '../../../translate/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
      alert(i18n.t('error') + e)
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
          <SafeAreaProvider style={{ flex: 1, backgroundColor: '#171530' }}>
            <ImageBackground
              source={require('../../../../assets/background_cassiopee_modif.png')}
              style={{ width: '100%', height: '100%' }}
            >
              <Header bigtitle={i18n.t('menu_artist')} />
              <View style={{ paddingTop: 20 }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            </ImageBackground>
          </SafeAreaProvider>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_artist')} />
          <SafeAreaProvider style={{ flex: 1, backgroundColor: '#171530' }}>
            <ImageBackground
              source={require('../../../../assets/background_cassiopee_modif.png')}
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
          </SafeAreaProvider>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_artist')} />
          <SafeAreaProvider
            style={{
              flex:
                (Platform.OS === 'android' ? 1 : 0) ||
                (Dimensions.get('screen').height < 600 ? 1 : 0),
              backgroundColor: '#0A3D60',
            }}
          >
            <ImageBackground
              source={require('../../../../assets/background_cassiopee_modif.png')}
              style={{ width: '100%', height: '100%' }}
            >
              <FlatList
                data={artists}
                keyExtractor={(item) => item.id}
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
          </SafeAreaProvider>
        </React.Fragment>
      )
    }
  }
}

export default ArtistsScreen
