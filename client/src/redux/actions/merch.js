export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const setMerch = items => ({
  type: 'SET_MERCH',
  payload: items,
})

export const getMerch = request => async dispatch => {
  const data = await request('http://localhost:3000/api/merch')
  dispatch(setLoaded(false))
  dispatch(setMerch(data))
}
