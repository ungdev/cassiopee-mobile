// Store/Reducers/favoriteReducer.js

const initialState = { favoritesArtiste: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteArtisteIndex = state.favoritesArtiste.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesArtiste: state.favoritesArtiste.filter( (item, index) => index !== favoriteArtisteIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state, //on copie le state car interdiction de le modifier direct
          favoritesArtiste: [...state.favoritesArtiste, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite
