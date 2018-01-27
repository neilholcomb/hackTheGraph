// Import React
import React from 'react'
import styled from 'styled-components'
import HackedGraph from '../../components/hackedgraph';
//import Day from '../../components/day';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

const Banner = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin-top: -137px;
  margin-bottom: 50px;

  color: #fff;
  background-color: black;
  width: 100%;
  height: 70px;
`
const GitSpan = styled.span`
  position: relative;
  top: 4px;
  left: 0px
  margin-right: 0px;
  padding: 5px 10px;
`
const DancingSpan = styled.span`
  color: #fff
`

export default class DancingSlide extends React.Component {
  render() {
    return (
      <div>
        <Banner>
          <GitSpan>
          <img src="https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png" alt="git" width="60" height="60"/>
          </GitSpan>
          Hack the Graph
        </Banner>
        <div>
          <img src="https://i.stack.imgur.com/3Vhti.png" alt="avatar" width="232" height="232"/>
          <DancingSpan><h3>Dancing Colors</h3></DancingSpan>
        </div>
        <HackedGraph />
      </div>
    )
  }
}
