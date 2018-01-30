import { set } from 'lodash'
import { addDays, startOfYear, format } from 'date-fns'

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

    case 'GRAPH_DATA_INCREMENT_COUNT_FOR_DATE':
      let count = getCountForDate({ GraphData: state }, +action.data.date)
      const username = getCurrentUser({ GraphData: state })

      if (count >= 4) {
        count = 0
      } else {
        count = count + 1
      }

      let newState = { ...state }

      set(
        newState,
        `userData.${username}.${+action.data.date}.hackCount`,
        count
      )

      return newState

    case 'GRAPH_DATA_GENERATE_RANDOM_DATA_FOR_YEAR':
      return generateRandomDataForYear(state, action.data.year)

      return state
    default:
      return state
  }
}

export const getUserDataByDate = function(state, date) {
  const { GraphData } = state
  const userData = GraphData.userData[getCurrentUser(state)]

  if (userData) {
    return (
      userData[date] || {
        githubCount: 0,
        hackCount: 0
      }
    )
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

export const getCountForDate = function(state, date) {
  const data = getUserDataByDate(state, date)

  let count = data.githubCount + data.hackCount

  if (count > 4) count = 4

  return count
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const generateRandomDataForYear = function(state, year) {
  let username = getCurrentUser({ GraphData: state })

  let userData = state.userData[username]
  let randomUserData = { ...userData }

  let firstDayOfYear = startOfYear(new Date(year, 2, 2))

  let days = Array.from(Array(365).keys())

  days.forEach(day => {
    let key = format(addDays(firstDayOfYear, day), 'YYYYMMDD')

    if (!randomUserData[key]) {
      randomUserData[key] = {
        githubCount: 0,
        hackCount: 0
      }
    }

    randomUserData[key].hackCount = getRandomInt(5)
  })

  return {
    ...state,
    userData: {
      ...state.userData,
      [username]: randomUserData
    }
  }
}
