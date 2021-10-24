import './Style/App.css';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Home from './Home.js';
import Main from './Components/Main';

import Chat from './Chat/Chat';
import './Chat/Chat.css';

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-210268376-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);


function App() {
  const [state, setState] = useState('');

  useEffect(() => {
    const GoogleAnalyticsEvent = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const merchant = queryParams.get('merchant');
      const utm_source = queryParams.get('utm_source');
      const utm_campaign = queryParams.get('utm_campaign');
      console.log("merchant : ",merchant, "\nutm_source : ",utm_source, "\nutm_campaign : ",utm_campaign);
      if(utm_source){
        ReactGA.event({
          category: 'utm_source',
          action: utm_source,
        });
      }
      if(utm_campaign){
        ReactGA.event({
          category: 'utm_campaign',
          action: utm_campaign,
        });
      }
      if(merchant){
        ReactGA.event({
          category: 'merchant',
          action: merchant,
        });
      }
    }

    GoogleAnalyticsEvent();
  },[]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>                <Home setState={setState}/> </Route>
          <Route path='/plugin-content' exact>  <Home setState={setState}/> </Route>
          <Route path='/plugin-content/search'> <Main setState={setState}/> </Route>
        </Switch>
      </Router>
      <Chat state={state}/>
    </div>
  );
}

export default App;
