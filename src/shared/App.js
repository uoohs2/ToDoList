import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import ToDo from '../pages/ToDo';
import Friend from '../pages/Friend';

import GlobalStyle from '../components/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/Todo" component={ToDo} />
        <Route exact path="/Friend" component={Friend} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
