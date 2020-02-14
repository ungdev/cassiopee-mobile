import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
  RefreshControl,
} from 'react-native'
import Header from '../../../components/Header'
import { ArtistItem } from '../components/ArtistItem'
import { api } from '../../../lib/api'

class ArtistsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, refreshing: false, artists: [] }
    console.log('constructeur')
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    console.log('getData')
    try {
      const test = await AsyncStorage.getItem('test')
    console.log('result from async :', test)

      console.log('fetch')
      const result = await api.get('artists')
      console.log('result: ', result.data)
      this.setState({ artists: result.data, loading: false, refreshing: false })
    } catch (e) {
      console.log('erreur:', e)
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.getDataFromServer()
  }
  render() {
    const { artists, loading, refreshing } = this.state
    if (loading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
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

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
})

export default ArtistsScreen
