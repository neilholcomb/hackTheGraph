import React from 'react'
import { connect } from 'react-redux'
import GraphDataActions from './store/actions/graphData'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 440px;
  margin: 0 auto;
  background-color: #e0e0e0;
`

class UserNameInput extends React.Component {
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
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default connect(state => {})(UserNameInput)
