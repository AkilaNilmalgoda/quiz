import React, { useEffect, useState } from "react";
import "./AhCounter.css";
import { v4 as uuidv4 } from "uuid";

const AhCounterMain = () => {
  //Name

  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  //Comments

  const [comments, setComments] = useState("");

  const onChangeComments = (e) => {
    setComments(e.target.value);
  };

  //Role

  const [role, setRole] = useState("abc");

  const onChangeRole = (e) => setRole(e.target.value);

  //Count

  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  //List

  const [list, setList] = useState([]);

  const addItem = () => {
    setList([
      ...list,
      { id: uuidv4(), name: name, count: count, role: role, comment: comments },
    ]);
    setName("");
    setRole("Choose the role...");
    setComments("");
    setCount(0);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="container">
      <div className="col-12 p-0 mx-auto">
        <div className="row col-12 timer-main p-3 mx-auto">
          <div className="timer-col col-12 p-2">
            <h4>Ah-Counter</h4>
            <div className="col-12 p-1 timer-table-box">
              <div className="row col-12 mx-auto py-3">
                <div className="col-1 my-auto">
                  <h5 className="text-dark my-auto">#</h5>
                </div>
                <div className="col-3 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Speaker</h5>
                </div>
                <div className="col-2 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Ah-count</h5>
                </div>
                <div className="col-2 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Role</h5>
                </div>
                <div className="col-4 my-auto">
                  <h5 className="text-dark my-auto text-truncate">Comments</h5>
                </div>
              </div>
              <div className="row col-12 my-1 mx-auto">
                {list.length === 0 && (
                  <p className=" col-12 text-center">
                    No Speakers have been added.
                  </p>
                )}
                {list.map((item, id) => {
                  return (
                    <div
                      className="row col-12 my-2  mx-auto p-0 bg-dark speaker-time-unit-row"
                      key={id}
                    >
                      <div className="col-1 my-auto text-truncate speaker-time-unit">
                        <p className="text-2 my-auto">{id + 1}</p>
                      </div>
                      <div className="col-3 my-auto text-truncate">
                        <p className="text-2 my-auto">{item.name}</p>
                      </div>
                      <div className="col-2 my-auto text-truncate ">
                        <p className="text-2 my-auto">
                          {item.minutes}:{item.seconds}
                        </p>
                      </div>
                      <div className="col-2 my-auto text-truncate">
                        <p className="text-2 my-auto">{item.role}</p>
                      </div>
                      <div className="col-4 my-auto text-truncate">
                        <p className="text-2 my-auto">{item.comment}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 mx-auto p-0">
        <div className="row col-12 timer-main p-3 mx-auto">
          <div className="timer-col col-12 p-2">
            <div className="col-md-6 col-12 p-1 timer-add-speaker-box mx-auto">
              <h4 className="text-center py-3">Add Speaker</h4>
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={onChangeName}
                    required
                  />
                  <select
                    className="custom-select"
                    name="role"
                    value={role}
                    onChange={onChangeRole}
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
                    value={comments}
                    onChange={onChangeComments}
                  />
                </div>
              </div>

              <div className="d-flex mx-auto timer-box col-9 justify-content-center mt-3">
                <div className="row col-12 justify-content-center p-2 ">
                  <span
                    className="count-changer text-3 bg-7 pt-1 px-1 br mr-3"
                    onClick={minus}
                  >
                    <i className="fas fa-angle-down fa-3x"></i>
                  </span>
                  <h1 className="text-dark px-3">{count}</h1>
                  <span
                    className="count-changer text-4 bg-7 pb-1 px-1 br ml-3"
                    onClick={plus}
                  >
                    <i className="fas fa-angle-up fa-3x"></i>
                  </span>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center mt-3">
                <div className="row col-12 justify-content-center">
                  <button className="btn bg-2" onClick={addItem}>
                    Add Speaker
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AhCounterMain;
