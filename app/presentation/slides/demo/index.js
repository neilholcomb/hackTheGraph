// Import React
import React from 'react'
import Graph from '../../graph'

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

export default class demoSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Graph />
      </Slide>
    )
  }
}
