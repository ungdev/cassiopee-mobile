import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Infos from './Screen/Infos.js'
import Transport from './Screen/Transport.js'
import Partenaires from './Screen/Partenaires.js'
import Reglement from './Screen/Reglement.js'

const TabNavigatorInfo = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Infos: {
        screen: Infos,
      },
      Transports: {
        screen: Transport,
      },
      Partenaires: {
        screen: Partenaires,
      },
      Règlement: {
        screen: Reglement,
      },
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 10,
          textAlign: 'center',
          padding: 0,
        },
        tabStyle: {
          witdh: '100%',
          padding: 0,
        },
        indicatorStyle: {
          backgroundColor: 'red',
          height: 2,
        },
      },
      tabBarPosition: 'top',
    }
  )
)

export default TabNavigatorInfo
