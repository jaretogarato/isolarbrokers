import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
import StarSolarSymbol from '../assets/images/star-solar-symbol.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';
import MainPanelsBg from '../assets/images/home-sec02-bg-02.jpg';
import Sun from '../assets/images/sun.png';
import SunTwo from '../assets/images/sun-2.png';
import CubeGold from '../assets/images/cube-gold.png';
import ChartBitcoin from '../assets/images/chart-bitcoin.jpg';
import ChartEthereum from '../assets/images/chart-ethereum.jpg';
import ChartUSGold from '../assets/images/chart-usgold.jpg';
import GoldOnGradient from '../assets/images/gold-bar-on-gradient.png';
import CubeColoredB from '../assets/images/cube-colored-b.png';
import GoldBarsHoriz from '../assets/images/gold-bars-horiz.jpg';
import IconBank from '../assets/images/icon-bank.png';
import IconCash from '../assets/images/icon-cash.png';
import IconCredit from '../assets/images/icon-credit.png';
import SolarPanelsBgWide2 from '../assets/images/isolarbrokers-background2.jpg';

// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
import '../css/react-reveal.css';
import '../css/mailchimp.css';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  Img2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH1, OpenH2, OpenH3, OpenH4, OpenH5, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenUl, OpenLi,
  BorderedDiv, BorderedDivHead, BorderedDivBody, BorderedDivInnerWrapper,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange, HrWhite,
  USGButton,
} from '../css/styledComponents';

// https://www.react-reveal.com/examples/
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';
// import Bounce from 'react-reveal/Bounce';
// import Slide from 'react-reveal/Slide';
// import Reveal from 'react-reveal/Reveal'; // custom css
// import Flash from 'react-reveal/Flash';
// import HeadShake from 'react-reveal/HeadShake';
// import Pulse from 'react-reveal/Pulse';

class Home extends Component {

  state = { USGInUSD: 0.0, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };


  render() {
    return (
      <Container fluid>
        <FullWidthBgDiv bgImage={SolarPanelsBgWide2} height='600px'>
          <Container style={styles.verticalcenterflex}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH1 color='white'>
                    {/* You deserve great financing options. */}
                    Official sponsor of the Indiana Pacers in 2020.
                  </OpenH1>
                  <VerticalSpacer height={50} />
                  <OpenH4 color='white'>
                    You deserve stellar financing options that will reward your investment by granting you the maximum tax credit available where you live. With multiple financing options, you could get your custom solar system with zero money down. We pledge to help you maximize your cost savings and return. <br /><br />
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9'>
          <Container style={ styles.padLgTopBottom }>
            <OpenH3>
              <a href="/contact/" alt="contact" style={{ textDecoration:'underline' }}>
                Contact us and request a quote today.
              </a>
            </OpenH3>
            <Grid stackable>
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <FlexRowContainer>
                    <OpenH4>
                      A great investment.
                    </OpenH4>
                    <OpenP>
                      Investing in solar is the greatest investment opportunity of your lifetime. You’ll make an immediate 90% return going solar versus the 25% return for the 2017 Dow Jones Industrial Average.
                    </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
                <Grid.Column>
                  <FlexRowContainer>
                    <OpenH4>
                      Make the switch.
                    </OpenH4>
                    <OpenP>
                      The price for home solar systems is half of what it was eight years ago. All the while utility prices have increased 20% since 2008 and are set to be up 3% next year.
                    </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={MainPanelsBg} minHeight='850px' id={3}>
          <Container>
            <HoverCenterDivWrap top='0'>
              <Fade bottom delay={10}>
                <HoverCenterDiv
                  bgImage={Sun}
                  height='240px'
                  top='-144px'
                />
              </Fade>
            </HoverCenterDivWrap>
            <HoverCenterDivWrap top='200px'>
              <Fade top delay={300}>
                <HoverCenterDiv
                  bgImage={SunTwo}
                  height='298px'
                  top='-195px'
                />
              </Fade>
            </HoverCenterDivWrap>

            <Grid padded stackable style={styles.pushedDown}>
              <Grid.Row columns='equal' stretched style={styles.orangeBorder} >
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  <Fade bottom style={{...styles.fadeFlex}}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          <Img src={IconCredit} width={120} height={120} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          Get the credit you deserve.
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <OpenP>
                            The government wants homeowners to switch to solar by offering a 30% Federal Tax credit for your solar system. We know how to make sure you get the most from your credits.
                          </OpenP>
                        </BorderedDivBody>
                      </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  <Fade bottom delay={200}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          <Img src={IconBank} width={120} height={120} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          Add unparalleled value to your home.
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <div>
                            <OpenP>
                              For every dollar you invest in a solar system, your home value will instantly increase by $1.85. No other home improvement can promise that high of a return.
                            </OpenP>
                          </div>
                        </BorderedDivBody>
                      </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv>
        <Footer />
      </Container>
    );
  }
}

const styles = {
  image50tall: {
    width: 'auto',
    height: '50px',
  },
  noPadOrMargin: {
    padding: 0,
    margin: 0,
  },
  goldBorder: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#f8da1d',
  },
  pushedDown: {
    position: 'relative',
    transform: 'translateY(300px)',
    paddingBottom: '300px',
  },
  padTop: {
    paddingTop: '30px',
  },
  padTopB: {
    paddingTop: '70px',
  },
  fullWidth: {
    width: '100%',
  },
  orangeBorder: {
    borderColor: 'orange',
    borderWidth: '0',
    borderStyle: 'solid',
  },
  fadeFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalcenterflex: {
    display: 'flex',
  },
  underline: {
    textDecoration: 'underline',
  },
  padLgTopBottom: {
    paddingTop: '70px',
    paddingBottom: '100px',
  },
}

export default Home;
