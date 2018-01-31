// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
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
import PacManSlide from './slides/pac-man-slide'
import TetrisSlide from './slides/tetris-slide'
import styled from 'styled-components'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

//Import images

import htgBgPng from '../assets/htg-bg-blur.png'
import kyloRenBg from '../assets/kylo-ren-bg.jpg'
import codeBg from '../assets/graph-black-hole.jpg'
import dancingBg from '../assets/rainbow.png'
import trollBg from '../assets/troll-bg-blur.jpg'
import pacmanBg from '../assets/pac-man-bg.png'
import tetrisBg from '../assets/tetris-bg.png'
import stackPng from '../assets/stack.png'

// Require CSS
require('normalize.css')
import '../assets/style.css'
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
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} textSize={12} fit bold>
              (TOP SECRET)
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} textSize={12} fit bold>
              by Ren and Stimpy
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} textSize={12} fit bold>
              erm... I mean...
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} textSize={12} fit bold>
              Neil and Pete
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <StackHeading>
            <Heading size={1} textColor="secondary">
              Our Stack
            </Heading>
          </StackHeading>
          <img src={stackPng} alt="stage" width={'100%'} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <CustomSlide />
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
          bgImage={kyloRenBg}
          bgDarken={0.0}
          transition={['fade']}
          bgColor="primary"
        >
          <KyloSlide />
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
        <Slide
          bgImage={pacmanBg}
          bgDarken={0.4}
          transition={['fade']}
          bgColor="primary"
        >
          <PacManSlide />
        </Slide>
        <Slide
          bgImage={tetrisBg}
          bgDarken={0.7}
          transition={['fade']}
          bgColor="primary"
        >
          <TetrisSlide />
        </Slide>
      </Deck>
    )
  }
}
