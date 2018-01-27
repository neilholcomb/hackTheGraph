import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import styled from 'styled-components'
import Graph from './graph'

class GraphContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Graph />
      </Provider>
    )
  }
}
export default GraphContainer
