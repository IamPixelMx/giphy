import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import { Home } from 'pages';
class App extends React.PureComponent {
  render() {
    console.log('props from App', this.props);

    return (
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
