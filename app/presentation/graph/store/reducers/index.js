import GraphData from './graphData'
import HackedGraphData from './hackedGraphData'

const initialState = {}

export default function RootReducer(state = initialState, action) {
  state = { ...state, GraphData: GraphData(state.GraphData, action) }
  state = {
    ...state,
    HackedGraphData: HackedGraphData(state.HackedGraphData, action)
  }

  return state
}
