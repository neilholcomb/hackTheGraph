const initialState = {
  loading: false,
  currentUser: false,
  failedToLoad: false,
  userData: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GRAPH_DATA_LOADING':
      return {
        ...state,
        loading: true,
        currentUser: false,
        failedToLoad: false
      }

    case 'GRAPH_DATA_LOADED':
      return {
        ...state,
        loading: false,
        currentUser: action.data.username,
        failedToLoad: false,
        userData: {
          ...state.userData,
          [action.data.username]: action.data.data
        }
      }

    case 'GRAPH_DATA_RESET_CURRENT_USER':
      return { ...state, currentUser: false, failedToLoad: false }

    case 'GRAPH_DATA_FAILED_TO_LOAD_USER':
      return {
        ...state,
        loading: false,
        failedToLoad: true,
        currentUser: action.data.username
      }

    default:
      return state
  }
}

export const getUserDataByDate = function({ GraphData }, date) {
  if (GraphData[username]) {
    return GraphData[username].date || 0
  }

  return 0
}

export const getCurrentUser = function({ GraphData }) {
  return GraphData.currentUser
}

export const isLoading = function({ GraphData }) {
  return !!GraphData.loading
}

export const didFailToLoad = function({ GraphData }) {
  return !!GraphData.failedToLoad
}
