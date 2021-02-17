import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About';
import ContactUs from './components/pages/ContactUs/ContactUs'
import Apps from './components/pages/Apps/Apps'
import EditSession from './components/sessions/EditSession/EditSession'
import PresentSession from './components/sessions/PresentSession/PresentSession'
import AddSession from './components/sessions/Add Session/AddSession'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateToutes'
import SessionHome from './components/sessions/SessionHome'
import AhCounter from './components/Ah-counter/AhCounterMain'
import Timer from './components/Timer/Timer'
// import Profile from './components/Profile/Profile'
import Advert from './components/layout/Advert/Ad'

import SessionState from './context/session/SessionState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ProfileState from './context/Profile/ProfileState'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import setAuthToken from './utils/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}


const  App= () => {
  return (
    <AuthState>
    <SessionState>
    <ProfileState>
    <AlertState>
    <Router>
      <Fragment>
        <Navbar/>
          <div className="container mx-auto">
            <Alerts/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={ContactUs}/>
              <Route exact path='/apps' component={Apps}/>
              {/* <PrivateRoute exact path='/profile' component={Profile}/> */}
              <PrivateRoute exact path='/sessions' component={SessionHome}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/ahcounter' component={AhCounter}/>
              <Route exact path='/timer' component={Timer}/>
              <PrivateRoute exact path='/sessions/edit/:name' component={EditSession}/>
              <PrivateRoute exact path='/present/:name' component={PresentSession}/>
              <PrivateRoute exact path='/add' component={AddSession}/>
            </Switch>
          </div>
          <Advert/>
      </Fragment>
    </Router>
    </AlertState>
    </ProfileState>
    </SessionState>
    </AuthState>
  );
}

export default App;
