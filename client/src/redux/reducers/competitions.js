/* eslint-disable indent */
const initialState = {
  items: [],
  isLoaded: false,
}

const competitions = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMPETITIONS':
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

export default competitions
