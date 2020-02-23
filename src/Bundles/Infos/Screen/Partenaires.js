import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native'
import PartenairesItem from '../PartenairesItem'
import ComingSoon from '../../../components/ComingSoon'
import { api } from '../../../lib/api'

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
            <ActivityIndicator />
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
        <View style={styles.main_container}>
          <FlatList
            data={partners}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <PartenairesItem partenaire={item} />}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }
          />
        </View>
      )
    }
  }
}

export default Partenaires

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
})
