/* eslint-disable indent */
const initialState = {
  items: [],
  isLoaded: false,
}

const merch = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MERCH':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export default merch
