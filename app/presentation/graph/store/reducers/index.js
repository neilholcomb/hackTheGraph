import GraphData from './graphData'

const initialState = {}

export default function RootReducer(state = initialState, action) {
  state = { ...state, GraphData: GraphData(state.GraphData, action) }

  return state
}
