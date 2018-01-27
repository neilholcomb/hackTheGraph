const initialState = {
  workingYear: new Date().getFullYear() - 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HACKED_GRAPH_DATA_SELECT_YEAR':
      return {
        ...state,
        workingYear: action.data
      }

    default:
      return state
  }
}

export const getWorkingYear = function({ HackedGraphData }, date) {
  return HackedGraphData.workingYear
}
