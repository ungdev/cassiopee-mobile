import { createStore } from 'redux'
import toggleFavorite from './reducers/favoriteReducer'
import setBillet from './reducers/billetReducer'
import setVestiaire from './reducers/vestaireReducer'
import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export default createStore(
  persistCombineReducers(rootPersistConfig, {
    toggleFavorite,
    setBillet,
    setVestiaire,
  })
)
