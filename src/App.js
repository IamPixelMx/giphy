import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import { Home } from 'pages';
class App extends React.PureComponent {
  render() {
    return (
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path={routes.home} render={props => <Home />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
