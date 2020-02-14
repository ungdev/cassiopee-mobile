import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'
import Header from '../../../components/Header'
import data from '../DataArtists'
import ArtistItem from '../ArtistItem'

class ArtistsScreen extends React.Component {
  constructor(props) {
    super(props)
    //True to show the loader
    this.state = { refreshing: true }
    //Running the getData Service for the first time
    this.GetData()
  }

  GetData = () => {
    //Service to get the data from the server to render
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          refreshing: false,
          //Setting the data source for the list to render
          dataSource: responseJson,
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  onRefresh() {
    //Clear old data of the list
    this.setState({ dataSource: [] })
    //Call the Service to get the latest data
    this.GetData()
  }

  _displayDetailForArtist = artist => {
    console.log('test 1 ', artist)
    this.props.navigation.navigate('ArtistDetail', { artist })
  }

  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
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
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <ArtistItem
                artist={item}
                displayDetailForArtist={this._displayDetailForArtist}
              />
            )}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
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
