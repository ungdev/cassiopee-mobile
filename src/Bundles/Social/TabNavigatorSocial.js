import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Facebook from './Screen/Facebook'
import Instagram from './Screen/Instagram'
import Twitter from './Screen/Twitter'

const TabNavigatorSocial = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Facebook,
      Twitter,
      Instagram,
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 10,
          textAlign: 'center',
        },
        indicatorStyle: {
          backgroundColor: 'red',
          height: 2,
        },
        tabStyle: {
          witdh: 100,
        },
      },
      tabBarPosition: 'top',
    }
  )
)

export default TabNavigatorSocial
