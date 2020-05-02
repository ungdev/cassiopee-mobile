const initialState = {
  vestiaire: null,
}

function setVestiaire(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SET_VESTIAIRE':
      nextState = {
        ...state,
        vestiaire: action.value,
      }
      return nextState || state
    default:
      return state
  }
}

export default setVestiaire
