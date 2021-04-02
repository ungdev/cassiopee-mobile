import * as React from 'react'
import { Button, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import i18n from '../../translate/index'
import FoodTruckChoice from './Screen/FoodTruckChoice'
import Truck1Screen from './Screen/Truck1Screen'
import Truck2Screen from './Screen/Truck2Screen'
const Device = require('react-native-device-detection')

const Stack = createStackNavigator()

export default function FoodTruckNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FoodTruckChoice">
        <Stack.Screen
          options={{ headerShown: false }}
          name="FoodTruckChoice"
          component={FoodTruckChoice}
        />
        <Stack.Screen
          options={{ headerTitleAlign: 'center' }}
          name="Food Truck 1"
          component={Truck1Screen}
        />
        <Stack.Screen
          options={{ headerTitleAlign: 'center' }}
          name="Food Truck 2"
          component={Truck2Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
