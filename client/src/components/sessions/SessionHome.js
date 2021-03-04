import React, {useContext, useEffect} from 'react'
import Sessions from './Sessions'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Spinner from '../layout/Spinner/Spinner'

const SessionHome = () => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext;
    

    // useEffect(() => {
    //     authContext.loadUser();
    //     //setLoading(false)
    //     // eslint-disable-next-line
    // }, []);


    if(loading) 
        return <Spinner/>;
    return (
      <div className="container">
        <div className="col-12 p-0 mx-auto">
          <div className="col-12 row timer-main p-3 mx-auto">
            <div className="timer-col col-12 p-2">
              <h4 className="text-dark">Created Sessions</h4>
              <Route exact path="/sessions">
                {!isAuthenticated ? <Redirect to="/login" /> : <Sessions />}
              </Route>
            </div>
          </div>
        </div>

        {/* <Sessions/> */}
      </div>
    );
}

export default SessionHome
