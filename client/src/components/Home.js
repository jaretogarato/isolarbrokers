import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
// import USGoldToken from '../assets/images/usg-token.png';
import StarSolarSymbol from '../assets/images/star-solar-symbol.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';
import MainPanelsBg from '../assets/images/main-panels-bg.jpg';
import CubesColored from '../assets/images/cubes-colored.png';
import LinesColored from '../assets/images/lines-three-colored.png';
import CubeGold from '../assets/images/cube-gold.png';
import ChartBitcoin from '../assets/images/chart-bitcoin.jpg';
import ChartEthereum from '../assets/images/chart-ethereum.jpg';
import ChartUSGold from '../assets/images/chart-usgold.jpg';
import GoldOnGradient from '../assets/images/gold-bar-on-gradient.png';
import CubeColoredB from '../assets/images/cube-colored-b.png';
import BuyKeepRedeem from '../assets/images/buy-keep-redeem-bg-wide.jpg';
import PaymentsAccepted from '../assets/images/payments-accepted.png';
import FincenLogoBlack from '../assets/images/fincen-logo-black.png';
// import BBBGray from '../assets/images/bbb-gray-400x.png';
import FincenGray from '../assets/images/fincen-gray-400x.png';
import WyomingGray from '../assets/images/wyoming-seal-gray-400x.png';
import GoldBarsHoriz from '../assets/images/gold-bars-horiz.jpg';
import IconBank from '../assets/images/icon-bank.png';
import IconCash from '../assets/images/icon-cash.png';
import IconCredit from '../assets/images/icon-credit.png';
import SolarPanelsBgWide from '../assets/images/mariana-proenca-1235961-unsplash-v02.jpg';
import SolarPanelsBgWide2 from '../assets/images/isolarbrokers-background2.jpg';

// USGInUSD in is master value for entire application
import {USGInUSD} from './partials/USGInUSD';

// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
// import { inlineStyles } from '../css/inlineStyles';
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

// import { Fade4 } from '../css/styledFadeDiv';
// import { EthereumChart } from './partials/EthereumChart';


class Home extends Component {

