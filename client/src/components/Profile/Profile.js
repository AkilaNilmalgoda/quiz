import React, { useContext } from 'react'
import ProfileContext from '../../context/Profile/profileContext'
// import AuthContext from '../../context/auth/authContext'
import {Form, Button} from 'react-bootstrap'
import './Profile.css'

const Profile = () => {
    const profileContext = useContext(ProfileContext);

    //const authContext = useContext(AuthContext);

    const {profile} = profileContext

    const {name, surname, country, club} = profile
    
    return (
        <div>
            <div className="container p-0">
                <div className="row heading pt-3 col-12 mx-auto d-flex justify-content-center">
                    <h1 className='text-4'>Profile</h1>
                </div>
                <div className="row col-12 mx-auto pt-3">
                    <div className="col-12 col-md-3 pt-2">
                        <div className="image bg-3 mx-auto">

                        </div>
                    </div>
                    <div className="col-12 col-md-9 pt-2 pl-0">
                        <div className="col-12">
                            <p className='text-light'>Name</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>{name} {surname}</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className='text-light'>Country</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>{country}</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className='text-light'>Toastmaster Club</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>{club}</h5>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className='text-light'>Achievements</p>
                            <div className="col-12 mx-auto bg-3 data-field">
                                <h5 className='text-light pb-1'>CC , CL</h5>
                            </div>
                        </div>
                    </div>
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
            
            <div className="row col-12 mt-5">
                <div className="col-8 mx-auto">
                    <Form>
                        <Form.Group>
                            <Form.Label className='text-light'>Profile Picture</Form.Label>
                            <Form.File id="exampleFormControlFile1" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className='text-light'>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-light'>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-light'>Toastmaster Club</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-light'>Achievements</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
