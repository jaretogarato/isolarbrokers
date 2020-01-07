import React, { Component } from "react";
import { Header, Container, Grid } from "semantic-ui-react";
import TopBg from "../assets/images/us-gold-header-bg.jpg";
import Footer from "./partials/Footer";
import SubmitForm from "./partials/SubmitForm";
import Fade from "react-reveal/Fade";
// import Mailchimp from 'react-mailchimp-form';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ISolarSymbol from "../assets/images/sun-3.png";
import SolarPanelsBgWide2 from "../assets/images/isolarbrokers-background2.jpg";
import {
  HeroHeader,
  HhInnerContainer,
  HhTextContainer,
  HhImageContainer,
  HhH1,
  HhH2,
  FullWidthDiv,
  FullWidthBgDiv,
  FlexRowContainer,
  OpenH3,
  OpenH4,
  OpenP,
  OpenPSmall,
  OpenSpanGreen,
  OpenSpanRed,
  BorderedDiv,
  BorderedDivHead,
  BorderedDivBody,
  HoverCenterDiv,
  HoverCenterDivWrap,
  DividerGrayGrad,
  VerticalSpacer,
  HrOrange,
  USGButton
} from "../css/styledComponents";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5, border: "1px solid gray" }}
        ref={node => (name = node)}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 , border: "1px solid gray"}}
        ref={node => (email = node)}
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5, border: "1px solid gray" }}
        ref={node => (email = node)}
        type="textarea"
        rows="4"
        cols="50"
        placeholder="Message"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5, border: "1px solid gray", background: '#efefef' }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

class GetStarted extends Component {
  // state = { loaded: false };
  state = { emailValue: '', fNameValue: '', lNameValue: ''};

  render() {
    const url =
      "//isolarbrokers.us12.list-manage.com/subscribe/post?u=cf9ce23a0bf215fb1dac481fa&amp;id=672a32aaf5";





    return (
      <Container fluid>
        <HeroHeader bgImage={SolarPanelsBgWide2}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>You’re on your way to a bright future!</HhH1>
                {/* <HhH2>
                  We'd love to hear from you.
                </HhH2> */}
              </HhTextContainer>
              <Fade>
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
                To get a complete understanding of your solar needs, please send
                us an email. iSolar Brokers will contact you to schedule an
                appointment with a solar expert.
              </OpenH3>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={2} />
            <Grid.Column width={12}>

              <form action="https://isolarbrokers.us12.list-manage.com/subscribe/post?u=cf9ce23a0bf215fb1dac481fa&amp;id=672a32aaf5" method="POST" noValidate>
                <input type="hidden" name="u" value="cf9ce23a0bf215fb1dac481fa"/>
                <input type="hidden" name="id" value="672a32aaf5"/>
                <label htmlFor='MERGE0'>
                  Email
                  <input
                    type="email"
                    name="EMAIL"
                    id="MERGE0"
                    value={this.state.emailValue}
                    onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                    autoCapitalize="off"
                    autoCorrect="off"
                  />
                </label>
                <label htmlFor='MERGE1'>
                  First name
                  <input
                    type="text"
                    name="FNAME"
                    id="MERGE1"
                    value={this.state.fNameValue}
                    onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                  />
                </label>
                <label htmlFor='MERGE2'>
                  Last name
                  <input
                    type="text"
                    name="LNAME"
                    id="MERGE2"
                    value={this.state.lNameValue}
                    onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                  />
                </label>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                  <label htmlFor="b_name">Name: </label>
                  <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                  <label htmlFor="b_email">Email: </label>
                  <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                  <label htmlFor="b_comment">Comment: </label>
                  <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
              </form>


              {/* <div>
                <MailchimpSubscribe
                  url={url}
                  render={({ subscribe, status, message }) => (
                <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
                />
                  )}
                />
              </div> */}

            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>

        <Footer />
      </Container>
    );
  }
}

export default GetStarted;
