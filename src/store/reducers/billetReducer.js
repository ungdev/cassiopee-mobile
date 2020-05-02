const initialState = {
  billet: null,
}

function setBillet(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SET_BILLET':
      nextState = {
        ...state,
        billet: action.value,
      }
      return nextState || state
    default:
      return state
  }
}

export default setBillet
