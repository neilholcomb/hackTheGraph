// Import React
import React from 'react'

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

//import CodeSlide from 'spectacle-code-slide';
//import prismjs from "prismjs"

import CustomSlide from './slides/custom-slide'
import KyloSlide from './slides/kylo-slide'
import HackerSlide from './slides/hacker-slide'
import DancingSlide from './slides/dancing-slide'
import TrollSlide from './slides/troll-slide'
import styled from 'styled-components'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

//Import images

import htgBgPng from '../assets/htg-bg-blur.png'
import kyloRenBg from '../assets/kylo-ren-bg.jpg'
import codeBg from '../assets/graph-black-hole.jpg'
import dancingBg from '../assets/rainbow.png'
import trollBg from '../assets/troll-bg-blur.jpg'
import stackPng from '../assets/stack.png'

// Require CSS
require('normalize.css')
import '../assets/style.css'
import '../assets/prism.css'
import 'bootstrap/dist/css/bootstrap.css'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'August Sans Reduced', //"Montserrat",
    secondary: 'Helvetica'
  }
)

const StackHeading = styled.div`
  margin-top: -200px;
  margin-bottom: 100px;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          bgImage={htgBgPng}
          bgDarken={0.8}
          transition={['zoom']}
          bgColor="primary"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Hack the Graph
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            (TOP SECRET)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <StackHeading>
            <Heading size={1} textColor="secondary">
              Our Stack
            </Heading>
          </StackHeading>
          <img src={stackPng} alt="stage" width={'100%'} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <CustomSlide />
        </Slide>
        <Slide
          bgImage={kyloRenBg}
          bgDarken={0.0}
          transition={['fade']}
          bgColor="primary"
        >
          <KyloSlide />
        </Slide>
        <Slide
          bgImage={codeBg}
          bgDarken={0.5}
          transition={['fade']}
          bgColor="primary"
          textColor="secondary"
        >
          <HackerSlide />
        </Slide>
        <Slide
          bgImage={dancingBg}
          bgDarken={0.5}
          transition={['fade']}
          bgColor="primary"
        >
          <DancingSlide />
        </Slide>
        <Slide
          bgImage={trollBg}
          bgDarken={0.7}
          transition={['fade']}
          bgColor="primary"
        >
          <TrollSlide />
        </Slide>
      </Deck>
    )
  }
}
