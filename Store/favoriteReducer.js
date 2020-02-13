//FAVORI OR NOT ARTIST

const initialState = { favoritesArtiste: [] }

function ArtistFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteArtisteIndex = state.favoritesArtiste.findIndex(
        item => item.id === action.value.id
      )
      if (favoriteArtisteIndex !== -1) {
        // L'artiste est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesArtiste: state.favoritesArtiste.filter(
            (item, index) => index !== favoriteArtisteIndex
          ),
        }
      } else {
        // L'artiste n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state, //on copie le state car interdiction de le modifier direct
          favoritesArtiste: [...state.favoritesArtiste, action.value],
        }
      }
      return nextState || state
    default:
      return state
  }
}

export default ArtistFavorite
