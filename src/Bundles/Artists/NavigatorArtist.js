import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ArtistsScreen from './Screen/ArtistsScreen'
import ArtistDetail from './Screen/ArtistDetail'
import i18n from '../../translate/index'

const NavigatorArtist = createStackNavigator(
  {
    ArtistsScreen: {
      screen: ArtistsScreen,
      navigationOptions: () => ({
        headerShown: false,
        title: i18n.t('menu_artist'),
      }),
    },
    ArtistDetail: {
      screen: ArtistDetail,
      navigationOptions: () => ({
        headerShown: false,
        title: '',
      }),
    },
  },
  { initialRouteName: 'ArtistsScreen' }
)

export default createAppContainer(NavigatorArtist)
