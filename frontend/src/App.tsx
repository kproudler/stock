import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Profile } from './components/routes/Profile';
import { Stocks } from './components/routes/Stocks';
import { Home } from './components/routes/Home';
import { NoMatch } from './components/routes/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/presentational/NavigationBar';

const App = () => (
  <React.Fragment>
    <Router>
      <NavigationBar />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/stocks" component={Stocks} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  </React.Fragment>
);

export default App;
