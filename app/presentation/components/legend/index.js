import React from 'react';
import styled from 'styled-components';
import Day from '../day';

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
  };

  render() {
    const colors = [
      '#eee',
      '#c6e48b',
      '#7bc96f',
      '#239a3b',
      '#196127'
    ];

    const {lessText, moreText} = this.props

    return (
      <LegendRow>
        <span>{lessText}</span>
        <Degrees>
        {colors.map( (color, index) => (
          <Day color={color} key={index} />
        ))}
        </Degrees>
        <span>{moreText}</span>
      </LegendRow>
    );
  }
}
export default Legend;