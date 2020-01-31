import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './navigation/DrawerNavigator.js';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  Main: { screen: DrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
