import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/routes/About';
import { Contact } from './components/routes/Contact';
import { Home } from './components/routes/Home';
import { NoMatch } from './components/routes/NoMatch';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <React.Fragment>
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
}

export default App;
