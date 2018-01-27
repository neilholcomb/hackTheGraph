// Import React
import React from 'react'
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
} from 'spectacle'

export default class CustomSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <HackedGraph />
      </Slide>
    )
  }
}
