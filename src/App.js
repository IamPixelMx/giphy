import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import { Home } from 'pages';

class App extends React.PureComponent {
  getHomeComponent(fetching, error) {
    if (fetching) {
      return <div>...cargando</div>;
    } else if (error) {
      return <div>Error: {error}</div>;
    } else {
      return Home;
    }
  }

  render() {
    console.log(process.env.REACT_APP_GIPHY_API_KEY);

    const { fetching, error } = this.props;
    const HomeComponent = this.getHomeComponent(fetching, error);

    return (
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path={routes.home} component={HomeComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
