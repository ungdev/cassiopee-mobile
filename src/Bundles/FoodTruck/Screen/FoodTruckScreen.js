import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import Header from '../../../components/Header2'
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
            <FoodTruckNavigator />
          </View>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default FoodTruckScreen
