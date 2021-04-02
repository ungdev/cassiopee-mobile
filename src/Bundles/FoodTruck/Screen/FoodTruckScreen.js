import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import Header from '../../../components/Header'
import FoodTruckNavigator from '../FoodTruckNavigator'
import i18n from '../../../translate/index'

class FoodTruckScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#0A3D60',
          }}
        >
          <View style={{ width: '100%', height: '100%', resizeMode: 'center' }}>
            <Header bigtitle={i18n.t('menu_foodtruck')} />
            <FoodTruckNavigator />
          </View>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default FoodTruckScreen
