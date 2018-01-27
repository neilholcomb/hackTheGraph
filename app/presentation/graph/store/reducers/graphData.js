const initialState = {
  loading: false,
  loaded: false,
  userData: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GRAPH_DATA_LOADING':
      return { ...state, loading: true }

    case 'GRAPH_DATA_LOADED':
      return {
        ...state,
        loading: false,
        loaded: true,
        userData: {
          ...state.userData,
          [action.data.username]: action.data.data
        }
      }

    default:
      return state
  }
}

export const getUserDataByDate = function({ GraphData }, username, date) {
  if (GraphData[username]) {
    return GraphData[username].date || 0
  }

  return 0
}
