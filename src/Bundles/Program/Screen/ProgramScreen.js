import React, { Component } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import Header from '../../../components/Header'
import ComingSoon from '../../../components/ComingSoon'
import { EventItem } from './EventItem'
import { api } from '../../../lib/api'
import i18n from '../../../translate/index'

class ProgramScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      refreshing: false,
      events: [],
      coming: true,
    }
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming } = this.state

    try {
      const result = await api.get('events')
      this.setState({ events: result.data, loading: false, refreshing: false })
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
    const { events, loading, refreshing, coming } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_program')} />
          <SafeAreaView
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
              <View style={{ paddingTop: 20 }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            </ImageBackground>
          </SafeAreaView>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_program')} />
          <SafeAreaView
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
              <ScrollView
                style={{ flex: 1 }}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={this.onRefresh}
                    tintColor={'white'}
                  />
                }
              >
                <ComingSoon />
              </ScrollView>
            </ImageBackground>
          </SafeAreaView>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_program')} />
          <SafeAreaView
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
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EventItem event={item} />}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={this.onRefresh}
                    tintColor={'white'}
                  />
                }
              />
            </ImageBackground>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }
}

export default ProgramScreen
