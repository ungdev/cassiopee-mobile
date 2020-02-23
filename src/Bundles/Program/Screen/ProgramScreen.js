import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native'
import Header from '../../../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import ComingSoon from '../../../components/ComingSoon'
import { EventItem } from './EventItem'
import { api } from '../../../lib/api'

class ProgramScreen extends Component {
  static navigationOptions = {
    drawerIcon: <Icon name="ios-timer" style={{ fontSize: 24 }} />,
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      refreshing: false,
      events: [],
      coming: true,
    }
    console.log('constructeur')
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming } = this.state
    console.log('getData')

    try {
      console.log('fetch')
      const result = await api.get('events')
      console.log('result: ', result.data)
      this.setState({ events: result.data, loading: false, refreshing: false })
      if (result.data.length === 0) {
        this.setState({ coming: true })
      } else {
        this.setState({ coming: false })
      }
    } catch (e) {
      console.log('erreur:', e)
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.getDataFromServer()
  }

  render() {
    const { events, loading, refreshing, coming } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <Header bigtitle="Programme" />
          <View style={{ paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <Header bigtitle="Programme" />
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
          <Header bigtitle="Programme" />
          <ScrollView style={styles.main_container}>
            <View style={styles.planning_container}>
              <Text style={styles.title}>Planning de la soirée</Text>
              <FlatList
                data={events}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <EventItem event={item} />}
                refreshControl={
                  <RefreshControl
                    //refresh control used for the Pull to Refresh
                    refreshing={refreshing}
                    onRefresh={this.onRefresh}
                  />
                }
              />
            </View>
          </ScrollView>
        </React.Fragment>
      )
    }
  }
}

export default ProgramScreen

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  planning_container: {
    width: '98%',
    alignSelf: 'center',
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
})
