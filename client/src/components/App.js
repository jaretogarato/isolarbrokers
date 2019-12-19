import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import { NavSpacer } from '../css/styledComponents.js';
import Login from './Login';
import Register from './Register';
import AccountNew from './AccountNew';
import Flash from './Flash';
import Home from './Home';
import OurPromise from './OurPromise';
import Token from './Token';
import Contact from './Contact';
import Wallet from './Wallet';
import Redeem from './Redeem';
import Purchase from './Purchase';
import Resources from './Resources';
import Success from './Success';
import RegistrationPending from './RegistrationPending';
import Profile from './Profile';
import USMint from './USMint';
import Fincen from './Fincen';
import Dashboard from './Dashboard';
import Leads from './Leads';
import Users from './Users';
import ReactTrackDemo from './ReactTrackDemo';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import '../css/fonts.css';
import '../css/semantic-ui/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NavSpacer />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/our-promise' component={OurPromise} />
            <Route path='/token' component={Token} />
            <Route path='/contact' component={Contact} />
            <Route path='/wallet' component={Wallet} />
            <Route path='/redeem' component={Redeem} />
            <Route path='/purchase' component={Purchase} />
            <Route path='/resources' component={Resources} />
            <Route path='/success' component={Success} />
            <Route path='/usmint' component={USMint} />
            <Route path='/fincen' component={Fincen} />
            {/* <Route path='/form-validation-eg' component={FormWrap} /> */}


            <Route exact path='/register' component={AccountNew} />
            <Route exact path='/registration-pending' component={RegistrationPending} />

            <AuthRoute exact path='/login' component={Login} />
            {/* <Route exact path='/register2' component={AccountNew} /> */}
            <ProtectedRoute path='/leads' component={Leads} />

            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
