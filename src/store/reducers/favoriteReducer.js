const initialState = { favoritesArtist: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteArtistIndex = state.favoritesArtist.findIndex(
        item => item.id === action.value.id
      )
      if (favoriteArtistIndex !== -1) {
        //suprresion
        nextState = {
          ...state,
          favoritesArtist: state.favoritesArtist.filter(
            (item, index) => index !== favoriteArtistIndex
          ),
        }
      } else {
        //ajouter
        nextState = {
          ...state,
          favoritesArtist: [...state.favoritesArtist, action.value],
        }
      }
      return nextState || state
    default:
      return state
  }
}

export default toggleFavorite
