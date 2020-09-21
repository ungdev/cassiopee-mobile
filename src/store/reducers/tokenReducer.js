const initialState = {
  keyToken: null,
}

function setkeyToken(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SET_TOKEN':
      nextState = {
        ...state,
        keyToken: action.value,
      }
      return nextState || state
    default:
      return state
  }
}

export default setkeyToken
