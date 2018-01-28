import React from 'react'
import { connect } from 'react-redux'
import { getWorkingYear } from '../../graph/store/reducers/hackedGraphData'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import HackedGraph from '../hackedgraph'

class YearSelector extends React.Component {
  state = {
    isOpen: false
  }

  toggleMenu = () => {
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  selectYear = year => {
    this.props.dispatch({
      type: 'HACKED_GRAPH_DATA_SELECT_YEAR',
      data: year
    })
  }

  render() {
    let { isOpen } = this.state

    const currentYear = new Date().getFullYear() - 1

    const years = Array.from(Array(15).keys()).map(year => {
      return currentYear - year
    })

    return (
      <ButtonDropdown isOpen={isOpen} toggle={this.toggleMenu}>
        <DropdownToggle caret color="primary" size="sm">
          {this.props.year}
        </DropdownToggle>
        <DropdownMenu>
          {years.map(year => (
            <DropdownItem
              key={year}
              onClick={() => {
                this.selectYear(year)
              }}
            >
              {year}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
const ConnectedYearSelector = connect(state => {
  return {
    year: getWorkingYear(state)
  }
})(YearSelector)

class ComposedGraph extends React.Component {
  render() {
    return (
      <div>
        <ConnectedYearSelector />
        <HackedGraph />
      </div>
    )
  }
}

export default ComposedGraph
