import React from 'react';
import styled from 'styled-components';
import Day from '../day';

class Week extends React.Component {
  render() {
    const days = [1,2,3,4,5,6,7];

    return (
      <div>
        {days.map( (day, index) => (
          <Day day={day} key={index} />
        ))}
      </div>
    );
  }
}
export default Week;