import {
    SET_EDIT,
    UPDATE_SESSION,
    SET_LOADING,
    GET_SESSIONS,
    ADD_SESSION,
    RESET_EDIT,
    SET_PRESENT,
    SET_SPEAKER,
    DELETE_SESSION,
    RESET_PRESENTATION, 
    SESSION_ERROR,
    CLEAR_SESSIONS
} from  '../types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case SET_EDIT: {
            return {
                ...state,
                Edit: action.payload,
                
                loading: false 
            }
        }
        case RESET_EDIT:{
            return {
                ...state,
                Edit: action.payload,
            }
        }
        case DELETE_SESSION:{
            return {
                ...state,
                sessions: state.sessions.filter(filteredsession => filteredsession._id !== action.payload)
            }
        }
        case CLEAR_SESSIONS: {
            return {
                ...state,
                sessions:[]
            }
        }
        case UPDATE_SESSION:{
            return {
                ...state,
                sessions: state.sessions.map(object => object._id === action.payload._id ? action.payload : object)
            }
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            } 
        case GET_SESSIONS:
            return{
                ...state,
                sessions: action.payload,
                loading:false
            }
        case ADD_SESSION:
            return{
                ...state,
                sessions: [action.payload, ...state.sessions ],
                loading:false
            }
        case SET_PRESENT:{
            return {
                ...state,
                Show: action.payload,
                loading: false
            }
        }
        case SET_SPEAKER:{
            return {
                ...state,
                Show: {...state.Show, 
                    items: 
                    state.Show.items.map(object =>  {
                        
                        if (object.id === action.payload.id) {
                            return { ...object, speaker: action.payload.speaker}
                        }
                        return object
                    }) 
                },
                loading: false
            }
        }
        case RESET_PRESENTATION:{
            return {
                ...state,
                Show: {...state.Show, 
                    items: 
                    state.Show.items.map(object =>  {
                            return { ...object, speaker: ""}
                    }) 
                },
                loading: false
            }
        }
        case SESSION_ERROR:{
            return {
                ...state,
                error: action.payload
            }
        }
        
        default:
            return state;
    }
}