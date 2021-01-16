import React, {useReducer} from 'react';
import uuid from 'uuid';
import SessionContext from './sessionContext'
import sessionReducer from './sessionReducer'
import {
    SET_EDIT,
    SESSION_ERROR
} from  '../types'

const SessionState = props => {
    const initialState = {
        sessions: [
            {
                id:1,
                name: 'Future',
                questions: ["What do you think about VR?","Will electric cars dominate the world?"]
            },
            {
                id:2,
                name: 'Travel',
                questions: ["What is your favourite travel destination?","How often do you travel?"]
            },
            {
                id:3,
                name: 'Food',
                questions: ["What is your favourite fruit?","What is your favourite resturent?"]
            }
        ],
        EditThis: {}
        
    };

    const [state, dispatch] = useReducer(sessionReducer, initialState);
    
    //Edit Session
        const setItemToEdit = async (id)=> {
            const a = await initialState.sessions.filter(session => session.id === id)

            dispatch({
                type: SET_EDIT,
                payload: a
            })
        }
    //Add Session

    //Delete Session

    //Update Session

    //Filter session

    return (
        <SessionContext.Provider value={{
            sessions: state.sessions,
            EditThis: state.EditThis,
            setItemToEdit
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionState;