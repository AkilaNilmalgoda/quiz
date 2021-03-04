import React, { useState, useContext, useEffect } from "react";
import ProfileContext from "../../context/Profile/profileContext";
import AuthContext from "../../context/auth/authContext";
import { Form, Button } from "react-bootstrap";
import "./Profile.css";

const Profile = () => {
  const profileContext = useContext(ProfileContext);

  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, updatepassword } = authContext;

  const { getProf } = profileContext;

  //const { name, surname, country, club } = profile;

  useEffect(() => {
    authContext.loadUser();
    getProf()
    // eslint-disable-next-line
  }, []);

  const [showPasswordChange,setShowPasswordChange] = useState(false)

  const [currentPassword, setCurrentPassword] = useState("");

  const onChangeCurrentPassword = (e) => setCurrentPassword(e.target.value);

  const [newPassword, setNewPassword] = useState("");

  const onChangeNewPassword = (e) => setNewPassword(e.target.value);

  const [CheckNewPassword, setCheckNewPassword] = useState("");

  const onChangeCheckNewPassword = (e) => setCheckNewPassword(e.target.value);


  const onSubmit = (e) => {
    e.preventDefault();
    if (newPassword === CheckNewPassword) {
      updatepassword({ userId: user._id, password: currentPassword, newpassword: newPassword });
      console.log("Passwords Match");
    } else {
      console.log("Passwords Do Not Match");
    }
  };

  return (
    <div>
      <div className="container p-0">
        <div className="row heading pt-3 col-12 mx-auto d-flex justify-content-center">
          <h1 className="text-4">Profile</h1>
        </div>
        <div className="row col-12 mx-auto pt-3">
          {/* <div className="col-12  pt-2">
            <div className="image bg-3 mx-auto"></div>
          </div> */}
          <div className="col-12 col-md-6 mx-auto pt-2 pl-0">
            <div className="col-12">
              <p className="text-dark">Name</p>
              <div className="col-12 mx-auto bg-3 data-field">
                {/* <h5 className="text-light">{profile.name}</h5> */}
                <h5 className="text-light pb-1">{user && user.name}</h5>
              </div>
            </div>
            <div className="col-12">
              <p className="text-dark">Country</p>
              <div className="col-12 mx-auto bg-3 data-field">
                <h5 className="text-light pb-1">{user && user.country}</h5>
                {/* <h5 className="text-light pb-1">{profile.country}</h5> */}
              </div>
            </div>
            <div className="col-12">
              <p className="text-dark">Toastmaster Club</p>
              <div className="col-12 mx-auto bg-3 data-field">
                <h5 className="text-light pb-1">{user && user.club}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-12 mx-auto justify-content-center p-4">
          <button
            className="btn bg-4 mx-auto text-light"
            onClick={() => setShowPasswordChange(true)}
          >
            Reset Password
          </button>
        </div>
        {/* EDIT PROFILE */}
        {/* <div className="row col-12 mx-auto pt-3">
                    <div className="col-12 col-md-3 pt-2">
                        <div className="image bg-3 mx-auto">

                        </div>
                    </div>
                    <div className="col-12 col-md-9 pt-2 pl-0">
                        <div className="col-12">
                            <p className='text-light'>Name</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>Adam Smith</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className='text-light'>Country</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>England</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className='text-light'>Toastmaster Club</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>Moscow Free Speakers Club</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className='text-light'>Achievements</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>CC , CL</h5>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>

      {/* <div className="row col-12 mt-5">
        <div className="col-8 mx-auto">
          <Form>
            <Form.Group>
              <Form.Label className="text-light">Profile Picture</Form.Label>
              <Form.File id="exampleFormControlFile1" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-light">City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-light">Toastmaster Club</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-light">Achievements</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div> */}
      {showPasswordChange && (
        <div className="my-3 ">
          <div className="Modal-overlay mx-auto">
            <div className="Modal mx-auto ">
              <form action="">
                <input
                  type="password"
                  placeholder="current password"
                  className="col-6 form-control mx-auto my-2 prof-input"
                  name="currentpassword"
                  onChange={onChangeCurrentPassword}
                  //value={a}
                />
                <input
                  type="password"
                  placeholder="new password"
                  className="col-6 form-control mx-auto my-2 prof-input"
                  name="newpassword"
                  minlength="6"
                  //value={b}
                  //onChange={onChange}
                  onChange={onChangeNewPassword}
                />
                <input
                  type="password"
                  placeholder="new password confirm"
                  className="col-6 form-control mx-auto my-2 prof-input"
                  name="confimpassword"
                  //value={c}
                  onChange={onChangeCheckNewPassword}
                />
                <div className="input-group-append">
                  <button
                    className="btn bg-3 text-light mx-auto my-2"
                    onClick={onSubmit}
                  >
                    Change Password
                  </button>
                </div>
                <div className="input-group-append">
                  <button
                    className="btn bg-3 text-light mx-auto"
                    onClick={() => setShowPasswordChange(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
