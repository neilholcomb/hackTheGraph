import React from 'react'
import { connect, Dispatch } from 'react-redux'
import GraphDataActions from './store/actions/graphData'

class Graph extends React.Component {
  state = {
    username: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUserEntered = e => {
    e.preventDefault()

    this.props.dispatch(
      GraphDataActions.getUserCommitHistory(this.state.username)
    )
  }

  render() {
    console.log('state ', this.state.username)
    return (
      <div>
        <label>Enter your GitHub username</label>
        <br />
        <form onSubmit={this.handleUserEntered}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default connect(state => {
  return {}
})(Graph)
