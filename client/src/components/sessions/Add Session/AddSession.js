import React, { Fragment, useState, useEffect, useContext } from "react";
import SessionContext from "../../../context/session/sessionContext";
import { Link } from "react-router-dom";
import "./AddSession.css";

//Todos

const AddSession = () => {
  const sessionContext = useContext(SessionContext);

  const { addSession } = sessionContext;

  const add = () => {
    const session = { name: showTheme, items: showQuestion };
    addSession(session);
  };

  // Theme section

  const [theme, setTheme] = useState("");
  const [showTheme, setShowTheme] = useState("");
  const [hideInput, setHideInput] = useState(false);

  const onChangeTheme = (e) => setTheme(e.target.value);

  const addTheme = (e) => {
    e.preventDefault();
    setShowTheme(theme);
    setHideInput(true);
  };

  const handleEditTheme = () => {
    setTheme(showTheme);
    setHideInput(false);
  };

  //Question Section

  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState([]);

  const onChangeQuestion = (e) => setQuestion(e.target.value);

  const addQuestion = (e) => {
    e.preventDefault();
    setShowQuestion([
      ...showQuestion,
      {
        id: showQuestion.length,
        item: question,
      },
    ]);
    setQuestion("");
  };

  //Update Question

  const [updateThis, setUpdateThis] = useState({});

  const handleEditQuestion = (id) => {
    setUpdateThis(showQuestion.find((item) => item.id === id));
  };

  const [update, setUpdate] = useState(showQuestion);

  const handleDeleteQuestion = (id) => {
    setUpdate(showQuestion.filter((object) => object.id !== id));
  };

  const handleUpdateQuestion = (e) => {
    e.preventDefault();
    setUpdate(
      showQuestion.map((object) => {
        if (object.id === updateThis.id) {
          return { ...object, item: question };
        }
        return object;
      })
    );
    setQuestion("");
    setUpdateThis({});
  };

  useEffect(() => {
    setShowQuestion(update);
  }, [update]);

  useEffect(() => {
    setQuestion(updateThis.item);
  }, [updateThis]);

  return (
    <Fragment>
      <div className="container">
        <div className="col-12 p-0 mx-auto">
          <div className="row col-12 timer-main p-3 mx-auto">
            <div className="timer-col col-12 p-2">
              <h4>Add Session</h4>
              <div className="col-12 p-1 timer-table-box pl-3">
                <div className="my-3">
                  {hideInput ? (
                    <div className=" br bg-6 d-inline-block p-1">
                      <h4 className="text-dark">The Theme of the meeting</h4>
                      <div className="d-flex">
                        <h3 className="pr-2 text-dark">{showTheme} </h3>
                        <span className="edit-btn" onClick={handleEditTheme}>
                          <i className="fas fa-edit fa-xs"></i>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="input-group mb-3">
                      <input
                        id="theme"
                        type="text"
                        placeholder="theme"
                        name="theme"
                        value={theme}
                        onChange={onChangeTheme}
                        className="col-4 form-control"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          className="btn bg-4 text-light"
                          onClick={addTheme}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="input-group mb-3">
                  <input
                    id="question"
                    type="text"
                    placeholder="add a question"
                    name="question"
                    value={question || ""}
                    onChange={onChangeQuestion}
                    className="col-9 form-control"
                  />

                  {updateThis.item ? (
                    <div className="input-group-append">
                      <button
                        className="btn bg-4 text-light"
                        onClick={handleUpdateQuestion}
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div className="input-group-append">
                      <button
                        className="btn bg-4 text-light"
                        onClick={addQuestion}
                      >
                        Add
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 p-1 timer-table-box mt-2 px-2">
                <div>
                  <h5 className="text-dark pl-3">Questions:</h5>
                  <div className="bg-6 br p-3 m-3">
                    {showQuestion.map((item, id) => {
                      return (
                        <div key={id} className="d-flex ">
                          <h5 className="pr-2 text-dark">
                            {id + 1}. {item.item}
                          </h5>
                          <span
                            className="pr-2 edit-btn"
                            onClick={() => handleEditQuestion(item.id)}
                          >
                            <i className="fas fa-edit fa-xs"></i>
                          </span>
                          <span
                            className="delete-btn"
                            onClick={() => handleDeleteQuestion(item.id)}
                          >
                            <i className="fas fa-trash-alt fa-xs"></i>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-6 p-1 timer-table-box pl-3 mx-auto mt-2 ">
                <div className="row">
                  <div className="col-md-5 col-10 mx-auto pt-1 ">
                    <button
                      className="btn bg-4 text-light col-12"
                      onClick={() => add(showTheme, showQuestion)}
                    >
                      Save
                    </button>
                  </div>
                  <div className="col-md-5 col-10 mx-auto pt-1 ">
                    <Link to="/sessions">
                      <button className="btn bg-3 text-light col-12">
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddSession;
