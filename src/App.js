import React from 'react';
import CoinInfoContainer from './components/CoinInfoContainer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CoinDetails from './components/CoinDetails';
import AppContainer from './components/styles/AppContainer';

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path='/' component={CoinInfoContainer} />
          <Route exact path='/coin/:id' component={CoinDetails} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
