import React, {useContext, useEffect} from 'react'
import Sessions from './Sessions'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Spinner from '../layout/Spinner/Spinner'

const SessionHome = () => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext;
    

    useEffect(() => {
        authContext.loadUser();
        //setLoading(false)
        // eslint-disable-next-line
    }, []);


    if(loading) 
        return <Spinner/>;
    return (
        <div>
            <h1 className='text-light'>Created Sessions</h1>
            <Route exact path="/sessions">
                {!isAuthenticated ? <Redirect to="/login" /> : <Sessions />}
</Route>
            {/* <Sessions/> */}
        </div>
    )
}

export default SessionHome
