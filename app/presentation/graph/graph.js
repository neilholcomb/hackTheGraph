import React from 'react'
import { connect } from 'react-redux'
import * as GraphDataReducer from './store/reducers/graphData.js'
import Loader from 'react-loader-spinner'
import UserNameInput from './userNameInput'
import UserNotFound from './404'
import ComposedGraph from '../components/composedGraph'

class Graph extends React.Component {
  render() {
    const { isLoading, currentUser, failedToLoadUser } = this.props

    if (isLoading) {
      return <Loader type="Bars" color="#00BFFF" height="100" width="100" />
    }

    if (failedToLoadUser) {
      return <UserNotFound user={currentUser} />
    }

    if (currentUser) {
      return <ComposedGraph />
    }

    return (
      <div>
        <UserNameInput />
      </div>
    )
  }
}

export default connect(state => {
  return {
    currentUser: GraphDataReducer.getCurrentUser(state),
    isLoading: GraphDataReducer.isLoading(state),
    failedToLoadUser: GraphDataReducer.didFailToLoad(state)
  }
})(Graph)
