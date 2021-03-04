import React, { useReducer } from "react";
import axios from "axios";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";
import { GET_PROFILE, ADD_PROFILE, UPDATE_PROFILE } from "./types";

const ProfileState = (props) => {
  const initialState = {
    profile: {
      name: "",
      country: "",
      club: "",
      achievements: {},
    },
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  //Get Profile

  const getProf = async () => {
      try {
          const res = await axios.get("api/profile")

          console.log(res.data);
          
          dispatch({
              type: GET_PROFILE,
              payload: res.data
          })
      } catch (err) {
          console.log("get error");
    }
  };

  //Name

  const addProfile = (profile) => {
    dispatch({
      type: ADD_PROFILE,
      payload: profile,
    });
  };

  const updateProfile = (profile) => {
    dispatch({
      type: UPDATE_PROFILE,
      payload: profile,
    });
  };

  return (
    <ProfileContext.Provider
      value={{
              profile: state.profile,
        getProf,
        addProfile,
        updateProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
