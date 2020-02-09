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
          fontSize: 15,
          textAlign: 'center',
        },
        tabStyle: {
          witdh: 100,
        },
      },
    }
  )
)

export default TabNavigatorSocial
