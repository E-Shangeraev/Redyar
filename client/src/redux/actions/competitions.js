export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const setCompetitions = items => ({
  type: 'SET_COMPETITIONS',
  payload: items,
})

export const getCompetitions = request => async dispatch => {
  const data = await request('/api/competitions')
  dispatch(setLoaded(false))
  dispatch(setCompetitions(data))
}
