import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  Alert,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Dimensions,
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ComingSoon from '../../../../components/ComingSoon'
import Header2 from '../../../../components/Header2'
import { StyledText } from '../../../../components/StyledText'
import i18n from '../../../../translate/index.js'
import { MaterialIcons } from '@expo/vector-icons'
import { api_bouffe } from '../../../../lib/api_bouffe'

export default class Truck1Screen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      refreshing: false,
      coming: false,
      vendors: [],
      newVendorsItems: [],
      cartItems: [],
      basket: [],
    }
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming, vendors } = this.state
    try {
      const result = await api_bouffe.get('vendors')
      this.setState({
        vendors: result.data[0],
        loading: false,
        refreshing: false,
      })
      if (result.data.length === 0) {
        this.setState({ coming: true })
      } else {
        this.setState({ coming: false })
      }
      const newVendorsItems = this.state.vendors.items
        .map((item) => ({
          id: item.id,
          name: item.name,
          price: (item.price / 100).toFixed(2),
          available: item.available,
          qty: 0,
        }))
        .filter((item) => item.available === true) // clone the array and filter items available

      this.setState({ newVendorsItems: newVendorsItems })
    } catch (e) {
      console.log('erreur:', e)
      alert(i18n.t('error') + e)
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.getDataFromServer()
  }

  quantityHandler = (action, index) => {
    const newItems = this.state.newVendorsItems // clone the array

    let currentQty = newItems[index]['qty']

    if (action == 'more') {
      newItems[index]['qty'] = currentQty + 1
    } else if (action == 'less') {
      newItems[index]['qty'] = currentQty > 0 ? currentQty - 1 : 0
    }
    const panier = newItems
      .filter((item) => item.qty !== 0) //filter panier with items quantity's >0
      .map((item) => ({
        id: item.id,
        quantity: item.qty, //preparation for post request
      }))
    this.setState({ basket: panier })
    this.setState({ cartItems: newItems })
    return panier
  }

  subtotalPrice = () => {
    const { cartItems } = this.state
    if (cartItems) {
      return cartItems.reduce((sum, item) => sum + item.qty * item.price, 0)
    }
    return 0
  }

  verifAmount = (price) => {
    if (price === '0.00') {
      Alert.alert(
        i18n.t('alert_info_title'),
        i18n.t('foodtruck_alert_none_order'),
        [{ text: 'OK' }],
        { cancelable: false }
      )
    } else {
      this.props.navigation.navigate('Add Informations FT1', {
        price: price,
        items: this.state.basket,
        nameVendor: this.state.vendors.name,
      })
    }
  }

  render() {
    const { vendors, newVendorsItems, loading, refreshing, coming } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Back')
            }}
          >
            <Header2 bigtitle={i18n.t('coming_soon_title')} />
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
              this.props.navigation.navigate('Back')
            }}
          >
            <Header2 bigtitle={i18n.t('coming_soon_title')} />
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
                <ComingSoon />
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
              this.props.navigation.navigate('Back')
            }}
          >
            <Header2 bigtitle={vendors.name} />
          </TouchableWithoutFeedback>
          <SafeAreaView
            style={{
              backgroundColor: '#094E6F',
              flex: 1,
            }}
          >
            <LinearGradient
              style={{ height: '100%' }}
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 0,
                  borderColor: '#094E6F',
                }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate('Orders Food Truck 1')
                  }}
                >
                  <StyledText style={styles.select_order_text}>
                    {i18n.t('foodtruck_select_order')}
                  </StyledText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <FlatList
                  data={newVendorsItems}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => (
                    <>
                      <LinearGradient
                        start={[0, 1]}
                        end={[1, 0]}
                        colors={[
                          'rgb(198, 233, 250)',
                          'rgba(198, 233, 250, 0.6)',
                        ]}
                        style={styles.container_item}
                      >
                        <View style={styles.sub_container_item}>
                          <View style={styles.sub_container_item_left}>
                            <StyledText
                              numberOfLines={1}
                              style={styles.sub_container_item_left_title}
                            >
                              {item.name}
                            </StyledText>
                            <StyledText
                              numberOfLines={1}
                              style={styles.sub_container_item_left_text}
                            >
                              {item.price}€
                            </StyledText>
                          </View>
                          <View style={styles.sub_container_item_right}>
                            <View
                              style={styles.sub_container_item_right_quantity}
                            >
                              <TouchableOpacity
                                onPress={() =>
                                  this.quantityHandler('less', index)
                                }
                                style={{
                                  borderWidth: 1,
                                  borderColor: '#094E6F',
                                }}
                              >
                                <MaterialIcons
                                  name="remove"
                                  size={30}
                                  color="#094E6F"
                                />
                              </TouchableOpacity>
                              <View
                                style={{
                                  width: '30%',
                                  justifyContent: 'center',
                                }}
                              >
                                <StyledText
                                  style={{
                                    color: '#094E6F',
                                    fontSize: 17,
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.qty}
                                </StyledText>
                              </View>
                              <TouchableOpacity
                                onPress={() =>
                                  this.quantityHandler('more', index)
                                }
                                style={{
                                  borderWidth: 1,
                                  borderColor: '#094E6F',
                                }}
                              >
                                <MaterialIcons
                                  name="add"
                                  size={30}
                                  color="#094E6F"
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </LinearGradient>
                    </>
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
                      </StyledText>
                    </View>
                  }
                  ListFooterComponent={
                    <View style={{ marginBottom: 60 }}></View>
                  }
                />
                <View style={styles.tabtotal}>
                  <View style={styles.tabtotal_left}>
                    <StyledText style={styles.textleft}>
                      {i18n.t('foodtruck_total_price')}{' '}
                      {this.subtotalPrice().toFixed(2)} €
                    </StyledText>
                  </View>
                  <View style={styles.tabtotal_right}>
                    <TouchableOpacity
                      style={styles.pay_button}
                      onPress={() =>
                        this.verifAmount(this.subtotalPrice().toFixed(2))
                      }
                    >
                      <StyledText style={styles.textright}>
                        {i18n.t('foodtruck_buy')}
                      </StyledText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }
}

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
  tabtotal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#094E6F',
    padding: 10,
    flexDirection: 'row',
  },
  tabtotal_left: {
    width: '60%',
    justifyContent: 'center',
  },
  tabtotal_right: {
    width: '40%',
    justifyContent: 'center',
  },
  textleft: {
    width: '100%',
    fontSize: 22,
    color: 'white',
    textAlign: 'left',
  },
  textright: {
    width: '100%',
    color: '#0A3D60',
    textAlign: 'center',
    fontSize: 22,
  },
  pay_button: {
    backgroundColor: '#43B9D5',
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  select_order_text: {
    padding: 5,
    fontSize: 21,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    margin: '3%',
    padding: 5,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: '#094E6F',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
  },
  bottom_list_text: {
    padding: 5,
    fontSize: 17,
    textAlign: 'center',
    color: '#094E6F',
  },
  container_item: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    marginBottom: '2%',
    height: 70,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sub_container_item: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  sub_container_item_left: {
    alignSelf: 'center',
    width: '70%',
    paddingLeft: 5,
  },
  sub_container_item_left_title: {
    fontSize: 17,
    color: '#094E6F',
  },
  sub_container_item_left_text: {
    fontSize: 16,
    color: '#094E6F',
  },
  sub_container_item_right: {
    width: '30%',
    justifyContent: 'center',
  },
  sub_container_item_right_quantity: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
})
