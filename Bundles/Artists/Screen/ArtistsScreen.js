import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import DrawerTrigger from '../../../components/DrawerTrigger'
import Icon from 'react-native-vector-icons/Feather'
import { withNavigation } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'
import Header from '../../../components/Header'
import data from '../DataArtists'

class ArtistItem extends React.Component {
  render() {
    const { displayDetailForArtist, artist } = this.props
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => displayDetailForArtist(artist)}
      >
        <ImageBackground style={styles.image} source={artist.poster} />
        <Text style={styles.title_text}>{artist.title}</Text>
      </TouchableOpacity>
    )
  }
}

class ArtistsScreen extends React.Component {
  static navigationOptions = {
    title: 'Artistes',
    headerStyle: {
      backgroundColor: 'red',
      height: 95,
    },
    headerLeft: () => <DrawerTrigger />,
  }

  _displayDetailForArtist = artist => {
    console.log('test 1 ', artist)
    this.props.navigation.navigate('ArtistDetail', { artist })
  }

  render() {
    return (
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
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  item_container: {
    height: 190,
  },
  image: {
    width: '100%',
    height: 190,
    position: 'relative',
  },
  title_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
})

export default ArtistsScreen
