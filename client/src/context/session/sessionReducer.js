import {
    SET_EDIT,
    SESSION_ERROR
} from  '../types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case SET_EDIT:{
            return {
                ...state,
                EditThis: action.payload
            }
        }
        default:
            return state;
    }
}