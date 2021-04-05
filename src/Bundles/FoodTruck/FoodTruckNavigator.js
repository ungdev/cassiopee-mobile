import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import i18n from '../../translate/index'
import FoodTruckChoice from './Screen/FoodTruckChoice'
import Truck1Screen from './Screen/Truck1Screen'
import Truck2Screen from './Screen/Truck2Screen'

const Stack = createStackNavigator()

export default function FoodTruckNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Back">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Back"
          component={FoodTruckChoice}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#0A3D60' },
            headerTitleStyle: {
              fontFamily: 'brigade-condensed-regular',
              fontSize: 25,
            },
          }}
          name="Food Truck 1"
          component={Truck1Screen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#0A3D60' },
          }}
          name="Food Truck 2"
          component={Truck2Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
