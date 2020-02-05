import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  DrawerNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);
