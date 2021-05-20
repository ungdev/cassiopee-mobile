import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import Header from '../../../components/Header'
import ComingSoon from '../../../components/ComingSoon'
import { ArtistItem } from '../components/ArtistItem'
import { api } from '../../../lib/api'
import i18n from '../../../translate/index'
import { LinearGradient } from 'expo-linear-gradient'

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
          <Header bigtitle={i18n.t('menu_artist')} />
          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={{ height: '100%', paddingTop: 20 }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_artist')} />
          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../assets/bottom_ocean.png')}
                />
              </View>
              <ScrollView
                style={{ height: '100%' }}
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
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_artist')} />
          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
              style={{ height: '100%' }}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../assets/bottom_ocean.png')}
                />
              </View>
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
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }
}

export default ArtistsScreen

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#0A3D60',
  },
  containerBottomImage: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '18%',
    width: '100%',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: (Dimensions.get('screen').height * 17) / 100,
    width: Dimensions.get('screen').width,
    resizeMode: 'cover',
  },
})
