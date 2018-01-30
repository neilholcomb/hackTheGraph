import GraphData from './graphData'
import HackedGraphData from './hackedGraphData'
import Theme from './theme'

const initialState = {}

export default function RootReducer(state = initialState, action) {
  state = {
    ...state,
    GraphData: GraphData(state.GraphData, action),
    HackedGraphData: HackedGraphData(state.HackedGraphData, action),
    Theme: Theme(state.Theme, action)
  }

  return state
}
