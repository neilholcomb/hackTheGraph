import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DateFns from 'date-fns'
import Week from '../week'
import { getWorkingYear } from '../../graph/store/reducers/hackedGraphData'

const GridSpace = styled.div`
  width: 703px;
  height: 93px;
  margin: 20px auto;
  display: flex;
  flex-flow: row;
`

const Days = styled.div`
  text-align: right;
  position: absolute;
  top: 20x;
  left: 26px;
`
const Day = styled.div`
  margin: 9px;
`

class Grid extends React.Component {
  render() {
    const { workingYear } = this.props

    const weeks = []
    for (var i = 0; i < 54; i++) {
      weeks.push(i)
    }

    return (
      <GridSpace>
        {weeks.map((week, index) => <Week weekNum={week} key={week} />)}
      </GridSpace>
    )
  }
}
export default connect(state => {
  return {
    workingYear: getWorkingYear(state)
  }
})(Grid)
