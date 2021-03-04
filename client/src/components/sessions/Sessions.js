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
          <div className="bg-6 p-2 br">
            {sessions.map((session, id) => {
              return (
                <div
                  key={id}
                  className="row  p-0 mx-auto my-1 py-1 session-unit bg-7"
                >
                  <div className="col-md-8 text-dark col-8  my-auto ">
                    <h5 className="my-auto">{session.name}</h5>
                  </div>
                  <div className="col-1 my-auto">
                    <Link to={`/sessions/edit/${session.name}`}>
                      <span className="edit-button">
                        <i class="fas fa-edit fa-lg"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="col-1 my-auto">
                    <span
                      onClick={() => deleteSession(session._id)}
                      className="delete-button"
                    >
                      <i class="fas fa-trash-alt fa-lg"></i>
                    </span>
                  </div>
                  <div className="col-md-2 col-12 my-auto ">
                    <Link to={`/present/${session.name}`}>
                      <button className="btn bg-2 col-12">Present</button>
                    </Link>
                  </div>
                </div>
              );
            })}

            <div className="row d-flex mx-auto">
              <div className="mx-auto">
                <Link to="/add">
                  <button className="btn bg-4 text-light mt-2">
                    Add a Session
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    );
}

export default Sessions