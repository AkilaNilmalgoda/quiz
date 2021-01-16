import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About';
import EditSession from './components/sessions/EditSession'

import SessionState from './context/session/SessionState';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const  App= () => {
  return (
    <SessionState>
    <Router>
      <Fragment>
        <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/edit/:id' component={EditSession}/>
            </Switch>
          </div>
      </Fragment>
    </Router>
    </SessionState>
  );
}

export default App;
