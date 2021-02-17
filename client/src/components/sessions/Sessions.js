import React, {Fragment, useContext, useEffect} from 'react';
import SessionContext from '../../context/session/sessionContext';
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import Spinner from '../../components/layout/Spinner/Spinner'
import './Sessions.css'

const Sessions = () => {
    const sessionContext = useContext(SessionContext);

    const authContext = useContext(AuthContext);

    const {sessions , resetEdit, deleteSession, getSession, loading} = sessionContext;

    useEffect(() => {
        authContext.loadUser(); 
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        resetEdit()
        getSession()
        
        // eslint-disable-next-line
    }, [])
    if(loading) 
        return <Spinner/>;
    return (
        <div>
            <Fragment>
                {sessions.map((session,id )=>{
                    return (

                        <div key={id} className='row mx-auto my-5 py-1 session-unit'>
                            <div className='col-md-8 col-10'>
                                <h2 >{session.name}</h2>
                            </div>
                            <div className='col-1 my-auto'>
                            <Link to={`/sessions/edit/${session.name}`} >
                                <span className='edit-button'><i class="fas fa-edit fa-lg"></i></span>
                            </Link>
                            </div>
                            <div className='col-1 my-auto'>
                                <span  onClick={()=>deleteSession(session._id)}className='delete-button'><i class="fas fa-trash-alt fa-lg"></i></span>
                                
                            </div>
                            <div className='col-md-2 col-12 my-auto'>
                            <Link to={`/present/${session.name}`} >
                                <button className='btn bg-2 col-12'>Present</button>
                            </Link>
                            </div>
                            
                        </div>
                    )
                }
                )}
                <div className='row d-flex mx-auto'>
                    <div className='mx-auto'>
                    <Link to='/add'>
                        <button className='btn bg-4 text-light'>Add a Session</button>
                    </Link>
                    </div>
                    
                </div>
                
            </Fragment>
        </div>
    )
}

export default Sessions