import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import FooterApp from './FooterApp';
import PhoneListContainer from '../containers/PhoneListContainer';
import PhoneDetailContainer from '../containers/PhoneDetailContainer';

export class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <Row>
            <Header />
            <div className="section">
              <Route exact path="/" component= { PhoneListContainer } />
              <Route exact path="/detail/:phoneId" render= { ({ match }) => (
                <PhoneDetailContainer phoneId={ match.params.phoneId } />
              )} />
            </div>
            <FooterApp />
          </Row>
        </BrowserRouter>
      );
  }
}

export default App;
