import React from "react";
import "./Testing.css";
import { FaQuestion } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi"
import { GiSoundWaves } from "react-icons/gi"
import Image1 from "./Images/app-image-1.jpg"
import Image2 from "./Images/app-image-2.jpg";
import Image3 from "./Images/app-image-3.jpg";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";

const Testing = () => {
  return (
    <div className="mainbg mx-2">
      <div className="col-12 p-0 mx-auto">
        <div className="row col-12 timer-main p-3 mx-auto">
          <div className="timer-col col-12 p-2">
            <h4>Timer</h4>
            <div className="col-12 p-1 timer-table-box">
              <div className="row col-12 mx-auto py-3">
                <div className="col-1 my-auto">
                  <h5 className="text-dark my-auto">#</h5>
                </div>
                <div className="col-3 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Speaker</h5>
                </div>
                <div className="col-2 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Time</h5>
                </div>
                <div className="col-2 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Role</h5>
                </div>
                <div className="col-4 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Comments</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 mx-auto">
        <div className="row col-12 timer-main p-3 mx-auto">
          <div className="timer-col col-12 p-2 ">
            <div className=" p-1 timer-add-speaker-box mx-auto">
              <h4 className="text-center py-3">Add Speaker</h4>
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    //value={name}
                    //onChange={onChangeName}
                    required
                  />
                  <select
                    className="custom-select"
                    name="role"
                    //value={role}
                    //onChange={onChangeRole}
                  >
                    <option value="Choose the role..." selected>
                      Choose the role...
                    </option>
                    <option value="Timer">Timer</option>
                    <option value="Grammarian">Grammarian</option>
                    <option value="Encouragement Note">
                      Encouragement Note
                    </option>
                    <option value="Tosatmaster">Tosatmaster</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Evaluator">Evaluator</option>
                    <option value="General Evaluator">General Evaluator</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Comments"
                    name="comments"
                    //value={comments}
                    //onChange={onChangeComments}
                  />
                </div>
              </div>
              <div className="col-6 mx-auto timer-box"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 mx-auto">
        <div className="p-3 ">
          <div className="row heading col-12 mx-auto justify-content-between p-2">
            <h5>Applications</h5>
          </div>
          <div className="p-2">
            <div className="row apps col-12 apps p-2 mx-auto">
              <div className="single-app-box col-md-4 col-12 p-3">
                <Link to="/sessions" className="m-auto link">
                  <div className="sing</Link>le-app">
                    <div className="single-app-image col-12 p-0">
                      <img src={Image1} alt="" />
                    </div>
                    <div className="single-app-icon mx-auto">
                      <FaQuestion className="question-icon " />
                    </div>

                    <div className="single-app-name col-12">
                      <h4>Table Topics</h4>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="single-app-box col-md-4 col-12 p-3">
                <Link to="/timer" className="m-auto link">
                  <div className="single-app">
                    <div className="single-app-image col-12 p-0">
                      <img src={Image2} alt="" />
                    </div>
                    <div className="single-app-icon mx-auto">
                      <GiSandsOfTime className="question-icon " />
                    </div>
                    <div className="single-app-name col-12">
                      <h4>Timer</h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="single-app-box col-md-4 col-12 p-3">
                <Link to="/ahcounter" className="m-auto link">
                  <div className="single-app">
                    <div className="single-app-image col-12 p-0">
                      <img src={Image3} alt="" />
                    </div>
                    <div className="single-app-icon mx-auto">
                      <GiSoundWaves className="question-icon " />
                    </div>
                    <div className="single-app-name col-12">
                      <h4>Ah-Counter</h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
