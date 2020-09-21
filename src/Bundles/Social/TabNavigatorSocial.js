import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Facebook from './Screen/Facebook'
import Instagram from './Screen/Instagram'
import Twitter from './Screen/Twitter'
import YouTube from './Screen/YouTube'
const Device = require('react-native-device-detection')

const TabNavigatorSocial = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Facebook,
      Instagram,
      YouTube,
      Twitter,
    },
    {
      tabBarOptions: {
        activeTintColor: '#bd945a',
        inactiveTintColor: 'whitesmoke',
        style: {
          backgroundColor: '#171530',
        },
        labelStyle: {
          fontSize: Device.isTablet ? 14 : 10,
          textAlign: 'center',
          padding: 0,
        },
        tabStyle: {
          witdh: '100%',
          padding: 0,
          height: 55,
        },
        indicatorStyle: {
          backgroundColor: '#bd945a',
          height: 3,
        },
      },
      tabBarPosition: 'bottom',
    }
  )
)

export default TabNavigatorSocial
