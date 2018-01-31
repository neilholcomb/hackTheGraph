// Import React
import React from 'react'
import styled from 'styled-components'
import HackedGraph from '../../graph'

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
} from 'spectacle'

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
  top: 2px;
  left: 0px
  margin-right: 0px;
  padding: 5px 10px;
`
const TitleSpan = styled.span`
  color: #fff;
`

export default class PacManSlide extends React.Component {
  render() {
    return (
      <div>
        <Banner>
          <GitSpan>
            <img
              src="https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png"
              alt="git"
              width="60"
              height="60"
            />
          </GitSpan>
          Hack the Graph
        </Banner>
        <div>
          <img
            src="https://i.pinimg.com/736x/b6/ab/f8/b6abf87582f0fe11a934d3013d1707cd--classic-video-man-birthday.jpg"
            alt="avatar"
            width="232"
            height="232"
          />
          <TitleSpan>
            <h1>Pac-Man</h1>
          </TitleSpan>
        </div>
        <HackedGraph />
      </div>
    )
  }
}
