import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addDays, format } from 'date-fns'
import { getCountForDate } from '../../graph/store/reducers/graphData'
import { getSelectedTheme } from '../../graph/store/reducers/theme'

const Pixel = styled.div`
  width: 11px;
  height: 11px;
  margin: 2px 1px;

  background-color: ${props => props.color};
  cursor: pointer;
`

class Day extends React.Component {
  static defaultProps = {
    color: '#eee'
  }

  nextColor = () => {
    this.props.dispatch({
      type: 'GRAPH_DATA_INCREMENT_COUNT_FOR_DATE',
      data: {
        date: this.props.date
      }
    })
  }

  render() {
    let { count, colors, color } = this.props

    if (count) {
      color = colors[count]
    }

    return (
      <Pixel
        onClick={this.nextColor}
        color={color}
      />
    )
  }
}
export default connect((state, ownProps) => {
  const { day, startOfWeekDate } = ownProps
  const date = format(addDays(startOfWeekDate, day), 'YYYYMMDD')

  return {
    count: getCountForDate(state, date),
    date,
    colors: getSelectedTheme(state).colors
  }
})(Day)
