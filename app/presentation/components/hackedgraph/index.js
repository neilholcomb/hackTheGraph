import React from 'react'
import styled from 'styled-components'
import Week from '../week'
import Grid from '../grid'
import Legend from '../legend'

const Graph = styled.div`
  width: 840px;
  height: 174px;
  border: 1px #d1d5da solid;
  border-radius: 3px;
  position: relative;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 11px;
  line-height: 1.5;
  color: #24292e;
  background-color: #fff; 
`

const Months = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 18px;
  left: 69px;
  right: 69px;
  //background-color: red;
`

const Month = styled.div`
  &:first-child{
    padding-left: 15px;
  }

  &:last-child{
    padding-right: 15px;
  }
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

class HackedGraph extends React.Component {

  printMonths(startAt = 0) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    let monthsComponents = [];
    for (var i = 0; i < months.length; i++)
    {
        const month = months[(startAt + i) % months.length];
        monthsComponents.push(
          <Month key={i}>
            {month}
          </Month>
        )
    }

    return monthsComponents
  }
    
  render() {
    const days = ['Mon', 'Wed', 'Fri'];

    const weeks = [];
    for(var i = 0; i <54; i++) {
      weeks.push(i);
    }

    return (
      <Graph>
        <Months>
          {this.printMonths(9)}
        </Months>
        <Days>
          {days.map((day, index) => (
            <Day key={index}>
              {day}
            </Day>
            ))}          
        </Days>
        <Legend />
        <Grid>
          {weeks.map((week, index) => (
            <Week key={index}/>
          ))} 
        </Grid>
     </Graph>
    );
  }
}
export default HackedGraph;