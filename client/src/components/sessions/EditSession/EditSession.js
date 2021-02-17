import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SessionContext from "../../../context/session/sessionContext";
import { Link } from "react-router-dom";
import Spinner from "../../layout/Spinner/Spinner";

const EditSession = ({ match }) => {
  const sessionContext = useContext(SessionContext);

  const {
    setEditItem,
    //setEditname,
    loading,
    Edit,
    setLoading,
    editSession,
    sessions,
    getSession,
  } = sessionContext;

  const finalUpdate = () => {
    const edited = { name: showTheme, items: showQuestion };
    editSession(edited);
  };

  useEffect(() => {
      setEditItem(match.params.name)
    // eslint-disable-next-line
  }, []);
    
    console.log(Edit.name);
    
    
    // if (sessions.length !== 0) {
    //     setEditItem(match.params.name)
    // }

//   useEffect(() => {
//     const func = async () => {
//       await setEditItem(match.params.name);
//     };

//     func();
//   }, [sessions]);

//     if (sessions.length !== 0) {
//     console.log("Test");
//     }


  //const Edit = sessions.find(({ name }) => name === match.params.name);

    useEffect(() => {
    
      setShowTheme(Edit.name)
      setShowQuestion(Edit.items)
    //console.log(Edit);
  }, [Edit]);

//   if (Edit) {
//     console.log(Edit.name);
//   }

  //Theme update

  const [theme, setTheme] = useState("");

  const [showTheme, setShowTheme] = useState("");

  

  const [hideInput, setHideInput] = useState(true);

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

  //Question Update

  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState([]);

  const onChangeQuestion = (e) => setQuestion(e.target.value);

  const addQuestion = (e) => {
    e.preventDefault();
    setShowQuestion([
      ...showQuestion,
      {
        id: uuidv4(),
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

  if (loading) return <Spinner />;
  return (
    <div>
      <h2 className="text-2 my-4">Edit Session</h2>
      {/* Edit Theme */}
      <form>
        <div>
          {hideInput ? (
            <div className="my-3">
              <h2 className="text-3">The Theme of the meeting :</h2>
              <div className="d-flex">
                {/* <h2>{Edit.name}</h2> */}
                <h2 className="pr-2 text-light">{showTheme}</h2>
                <span className="edit-btn" onClick={handleEditTheme}>
                  <i className="fas fa-edit fa-xs"></i>
                </span>
              </div>
            </div>
          ) : (
            <div className="input-group my-3">
              <input
                id="theme"
                type="text"
                placeholder="theme"
                name="theme"
                value={theme}
                onChange={onChangeTheme}
                className="col-4 form-control"
              />
              <div className="input-group-append">
                <button className="btn bg-4 text-light " onClick={addTheme}>
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
      {/* Edit Questions */}
      <form>
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
              <button className="btn bg-2" onClick={handleUpdateQuestion}>
                Update
              </button>
            </div>
          ) : (
            <div className="input-group-append">
              <button className="btn bg-4 text-light" onClick={addQuestion}>
                Add New
              </button>
            </div>
          )}
        </div>
      </form>

      <div>
        <h2 className="text-2">Questions :</h2>
        <div>
          {showQuestion.map((object, id) => {
            return (
              <div key={id} className="d-flex my-3">
                <h4 className="pr-2 text-light">
                  {id + 1}. {object.item}
                </h4>
                <span
                  className="pr-2 edit-btn"
                  onClick={() => handleEditQuestion(object.id)}
                >
                  <i className="fas fa-edit fa-xs"></i>
                </span>
                <span
                  className="delete-btn"
                  onClick={() => handleDeleteQuestion(object.id)}
                >
                  <i className="fas fa-trash-alt fa-xs"></i>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-3 d-none d-md-block"></div>
        <div className="col-md-2 col-10 mx-auto pt-1  ">
          <button
            className="btn bg-4 text-light col-12"
            onClick={() => finalUpdate(showTheme, showQuestion)}
          >
            Update
          </button>
        </div>
        <div className="col-md-2 col-10 mx-auto pt-1  ">
          <Link to="/sessions">
            <button className="btn bg-3 text-light col-12">Go Back</button>
          </Link>
        </div>
        <div className="col-md-3 d-none d-md-block"></div>
      </div>
    </div>
  );
};

export default EditSession;
