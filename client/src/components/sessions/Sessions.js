import React, {Fragment, useContext, useState, useEffect} from 'react'
import SessionContext from '../../context/session/sessionContext';
import SessionItem from './SessionItem'
import {Link} from 'react-router-dom'


const Sessions = () => {
    const sessionContext = useContext(SessionContext);

    const { sessions } = sessionContext
    return (
        <div>
            <Fragment>
                {sessions.map((session,id )=>{
                    return (
                        <div key={id}>
                            <h1>{session.name}</h1>
                            <Link to={`/edit/${session.id}`} >
                            <button className='btn btn-primary' >Edit</button>
                            </Link>
                            
                            <SessionItem session={session}></SessionItem>
                            {/* <div>
                                {session.questions.map(question => {
                                    return(<h3>{question}</h3>)
                                })}
                            </div> */}
                        </div>
                    )
                }
                )}
            </Fragment>
        </div>
    )
}

export default Sessions