import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import Footer from './partials/Footer';
import SubmitForm from './partials/SubmitForm';
import Fade from 'react-reveal/Fade';
// import USGoldToken from '../assets/images/usg-token.png';
import ISolarSymbol from '../assets/images/sun-3.png';

import SolarPanelsBgWide2 from '../assets/images/isolarbrokers-background2.jpg';
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
        <HeroHeader bgImage={SolarPanelsBgWide2}>
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
                <HhImageContainer bgImage={ISolarSymbol} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <Grid padded stackable>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <OpenH3>
                To get a complete understanding of your solar needs, please send us an email. iSolar Brokers will contact you to schedule an appointment with a solar expert.
              </OpenH3>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns>
            <Grid.Column width={2} />
            <Grid.Column width={12}>
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5xMaO3ODuVcF4n9X_MU1BDCzUMoraQc294FYn0yjZI--9Dw/viewform?embedded=true" width="640" height="753" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
              <iframe src="http://bit.ly/2AUUAzk" width="640" height="753" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
        {/* <SubmitForm /> */}
        <Footer />
      </Container>
    );
  }
}

export default GetStarted;
