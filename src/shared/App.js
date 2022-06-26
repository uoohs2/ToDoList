import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configureStore';

import List from '../pages/List';
import { GlobalStyle } from '../components/ui';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={List} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
