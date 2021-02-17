import React, { useReducer } from "react";
import axios from "axios";
import SessionContext from "./sessionContext";
import sessionReducer from "./sessionReducer";
import {
  SET_EDIT,
  RESET_EDIT,
  UPDATE_SESSION,
  SET_LOADING,
  GET_SESSIONS,
  ADD_SESSION,
  SET_PRESENT,
  SET_SPEAKER,
  DELETE_SESSION,
  RESET_PRESENTATION,
  SESSION_ERROR,
  CLEAR_SESSIONS,
} from "../types";

const SessionState = (props) => {
  const initialState = {
    sessions: [],
    Edit: {
      id: "",
      name: "",
      items: [],
    },
    Show: {
      id: "",
      name: "",
      items: [],
    },
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(sessionReducer, initialState);

  //Edit Session

  //Set up the Edit

  const setEditItem = async (setname) => {
      setLoading(true);
      
      const res = await axios.get("/api/sessions");

      //console.log(res.data);

    const newone = res.data.find(
      ({ name }) => name === setname
    );

    dispatch({
      type: SET_EDIT,
      payload: newone,
    });
  };

//   const setEditname = async () => {
//     // localStorage.setItem("name", name)
//     if (localStorage.name) {
//       try {
//         setLoading(true);
//         const newone = state.sessions.find(
//           ({ name }) => name === localStorage.name
//         );

//         dispatch({
//           type: SET_EDIT,
//           payload: newone,
//         });
//       } catch (err) {
//         console.log("error");
//       }
//     }
//   };

  //Edit the item
  const editSession = async (edited) => {
    console.log(edited);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `/api/sessions/${state.Edit._id}`,
        edited,
        config
      );
      console.log(res.data);
      dispatch({
        type: UPDATE_SESSION,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SESSION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // const editSession = async (edited) => {
  //     const c = { id:state.Edit.id, name:edited.name, items:edited.itemd}

  //     dispatch({
  //         type:UPDATE_SESSION,
  //         payload: c
  //     })
  // }

  //Reset the Edit
  const resetEdit = async () => {
    const c = { id: "", name: "", items: [] };

    dispatch({
      type: RESET_EDIT,
      payload: c,
    });
  };

  //Delete Session

  const deleteSession = async (id) => {
    try {
      await axios.delete(`/api/sessions/${id}`);

      dispatch({
        type: DELETE_SESSION,
        payload: id,
      });
      console.log(state);
    } catch (err) {
      dispatch({
        type: SESSION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Clear Contacts
  const clearSessions = () => {
    dispatch({
      type: CLEAR_SESSIONS,
    });
  };

  //Get Session

  const getSession = async () => {
    try {
      const res = await axios.get("/api/sessions");

      dispatch({
        type: GET_SESSIONS,
        payload: res.data,
      });
      //console.log(state);
    } catch (err) {
      dispatch({
        type: SESSION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Add Session

  const addSession = async (session) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/sessions", session, config);

      dispatch({
        type: ADD_SESSION,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SESSION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Present Session

  //Start Presentation

  const setPresentSession = async (setname) => {
    setLoading(true);

    const res = await axios.get("/api/sessions");

    const newone = res.data.find(({ name }) => name === setname);

    dispatch({
      type: SET_PRESENT,
      payload: newone,
    });
  };

  //Add Speaker

  const addSpeaker = (name) => {
    setLoading(true);
    const a = name;

    dispatch({
      type: SET_SPEAKER,
      payload: a,
    });
  };

  //Reset Presentation

  const resetPresentation = () => {
    dispatch({
      type: RESET_PRESENTATION,
    });
  };

  //Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <SessionContext.Provider
      value={{
        sessions: state.sessions,
        state: state,
        Edit: state.Edit,
        Show: state.Show,
        loading: state.loading,
        error: state.error,
        setEditItem,
        addSession,
        editSession,
        resetEdit,
        setPresentSession,
        addSpeaker,
        deleteSession,
        resetPresentation,
        getSession,
        clearSessions,
        // setEditname,
        setLoading,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionState;
