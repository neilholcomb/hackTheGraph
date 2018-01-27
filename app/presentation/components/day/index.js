import React from 'react'
import styled from 'styled-components'

const Pixel = styled.div`
  width: 11px;
  height: 11px;
  margin: 2px 1px;

  background-color: ${props => props.color}; 
  &:hover {
    background-color: ${props => props.showHover ? '#e2f25c' : props.color};
  }
`

class Day extends React.Component {

  static defaultProps = {
    showHover: true,
    color: '#eee'
  }

  render() {
    return (
     <Pixel color={this.props.color} showHover={this.props.showHover}/>
    );
  }
}
export default Day;