import React from 'react'
import styled from 'styled-components'

const GridSpace = styled.div`
  width: 703px;
  height: 93px;
  margin: 20px auto;

  display:flex;
  flex-flow: row;

  //background-color: orange;
  //border: 1px solid #000; 
`

class Grid extends React.Component {
  render() {
    return (
     <GridSpace>
       {this.props.children}
     </GridSpace>
    );
  }
}
export default Grid;