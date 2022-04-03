import { createStore } from 'redux'
import toggleFavorite from './reducers/favoriteReducer'
import setBillet from './reducers/billetReducer'
import setVestiaire from './reducers/vestaireReducer'
import setkeyToken from './reducers/tokenReducer'
import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage"

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export default createStore(
  persistCombineReducers(rootPersistConfig, {
    toggleFavorite,
    setBillet,
    setVestiaire,
    setkeyToken,
  })
)
