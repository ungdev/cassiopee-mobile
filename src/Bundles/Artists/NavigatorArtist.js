import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ArtistsScreen from './Screen/ArtistsScreen'
import ArtistDetail from './Screen/ArtistDetail'

const NavigatorArtist = createStackNavigator(
  {
    ArtistsScreen: {
      screen: ArtistsScreen,
      navigationOptions: () => ({
        headerShown: false,
        title: 'Artistes',
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
