import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Day from '../day'
import { getSelectedTheme } from '../../graph/store/reducers/theme'

const LegendRow = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  top: 135px;
  right: 70px;
`

const Degrees = styled.span`
  display: flex;
  flex-flow: row;
  margin: 10px;
`

class Legend extends React.Component {
  static defaultProps = {
    lessText: 'Less',
    moreText: 'More'
  }

  render() {
    const { colors } = this.props

    const { lessText, moreText } = this.props

    return (
      <LegendRow>
        <span>{lessText}</span>
        <Degrees>
          {colors.map((color, index) => (
            <Day color={color} showHover={false} key={index} />
          ))}
        </Degrees>
        <span>{moreText}</span>
      </LegendRow>
    )
  }
}
export default connect(state => {
  return {
    colors: getSelectedTheme(state).colors
  }
})(Legend)
