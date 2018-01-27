import React from 'react'
import { connect } from 'react-redux'
import notFoundImg from '../../assets/github_404.png'

class FailedToLoadUser extends React.Component {
  resetSearch = () => {
    this.props.dispatch({
      type: 'GRAPH_DATA_RESET_CURRENT_USER'
    })
  }

  render() {
    return (
      <div onClick={this.resetSearch}>
        <div>{this.props.user} could not be found on github</div>
        <img src={notFoundImg} />
      </div>
    )
  }
}

export default connect(state => {})(FailedToLoadUser)
