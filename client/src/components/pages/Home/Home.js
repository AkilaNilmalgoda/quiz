import React, {useContext, useEffect} from 'react';
//import Sessions from '../../sessions/Sessions'
import './Home.css'
//import {ReactComponent as HeroImage} from './speaker.svg';
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/authContext'


const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []); 

    return (
        <div className='container-fluid mx-auto p-0'>
            <div className="jumbotron hero my-3 mx-auto bg-3 ">
                <h1 className="display-4 text-light">Hello!</h1>
                <p className="lead text-light">Wecome to Toastmaster-connect where you can automate your toastmaster meeting and make your meeting exciting, smooth as never before. With Toastmaster-connect, it doesn't take you more than 5 minutes to prepare for the meeting.</p>
                <hr className="my-4"/>
                <p className='text-light'>Toastmaster-connect is going to bring all the toastmasters around the world into one single hub. Click here to learn more.</p>
                <p className="lead">
                <a className="btn bg-2  btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <div className="row apps mx-auto p-0">
                <div className="appbox col-sm-12 col-md-4 p-2 ">
                    <Link to='/sessions' className='m-auto link'>
                        <div className="singleapp col-12 d-flex bg-4">
                                <h2 className='text-center m-auto text-light '>Table Topics Program</h2>
                        </div>
                    </Link>
                </div>
                <div className="appbox col-sm-12 col-md-4 p-2">
                    <Link to='/timer' className='m-auto link'>
                        <div className="singleapp col-12 d-flex bg-4">
                            <h2 className='text-center m-auto text-decoration-none text-light'>Timer</h2>
                        </div>
                    </Link>
                </div>
                <div className="appbox col-sm-12 col-md-4 p-2">
                    <Link to='/ahcounter' className='m-auto link'>
                        <div className="singleapp col-12 d-flex bg-4">
                            <h2 className='text-center m-auto text-light'>Ah-counter</h2>
                        </div>
                    </Link>
                </div>
                
            </div>
            {/* <div className="row col-12 mx-auto p-0">
                <Link to='/profile' className='link col-12 p-0'>
                <div className='col-12 bg-1 testing '>
                    <h1 className='text-center p-1'>Testing</h1>
                </div>
                </Link>
            </div> */}
        </div>
    )
}

export default Home
