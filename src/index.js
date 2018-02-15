import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import App from './components/app';
import NinetyTwo from './components/ninetytwo';
import Twozerofiveone from './components/twozerofiveone';
import Fivetwotwothree from './components/fivetwotwothree';
import Sixzerozerofive from './components/sixzerozerofive';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/92 E Broadway" component={NinetyTwo} />
      <Route path="/2051 86 St" component={Twozerofiveone} />
      <Route path="/5223 8th Ave" component={Fivetwotwothree} />
      <Route path="/6005 Ft Hamilton" component={Sixzerozerofive} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
