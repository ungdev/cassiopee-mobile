import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Infos from './Screen/Infos'
import Transports from './Screen/Transports'
import Partenaires from './Screen/Partenaires'
import Reglement from './Screen/Reglement'
import i18n from '../../translate/index'
const Device = require('react-native-device-detection')

const TabNavigatorInfo = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Infos: {
        screen: Infos,
        navigationOptions: {
          title: i18n.t('info_menu_info'),
        },
      },
      Transports: {
        screen: Transports,
        navigationOptions: {
          title: i18n.t('info_menu_transport'),
        },
      },
      Partenaires: {
        screen: Partenaires,
        navigationOptions: {
          title: i18n.t('info_menu_partner'),
        },
      },
      Reglement: {
        screen: Reglement,
        navigationOptions: {
          title: i18n.t('info_menu_rule'),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#C6E9FA',
        inactiveTintColor: 'whitesmoke',
        style: {
          backgroundColor: '#094E6F',
        },
        labelStyle: {
          fontSize: Device.isTablet ? 20 : 16,
          textAlign: 'center',
          padding: 0,
          fontFamily: 'brigade-condensed-regular',
        },
        tabStyle: {
          witdh: '100%',
          padding: 0,
          height: 55,
        },
        indicatorStyle: {
          backgroundColor: '#C6E9FA',
          height: 3,
        },
      },
      tabBarPosition: 'bottom',
    }
  )
)

export default TabNavigatorInfo
