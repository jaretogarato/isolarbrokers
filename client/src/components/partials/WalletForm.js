import React, { Component } from 'react';
import axios from 'axios';
import { Header, Form, Button, Segment, Dropdown, Grid, Container, TextArea } from 'semantic-ui-react';
import { FullWidthDiv, OpenH3, USGButton } from '../../css/styledComponents';
// import { connect } from 'react-redux';
// import { addLead } from '../../actions/leads';
// import { flash } from '../../actions/flash';
// import { setFlash } from '../../actions/flash';
import CubesGold02 from '../../assets/images/cubes-gold-02.png';
import { inlineStyles } from '../../css/inlineStyles.js';
// import { titleOptions, phoneTypeOptions, stateOptions } from './FormOptions.js';
import { titleOptions } from './FormOptions.js';
import { withRouter } from 'react-router-dom';
import Img from './Img';


class WalletForm extends Component {
  state = { ethereum_address: '', balance: '' }

  handleSubmit = event => {
    event.preventDefault();
    const { title, first_name, last_name, phone, email } = this.state;
    const { dispatch, history } = this.props;

    // TODO: better error checking
    if (first_name === '' || last_name === '') {
      console.log('Please complete all fields');
    } else {
      axios.post('/api/leads', this.state)
      .then(function (res) {
        history.push('/success');
      })
      .catch( err => {
        console.log('Failed to add contact');
      });
    }
  }

  handleChange = event => {
    // use 'event' to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
    console.log(this.state);
  }

  handleOptionChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    // const options = event.target.options;
    this.setState({ [id]: value });
    console.log(event.target);
    console.log(event.target.value);
    // console.log(event.target.options);
    console.log(this.state);
  }

  render() {
    const { ethereum_address, balance } = this.state;

    return (
      <FullWidthDiv topColor='#fff' bottomColor='#ddd' id={4}>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Grid padded stackable>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Form.Field>
                    <input
                      id='ethereum_address'
                      placeholder='Ethereum Address'
                      required
                      value={ethereum_address}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={2}>
                  <Img src={CubesGold02} width={60} height={60} />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Form.Field>
                    <input
                      id='balance'
                      placeholder='Balance'
                      required
                      value={balance}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment basic textAlign='center'>
              <USGButton type='submit'>Submit</USGButton>
            </Segment>
          </Form>
        </Container>

      </FullWidthDiv>
    );
  }
}

export default withRouter(WalletForm);