  state = { USGInUSD: 0.0, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  componentDidMount() {
    this.getEthereumPrice();
    console.log('usginusd:');
    console.log(USGInUSD);
    this.setState({ USGInUSD: USGInUSD });
  }

  getEthereumPrice = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/1027/?convert=USD')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let ep = data.data.quotes.USD.price;
        let e24ch = data.data.quotes.USD.percent_change_24h.toFixed(2);
        let usgeth = (USGInUSD / ep).toFixed(7);
        console.log('usgeth');
        console.log(usgeth);
        this.setState({
          ethereumPrice: ep,
          ethereum24hrChange: e24ch,
          USGInEthereum: usgeth,
        });
      });
  };

  render() {
    return (
      <Container fluid>
        <FullWidthBgDiv bgImage={SolarPanelsBgWide2} height='600px'>
          <Container style={styles.verticalcenterflex}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14}>
                  <OpenH2 color='white'>
                    You deserve great financing options.
                  </OpenH2>
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

        {/* <Grid divided>
          <Grid.Row columns='equal'>
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
          </Grid.Row>
        </Grid> */}

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9'>
          <Container>
            <OpenH3>
              <a href="/get-started/" alt="Get Started">
                Get a quote today.
              </a>
            </OpenH3>
            <Grid stackable>
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <FlexRowContainer>
                    {/* <div>
                      <Img src={BricksGold} width={127} height={80} mode='fit' alt="Gold bricks" />
                    </div> */}
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
                    {/* <div>
                      <Img src={InfinityBlue} width={127} height={80} mode='fit' alt="Infinity symbol" />
                    </div> */}
                    <OpenH4>
                      Make the switch.
                    </OpenH4>
                    <OpenP>
                      The price for home solar systems is half of what it was eight years ago. All the while utility prices have increased 20% since 2008 and are set to be up 3% next year.
                    </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column rows={2}>
                  <FlexRowContainer>
                <OpenP>
                Alcatra swine brisket, pig cupim pork chuck leberkas meatball ribeye.
                </OpenP>
                  </FlexRowContainer>
                </Grid.Column>
              </Grid.Row> */}
            </Grid>
          </Container>
        </FullWidthDiv>

        <FullWidthBgDiv bgImage={MainPanelsBg} minHeight='850px' id={3}>
          <Container>
            <HoverCenterDivWrap top='0'>
              <Fade bottom delay={10}>
                <HoverCenterDiv
                  bgImage={CubesColored}
                  height='300px'
                  top='-165px'
                />
              </Fade>
            </HoverCenterDivWrap>
            <HoverCenterDivWrap top='200px'>
              <Fade bottom delay={300}>
                <HoverCenterDiv
                  bgImage={LinesColored}
                  height='300px'
                  top='-165px'
                />
              </Fade>
            </HoverCenterDivWrap>

            <Grid padded stackable style={styles.pushedDown}>
              <Grid.Row columns='equal' stretched style={styles.orangeBorder} >
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  {/* <Fade bottom className='fade-flex'> */}
                  <Fade bottom style={{...styles.fadeFlex}}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          {/* <Img src={IconGoldBacked} width={120} height={77} mode='fill' /> */}
                          <Img src={IconCredit} width={120} height={120} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          Get the credit you deserve.
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <OpenP>
                            The government wants homeowners to switch to solar by offering a 30% Federal Tax credit for your solar system. We know how to make sure you get the most from your credits.
                          </OpenP>
                          {/* <OpenUl>
                            <OpenLi>
                              Buffalo rump short ribs bresaola pork chop
                            </OpenLi>
                            <OpenLi>
                              Landjaeger shoulder sausage ball tip beef ribs.
                            </OpenLi>
                            <OpenLi>
                              Cupim hamburger sirloin cow frankfurter.
                            </OpenLi>
                          </OpenUl> */}
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
                          {/* <Img src={IconStableValue} width={120} height={77} mode='fill' /> */}
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
                            {/* <OpenUl>
                              <OpenLi>
                                Swine spare ribs cupim shank, hamburger ham tail chuck
                              </OpenLi>
                              <OpenLi>
                                Jerky pancetta landjaeger ball tip short ribs.
                              </OpenLi>
                              <OpenLi>
                                Shankle shoulder brisket, hamburger pork loin turducken.
                              </OpenLi>
                            </OpenUl> */}
                          </div>
                        </BorderedDivBody>
                      </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
                <Grid.Column textAlign='center' style={styles.orangeBorder}>
                  <Fade bottom delay={400}>
                    <BorderedDiv>
                      <BorderedDivInnerWrapper>
                        <BorderedDivBody>
                          {/* <Img src={IconPerfectExit} width={120} height={77} mode='fill' /> */}
                          <Img src={IconCash} width={120} height={120} mode='fill' />
                        </BorderedDivBody>
                        <BorderedDivHead>
                          Sell your home twice as fast.
                        </BorderedDivHead>
                        <BorderedDivBody>
                          <div>
                            <OpenP>
                              Homes with solar systems sell twice as fast and for $25,000 more on average than comparable homes in the same neighborhoods.
                            </OpenP>
                            {/* <OpenUl>
                              <OpenLi>
                                American Eagle gold coins are real currency.
                              </OpenLi>
                              <OpenLi>
                                Tri-tip doner turkey meatball.
                              </OpenLi>
                              <OpenLi>
                                Short loin pork chop burgdoggen meatball bacon rump.
                              </OpenLi>
                            </OpenUl> */}
                          </div>
                        </BorderedDivBody>
                      </BorderedDivInnerWrapper>
                    </BorderedDiv>
                  </Fade>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <VerticalSpacer height='50px' /> */}
          </Container>
        </FullWidthBgDiv>

        {/* <FullWidthDiv topColor='#fff' bottomColor='#e9e9e9' id={4}>
          <Container>
            <Grid>
          <Grid.Row>
          <Grid.Column width={5}>
          <h1>&nbsp;</h1>
          <Fade bottom>
          <Img2 src={CubeGold} width='100%' />
          </Fade>
          </Grid.Column>
          <Grid.Column width={11}>
          <OpenH3 textAlign='left'>
          Bacon is Paramount
          </OpenH3>
          <Grid stackable>
          <Grid.Row columns='equal'>
          <Grid.Column>
          <OpenH4 textAlign='left'>Physical Loin</OpenH4>
          <HrOrange />
          <OpenP textAlign='left'>
          Bacon chicken andouille bresaola ribeye hamburger. Turkey pancetta kielbasa landjaeger corned beef, tri-tip prosciutto pork loin cupim ball tip alcatra spare ribs pork chop rump venison.
          </OpenP>
          </Grid.Column>
          <Grid.Column>
          <OpenH4 textAlign='left'>Fatback</OpenH4>
          <HrOrange />
          <OpenP textAlign='left'>
          Biltong short ribs jowl, bacon shoulder short loin jerky porchetta landjaeger.
          </OpenP>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column>
          <OpenP>
          Bacon ipsum dolor amet beef ribs shankle kevin venison buffalo pastrami sausage.
          </OpenP>
          </Grid.Column>
          </Grid.Row>
          </Grid>
          </Grid.Column>
          </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv> */}

        {/* <FullWidthDiv topColor='#fff' bottomColor='#fff' id={5}>
          <Container>
            <Grid padded>
          <Grid.Row>
          <Grid.Column>
          <OpenH3>
          The Power Of Bacon
          </OpenH3>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='equal'>
          <Grid.Column>
          <OpenH4>
          Bacon Bits
          </OpenH4>
          <HrOrange />
          <p />
          <Image src={ChartBitcoin} size='large' />
          </Grid.Column>
          <Grid.Column>
          <OpenH4>
          Apple Bacon
          </OpenH4>
          <HrOrange />
          <p />
          <Image src={ChartUSGold} size='large' />
          </Grid.Column>
          <Grid.Column>
          <OpenH4>
          Bacon Sauce
          </OpenH4>
          <HrOrange />
          <p />
          <Image src={ChartEthereum} size='large' />
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column width={16}>
          <FullWidthDiv topColor='#63cdf6' bottomColor='#3c86a3' padTopAndBottom='20px' padLeftAndRight='15%'>
          <OpenH5 color='#fff'>
          Burgdoggen beef shoulder turducken bresaola jerky alcatra jowl ribeye fatback shank ham sirloin. Turducken ground round filet mignon rump, burgdoggen hamburger pork loin doner meatball pig alcatra.
          </OpenH5>
          </FullWidthDiv>
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={12} >
          <OpenH4>
          Shankle turducken capicola brisket bresaola, chicken pastrami. Tongue boudin fatback, ball tip bacon filet mignon strip steak pancetta bresaola t-bone spare ribs ground round short loin.
          </OpenH4>
          </Grid.Column>
          <Grid.Column width={2} />
          </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv> */}

        {/* <FullWidthDiv topColor='#fff' bottomColor='#efefef' id={6}>
          <DividerGrayGrad>
            <Segment basic>
          <Fade right delay={10}>
          <Img src={CubeColoredB} width={160} height={130} marginTop={50} />
          </Fade>
            </Segment>
          </DividerGrayGrad>
          <Container>
            <Grid stackable>
          <Grid.Row>
          <Grid.Column width={8}>
          <OpenH3 style={styles.padTopB} >
          Solid Bacon...
          </OpenH3>
          <HrOrange />
          <Fade>
          <Image src={GoldBarsHoriz} fluid />
          </Fade>
          <OpenH4>
          Chicken hamburger kielbasa brisket, turkey meatloaf landjaeger jowl pastrami beef ribs shoulder ribeye.
          </OpenH4>
          <OpenP>
          Chicken hamburger kielbasa brisket, turkey meatloaf landjaeger jowl pastrami beef ribs shoulder ribeye.
          </OpenP>
          <OpenP>
          Chicken hamburger kielbasa brisket, turkey meatloaf landjaeger jowl pastrami beef ribs shoulder ribeye.
          </OpenP>
          <OpenP>
          Chicken hamburger kielbasa brisket, turkey meatloaf landjaeger jowl pastrami beef ribs shoulder ribeye.
          </OpenP>
          </Grid.Column>

          <Grid.Column width={8}>
          <OpenH3 style={styles.padTopB}>
          Solid Bacon.
          </OpenH3>
          <HrOrange />

          <Grid stackable>
          <Grid.Row columns='equal'>
          <Grid.Column>
          <FullWidthDiv topColor='#ccc' bottomColor='#eee' padTopAndBottom='20px' padLeftAndRight='10%' height='350px'>
          <OpenP>
          <Image src={FincenGray} centered size='tiny' />
          <br /><br />
          <strong>Registered:</strong><br />
          Chicken hamburger kielbasa brisket, turkey meatloaf landjaeger.
          </OpenP>
          </FullWidthDiv>
          </Grid.Column>
          <Grid.Column>
          <FullWidthDiv topColor='#ccc' bottomColor='#eee' padTopAndBottom='20px' padLeftAndRight='10%' height='350px'>
          <OpenP>
          <Image src={WyomingGray} centered size='tiny' />
          <br /><br />
          <strong>Licensed:</strong><br />
          Chicken hamburger kielbasa brisket, turkey meatloaf landjaeger.
          </OpenP>
          </FullWidthDiv>
          </Grid.Column>
          <Grid.Column>
          <FullWidthDiv topColor='#ccc' bottomColor='#eee' padTopAndBottom='20px' padLeftAndRight='10%' height='350px'>
          </FullWidthDiv>
          </Grid.Column>
          </Grid.Row>
          </Grid>

          </Grid.Column>
          </Grid.Row>
            </Grid>
          </Container>
        </FullWidthDiv> */}

        {/* <FullWidthBgDiv bgImage={BuyKeepRedeem} minHeight='600px' id={7}>
          <Container>
            <OpenH3 style={styles.padTop}>
          Buy bacon, Hold bacon, Spend bacon, Redeem bacon
            </OpenH3>
            <Grid>
          <Grid.Row>
          <Grid.Column width={7}>
          <OpenH4 textAlign='left'>
          B-B-Bacon
          </OpenH4>
          <HrOrange />
          <OpenP textAlign='left'>
          Short loin tongue pastrami pig turkey. Drumstick beef short loin alcatra ribeye frankfurter, strip steak beef ribs tongue pork meatloaf landjaeger.
          </OpenP>
          <OpenP textAlign='left'>
          Short loin tongue pastrami pig turkey. Drumstick beef short loin alcatra ribeye frankfurter, strip steak beef ribs tongue pork meatloaf landjaeger.
          </OpenP>
          <OpenP textAlign='left'>
          Short loin tongue pastrami pig turkey. Drumstick beef short loin alcatra ribeye frankfurter, strip steak beef ribs tongue pork meatloaf landjaeger.
          </OpenP>
          <OpenH4 textAlign='left'>
          Easy To Bacon
          </OpenH4>
          <HrOrange />
          <OpenP textAlign='left'>
          Short loin tongue pastrami pig turkey. Drumstick beef short loin alcatra ribeye frankfurter, strip steak beef ribs tongue pork meatloaf landjaeger.
          </OpenP>

          <OpenP textAlign='left'>
          Capicola pork belly venison rump salami, swine prosciutto pork. Meatloaf pancetta salami ground round sausage. Beef andouille rump sirloin drumstick. Chicken cupim salami, ham hock bacon jerky picanha ball tip pork chop shank tri-tip cow tail doner meatball.
          </OpenP>
          <OpenP textAlign='left'>
          Capicola pork belly venison rump salami, swine prosciutto pork. Meatloaf pancetta salami ground round sausage. Beef andouille rump sirloin drumstick. Chicken cupim salami, ham hock bacon jerky picanha ball tip pork chop shank tri-tip cow tail doner meatball.
          </OpenP>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={8}>
          Bacon
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column>
          <p>&nbsp;</p>
          </Grid.Column>
          </Grid.Row>
            </Grid>
          </Container>
        </FullWidthBgDiv> */}
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
}

export default Home;
