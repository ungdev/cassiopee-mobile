import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
  RefreshControl,
  ScrollView,
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
    console.log('constructeur')
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming } = this.state
    console.log('getData')
    console.log('coming', coming)
    try {
      console.log('fetch')
      const result = await api.get('artists')
      console.log('result: ', result.data)
      this.setState({ artists: result.data, loading: false, refreshing: false })
      if (result.data.length === 0) {
        this.setState({ coming: true })
      } else {
        this.setState({ coming: false })
      }
      console.log('coming', coming)
    } catch (e) {
      console.log('erreur:', e)
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
          <Header bigtitle="Artistes" />
          <View style={{ paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <Header bigtitle="Artistes" />
          <ScrollView
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <ComingSoon />
          </ScrollView>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle="Artistes" />
          <View style={styles.main_container}>
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
                />
              }
            />
          </View>
        </React.Fragment>
      )
    }
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
})

export default ArtistsScreen
