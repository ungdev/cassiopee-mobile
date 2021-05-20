import React, { Component } from 'react'
import { View } from 'react-native'
import FoodTruckNavigator from './FoodTruckNavigator'

class FoodTruckScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ width: '100%', height: '100%', resizeMode: 'center' }}>
          <FoodTruckNavigator />
        </View>
      </React.Fragment>
    )
  }
}

export default FoodTruckScreen
