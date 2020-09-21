import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native'
import PartenairesItem from '../PartenairesItem'
import ComingSoon from '../../../components/ComingSoon'
import { api } from '../../../lib/api'
import i18n from '../../../translate/index'

class Partenaires extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      refreshing: false,
      partners: [],
      coming: true,
    }
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming } = this.state
    try {
      const result = await api.get('partners')
      this.setState({
        partners: result.data,
        loading: false,
        refreshing: false,
      })
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
    const { partners, loading, refreshing, coming } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <View style={{ paddingTop: 20 }}>
            <ActivityIndicator size="large" color="white" />
          </View>
        </React.Fragment>
      )
    }
    if (coming) {
      return (
        <React.Fragment>
          <ScrollView
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
        </React.Fragment>
      )
    } else {
      return (
        <FlatList
          data={partners}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PartenairesItem partenaire={item} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
              tintColor={'white'}
            />
          }
        />
      )
    }
  }
}

export default Partenaires
