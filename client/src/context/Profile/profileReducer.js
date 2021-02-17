import {
    ADD_PROFILE, 
    UPDATE_PROFILE
} from './types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case ADD_PROFILE:{
            return{
                ...state,
                profile: action.payload
            }
        }
        case UPDATE_PROFILE:{
            return{
                ...state,
                profile: action.payload
                }
        }
        
        default:
            return state;
    }
}