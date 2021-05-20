import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FoodTruckChoice from './Screen/FoodTruckChoice'
import Truck1Screen from './Screen/FoodTruck1/Truck1Screen'
import OrdersFoodTruck1 from './Screen/FoodTruck1/OrdersFoodTruck1'
import PageInfoUserOrder1 from './Screen/FoodTruck1/PageInfoUserOrder1'
import WebView from './Components/WebView'
import OrdersFoodTruck2 from './Screen/FoodTruck2/OrdersFoodTruck2'
import PageInfoUserOrder2 from './Screen/FoodTruck2/PageInfoUserOrder2'
import Truck2Screen from './Screen/FoodTruck2/Truck2Screen'

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
          options={{ headerShown: false }}
          name="Food Truck 1"
          component={Truck1Screen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Food Truck 2"
          component={Truck2Screen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Orders Food Truck 1"
          component={OrdersFoodTruck1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Orders Food Truck 2"
          component={OrdersFoodTruck2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Add Informations FT1"
          component={PageInfoUserOrder1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Add Informations FT2"
          component={PageInfoUserOrder2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WebView"
          component={WebView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
