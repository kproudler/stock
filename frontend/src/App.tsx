import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/routes/About';
import { Contact } from './components/routes/Contact';
import { Home } from './components/routes/Home';
import { NoMatch } from './components/routes/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/presentational/NavigationBar';
import Jumbotron from 'react-bootstrap/Jumbotron';

const App = () => (
  <React.Fragment>
    <NavigationBar />
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </Jumbotron>
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Layout>
  </React.Fragment>
);

export default App;
