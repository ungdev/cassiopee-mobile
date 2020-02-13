import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../../../components/Header'
import data from '../DataArtists'
import ArtistItem from '../ArtistItem'

class ArtistsScreen extends React.Component {
  _displayDetailForArtist = artist => {
    console.log('test 1 ', artist)
    this.props.navigation.navigate('ArtistDetail', { artist })
  }

  render() {
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
