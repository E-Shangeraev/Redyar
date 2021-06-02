const initialState = {
  category: null,
}

const filter = (state = initialState, action) => {
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    }
  }
  return state
}

export default filter
