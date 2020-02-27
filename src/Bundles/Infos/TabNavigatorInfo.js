import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Infos from './Screen/Infos'
import Transports from './Screen/Transports'
import Partenaires from './Screen/Partenaires'
import Reglement from './Screen/Reglement'

const TabNavigatorInfo = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Infos,
      Transports,
      Partenaires,
      Règlement: {
        screen: Reglement,
      },
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

export default TabNavigatorInfo
