import React from 'react'
import styled from 'styled-components'

const Pixel = styled.div`
  width: 11px;
  height: 11px;
  margin: 2px 1px;

  background-color: ${props => props.color || '#eee'}; 
`

class Day extends React.Component {
  render() {
    return (
     <Pixel color={this.props.color} />
    );
  }
}
export default Day;