import React, { Component } from 'react';
import { Header, Container, Grid, Icon } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
// import USGoldToken from '../assets/images/usg-token.png';
import ISolarSymbol from '../assets/images/sun-3.png';

import CubesFiveGold from '../assets/images/cubes-five-gold.png';
import GoldCoinBgWide from '../assets/images/gold-coin-bg-wide-2.jpg';
import SolarPanelsBgWide from '../assets/images/mariana-proenca-1235961-unsplash-v02.jpg';
import MoneyCredit from '../assets/images/isolar-money-icon.png';
import SineWaves from '../assets/images/sine-waves.png';
import SolarPanelsBgWide2 from '../assets/images/isolarbrokers-background2.jpg';
import Footer from './partials/Footer';
import MainLinks from './partials/MainLinks';
import Fade from 'react-reveal/Fade';

// USGInUSD in is master value for entire application
import {USGInUSD} from './partials/USGInUSD';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenH5,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';
import Img from './partials/Img';

class OurPromise extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={SolarPanelsBgWide2}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  Solar is evolving.
                </HhH1>
                <HhH2>
                  This is our promise to bring this evolution to you.
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={ISolarSymbol} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={1}>
          <Container>
            <OpenH3>
              25 Year Guarantee.
            </OpenH3>
            <OpenH3>
              You deserve a better warranty than just a simple manufacturer warranty that doesn’t cover the costs of service or production deficiencies. With the iSolar Brokers Guarantee, not only will we fix your system if it stops working, <em>we will compensate you while the system is not operating. </em>
            </OpenH3>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#ddd' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={9}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <OpenH3 textAlign='left'>You deserve the credit.</OpenH3>
                        {/* <HrOrange /> */}
                        <OpenH5 textAlign='left'>
                          It is your hard-earned money paying for the installation of a solar system on your home. You deserve to take full advantage of any tax credits and rebates available to you. We pledge to always point you towards the best solution for you– the choice that will maximize the return on your investment.
                        </OpenH5>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={7}>
                  <h1>&nbsp;</h1>
                  <Fade bottom>
                    <Img src={MoneyCredit} width={315} height={263} marginTop='-30px' />
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided>
              {/* <Grid.Row columns='equal'>
                <Grid.Column>
                  <OpenH5 textAlign='center'>
                USG tokens are a gold coin-backed blockchain cryptocurrency issued and administered via smart contracts on Ethereum, a blockchain-based distributed computing platform.
                  </OpenH5>
                  <OpenH5 textAlign='center'>
                USG tokens are a direct representation of gold American Eagle one ounce coins issued by the United States Mint.
                  </OpenH5>
                </Grid.Column>
                <Grid.Column>
                  <OpenH5 textAlign='center'>
                USG tokens may be redeemed at any time at a 1-to-1 token-to-coin ratio.
                  </OpenH5>
                  <OpenH5 textAlign='center'>
                US Gold Currency LLC is located on the "Crypto Plain" in Wyoming.
                  </OpenH5>
                  <OpenH5 textAlign='center'>
                The State of Wyoming is the leader in transformational legislation providing an unparalleled business landscape to cryptocurrency and crypto-commodity infrastructure companies within these emerging sectors.
                  </OpenH5>
                </Grid.Column>
              </Grid.Row> */}
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={SolarPanelsBgWide} height={400}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH3 color='white'>
                    You deserve great financing options.
                  </OpenH3>
                  <VerticalSpacer height={50} />
                  <OpenH4 color='white'>
                    You deserve stellar financing options that will reward your investment by granting you the maximum tax credit available where you live. With multiple financing options, you could get your custom solar system with zero-money down. We pledge to help you maximize your cost savings and return. <br /><br />
                  </OpenH4>
                </Grid.Column>
                <Grid.Column width={1} />
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#fff' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 textAlign='left'>You deserve peace of mind</OpenH3>
                  <HrOrange />
                  <Grid padded stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        <OpenP textAlign='left'>
                          With many systems you won’t know your system is down until you get your utility bill and it has doubled, or tripled. Many companies can take 3 months to repair your system, but because we are monitoring your system’s performance we will know there is a problem before you. We pledge to service your solar system as quickly as possible and cut you a check for every day it’s down.
                        </OpenP>
                      </Grid.Column>
                      {/* <Grid.Column>
                        <OpenP textAlign='left'>
                          US Gold Currency is designed to provide you easy and timely access to the gold asset backing our token should you decide to redeem your USG tokens instead of trading on one of the many exchanges in the cryptocurrency sector.
                        </OpenP>
                        </Grid.Column>
                        <Grid.Column>
                        <OpenP textAlign='left'>
                          US Gold Currency provides insured shipping, via UPS Parcel Pro. As you probably know, it's easy to exchange gold for cash — what you do with your physical American Eagle one ounce gold coins is up to you.
                        </OpenP>
                      </Grid.Column> */}
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Img src={SineWaves} width='100%' height={200} mode='fill' />
        </FullWidthDiv>

        <FullWidthDiv topColor='#efefef' bottomColor='#cfcfcf' id={4}>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <OpenH3 textAlign='left'>You deserve a quick installation.
                  </OpenH3>

                  <Grid padded stackable>
                    <Grid.Row columns='equal'>
                      <Grid.Column>
                        {/* <OpenH4 textAlign='left'>
                          Location &amp; Credentials
                        </OpenH4> */}
                        {/* <HrOrange /> */}
                        <OpenP textAlign='left'>
                          You deserve to have the quickest installation possible so you can begin immediately saving money and increasing your home value. From the first phone call to clean energy, Freedom Forever is twice as fast as the other guys. We pledge to do everything possible to make your installation as smooth and speedy as possible.
                        </OpenP>
                      </Grid.Column>
                      {/* <Grid.Column>
                        <OpenH4 textAlign='left'>
                          The Token &amp; Benefits
                        </OpenH4>
                        <HrOrange />
                        <OpenP textAlign='left'>
                          The USG Token is a gold coin-backed blockchain currency token (cryptocurrency) issued and administered via smart contracts on Ethereum, a blockchain-based distributed computing platform.
                        </OpenP>
                        <OpenP textAlign='left'>
                          Each USG token is a direct representation of an American Eagle one ounce gold coin, issued by the United State Mint, and held in vault storage reserves by US Gold Currency.
                        </OpenP>
                        <OpenP textAlign='left'>
                          Additionally, each USG Token may be redeemed at any time at a 1-to-1 token-to-coin ratio!
                        </OpenP>
                      </Grid.Column> */}
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv>

        <Footer />
      </Container>
    );
  }
}

const styles = {
  padTop: {
    paddingTop: '30px',
  },
}

export default OurPromise;
