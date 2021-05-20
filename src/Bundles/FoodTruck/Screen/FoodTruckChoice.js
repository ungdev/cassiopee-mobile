import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  View,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import ComingSoon from '../../../components/ComingSoon.js'
import Header from '../../../components/Header.js'
import { TitleText } from '../../../components/TitleText.js'
import { api_bouffe } from '../../../lib/api_bouffe.js'
import i18n from '../../../translate/index'

class FoodTruckChoice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      refreshing: false,
      coming: false,
      vendors1: null,
      vendors2: null,
    }
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    const { coming, vendors } = this.state
    try {
      const result = await api_bouffe.get('vendors')
      this.setState({
        vendors1: result.data[0].name,
        vendors2: result.data[1].name,
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
    const { vendors1, vendors2, loading, coming, refreshing } = this.state
    if (loading) {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_foodtruck')} />
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
          <Header bigtitle={i18n.t('menu_foodtruck')} />
          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../assets/bottom_ocean.png')}
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
          <Header bigtitle={i18n.t('menu_foodtruck')} />
          <SafeAreaView
            style={{
              backgroundColor: '#0A3D60',
              flex: 1,
            }}
          >
            <LinearGradient
              style={{ height: '100%' }}
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../assets/bottom_ocean.png')}
                />
              </View>

              <ScrollView
                style={{ height: '100%' }}
                contentContainerStyle={styles.main_container}
                refreshControl={
                  <RefreshControl
                    //refresh control used for the Pull to Refresh
                    refreshing={refreshing}
                    onRefresh={this.onRefresh}
                    tintColor={'white'}
                  />
                }
              >
                <TitleText style={styles.tipText}>
                  {i18n.t('foodtruck_choose')}
                </TitleText>
                <TouchableOpacity
                  style={styles.button}
                  title="Go to TRUCK 1"
                  onPress={() => this.props.navigation.navigate('Food Truck 1')}
                >
                  <TitleText style={styles.text}>{vendors1}</TitleText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  title="Go to TRUCK 2"
                  onPress={() => this.props.navigation.navigate('Food Truck 2')}
                >
                  <TitleText style={styles.text}>{vendors2}</TitleText>
                </TouchableOpacity>
              </ScrollView>
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }
}

export default FoodTruckChoice

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#0A3D60',
  },
  main_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    margin: '5%',
    padding: 5,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: '#094E6F',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
  },
  tipText: {
    fontSize: 28,
    color: 'white',
    marginBottom: '10%',
  },
  containerBottomImage: {
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
})
