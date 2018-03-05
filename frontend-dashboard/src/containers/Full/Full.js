import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Calendar from '../../components/Calendar/Calendar'

import Dashboard from '../../views/Dashboard/';
import Profile from '../UserContainer/UserProfileContainer'
import  Account from '../UserContainer/UserAccountContainer'
class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>

                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                  <Route path="/calendar" name="Schedular" component={Calendar}/>
                  <Route exact path="/profile" name="Test Component" component={Profile} />
                  <Route exact path="/account" name="Test Component" component={Account} />
                  <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer
            applicationName="Consult"
            organization="Meetrix"
            copyrightYear="2018"
            poweredByText="Meetrix"
        />
      </div>
    );
  }
}

export default Full;
