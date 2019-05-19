import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import SubmitForm from './partials/SubmitForm';
import Fade from 'react-reveal/Fade';
// import WalkingLiberty from '../assets/images/walking-liberty-coin.png';
import USGoldToken from '../assets/images/usg-token.png';
import StarSolarSymbol from '../assets/images/star-solar-symbol.png';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad, VerticalSpacer,
  HrOrange,
  USGButton,
} from '../css/styledComponents';

class GetStarted extends Component {
  render() {
    return (
      <Container fluid>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  You’re on your way to a bright future!
                </HhH1>
                {/* <HhH2>
                  We'd love to hear from you.
                </HhH2> */}
              </HhTextContainer>
              <Fade>
                {/* <HhImageContainer bgImage={USGoldToken} /> */}
                <HhImageContainer bgImage={StarSolarSymbol} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <Grid padded>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              {/* <OpenH3>
                To get a complete understanding of your solar needs, please fill out the contact form below. Star Solar will contact you to schedule an appointment with a solar expert.
              </OpenH3> */}
              <OpenH3>
                To get a complete understanding of your solar needs, please send us an email. Star Solar will contact you to schedule an appointment with a solar expert.
              </OpenH3>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
        <OpenH3><a href="mailto:support@star.solar">support@star.solar</a></OpenH3>
        {/* <SubmitForm /> */}


        <Footer />
      </Container>
    );
  }
}

export default GetStarted;
