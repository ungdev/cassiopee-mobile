import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Facebook from './Screen/Facebook'
import Instagram from './Screen/Instagram'
import Twitter from './Screen/Twitter'
import YouTube from './Screen/YouTube'

const TabNavigatorSocial = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Facebook,
      YouTube,
      Twitter,
      Instagram,
    },
    {
      tabBarOptions: {
        activeTintColor: '#bd945a',
        inactiveTintColor: 'whitesmoke',
        style: {
          backgroundColor: '#171530',
        },
        labelStyle: {
          fontSize: 10,
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
