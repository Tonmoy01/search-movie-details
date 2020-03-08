import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Nav from './components/layout/Nav';
import Index from './components/layout/Index';
import Details from './components/movies/Details';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/details/movie/:id" component={Details} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
