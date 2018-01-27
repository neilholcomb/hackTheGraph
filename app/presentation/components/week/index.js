import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Day from '../day'
import { startOfWeek, addWeeks, addDays } from 'date-fns'
import { getWorkingYear } from '../../graph/store/reducers/hackedGraphData'

class Week extends React.Component {
  render() {
    const days = [0, 1, 2, 3, 4, 5, 6]
    const { weekNum, workingYear } = this.props
    const startOfWeekDate = startOfWeek(
      addWeeks(new Date(workingYear, 0, 0), weekNum)
    )

    return (
      <div>
        {days.map((day, index) => {
          return <Day startOfWeekDate={startOfWeekDate} day={day} key={index} />
        })}
      </div>
    )
  }
}
export default connect(state => {
  return {
    workingYear: getWorkingYear(state)
  }
})(Week)
