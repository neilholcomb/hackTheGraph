import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getWorkingYear } from '../../graph/store/reducers/hackedGraphData'
import { getThemes, getSelectedTheme } from '../../graph/store/reducers/theme'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
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

class GenerateRandomData extends React.Component {
  randomData = () => {
    this.props.dispatch({
      type: 'GRAPH_DATA_GENERATE_RANDOM_DATA_FOR_YEAR',
      data: {
        year: this.props.year
      }
    })
  }

  render() {
    return (
      <Button outline size="sm" onClick={this.randomData}>
        Generate Random Data
      </Button>
    )
  }
}
let ConnectedGenerateRandomData = connect(state => {
  return {
    year: getWorkingYear(state)
  }
})(GenerateRandomData)

class ThemePicker extends React.Component {
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

  selectTheme = theme => {
    this.props.dispatch({
      type: 'THEME_SELECT_THEME',
      data: theme
    })
  }

  render() {
    const { themes, theme } = this.props
    let { isOpen } = this.state

    return (
      <ButtonDropdown isOpen={isOpen} toggle={this.toggleMenu}>
        <DropdownToggle caret outline size="sm">
          {theme.title}
        </DropdownToggle>
        <DropdownMenu>
          {Object.keys(themes).map(key => {
            return (
              <DropdownItem
                key={key}
                onClick={() => {
                  this.selectTheme(key)
                }}
              >
                {themes[key].title}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
const ConnectedThemePicker = connect(state => {
  return {
    themes: getThemes(state),
    theme: getSelectedTheme(state)
  }
})(ThemePicker)

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  margin: 0 41px 10px 41px;
`

class ComposedGraph extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <ConnectedThemePicker />
          <ConnectedGenerateRandomData />
          <ConnectedYearSelector />
        </Row>
        <HackedGraph />
      </div>
    )
  }
}

export default ComposedGraph
