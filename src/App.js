import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import FinalPage from './FinalPage';

class App extends Component {
 
  render() {
    return (

      <Router>
      <div className="App">
        <Route path="/"  exact render={FirstPage}
        />
        <Route path="/food" props exact render={SecondPage}
        />
        <Route path="/final" props exact render={FinalPage}
        />
        
      </div>
      </Router>
    );
  }
}

export default App;
