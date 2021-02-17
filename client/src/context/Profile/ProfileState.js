import React, { useReducer } from 'react'
import ProfileContext from './profileContext'
import profileReducer from './profileReducer'
import {
    ADD_PROFILE, 
    UPDATE_PROFILE,
} from './types'

const ProfileState = props => {
        const initialState = {
            profile : {
                name:"Adam",
                surname:"Smith",
                country:"",
                club:"",
                achievements: {}
            }
        }
            

    const [state, dispatch] =useReducer(profileReducer, initialState);

    //Name

    const addProfile = (profile) =>{

        dispatch({
            type:ADD_PROFILE,
            payload: profile
        })
    }

    const updateProfile = (profile) =>{

        dispatch({
            type:UPDATE_PROFILE,
            payload: profile
        })
    }

    return (
        <ProfileContext.Provider value={{
            profile: state.profile,
            addProfile,
            updateProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileState
