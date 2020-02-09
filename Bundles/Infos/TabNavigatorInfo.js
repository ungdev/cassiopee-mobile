import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Infos from './Screen/Infos.js'
import Navettes from './Screen/Navettes.js'
import Partenaires from './Screen/Partenaires.js'
import Reglement from './Screen/Reglement.js'

const TabNavigatorInfo = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Infos: {
        screen: Infos,
      },
      Navettes: {
        screen: Navettes,
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
          fontSize: 9,
          textAlign: 'center',
        },
        tabStyle: {
          witdh: 100,
        },
      },
    }
  )
)

export default TabNavigatorInfo
