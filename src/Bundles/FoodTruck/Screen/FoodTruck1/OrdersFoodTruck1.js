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
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { api_bouffe } from '../../../../lib/api_bouffe'
import i18n from '../../../../translate/index'
import { LinearGradient } from 'expo-linear-gradient'
import ZeroCommande from '../../Components/ZeroCommande'
import { OrderItem } from '../../Components/OrderItem'
import Header2 from '../../../../components/Header2'
import { StyledText } from '../../../../components/StyledText'

class OrdersFoodTruck1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      refreshing: false,
      orders: [],
      coming: true,
    }
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming } = this.state
    try {
      const result = await api_bouffe.get('vendors/HQTF7C/orders')

      this.setState({ orders: result.data, loading: false, refreshing: false })
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
    const { orders, loading, refreshing, coming } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Food Truck 1')
            }}
          >
            <Header2 bigtitle={i18n.t('foodtruck_select_order')} />
          </TouchableWithoutFeedback>
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
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Food Truck 1')
            }}
          >
            <Header2 bigtitle={i18n.t('foodtruck_select_order')} />
          </TouchableWithoutFeedback>
          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../../assets/bottom_ocean.png')}
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
                <ZeroCommande />
              </ScrollView>
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Food Truck 1')
            }}
          >
            <Header2 bigtitle={i18n.t('foodtruck_select_order')} />
          </TouchableWithoutFeedback>
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
                  source={require('../../../../../assets/bottom_ocean.png')}
                />
              </View>
              <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <OrderItem
                    order={item.id}
                    display={item.displayId}
                    firstname={item.firstname}
                    lastname={item.lastnameTrimmed}
                    status={item.status}
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
                ListHeaderComponent={
                  <View>
                    <StyledText style={styles.bottom_list_text}>
                      {i18n.t('foodtruck_swipe_down')}
                      {'\n'}
                      {i18n.t('foodtruck_go_foodtruck')}
                    </StyledText>
                  </View>
                }
              />
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }
}

export default OrdersFoodTruck1

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
  bottom_list_text: {
    padding: 5,
    fontSize: 17,
    textAlign: 'center',
    color: '#094E6F',
  },
})
