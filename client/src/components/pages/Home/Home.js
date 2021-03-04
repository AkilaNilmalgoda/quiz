import React, {useContext, useEffect} from 'react';
//import Sessions from '../../sessions/Sessions'
import './Home.css'
//import {ReactComponent as HeroImage} from './speaker.svg';
import {Link} from 'react-router-dom'
import AuthContext from '../../../context/auth/authContext'
import { BsQuestionDiamondFill } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { GiSoundWaves } from "react-icons/gi";
import {AiFillStar} from "react-icons/ai"
import Image1 from "./Images/app-image-1.jpg";
import Image2 from "./Images/app-image-2.jpg";
import Image3 from "./Images/app-image-3.jpg";
import nodemailer from "nodemailer"


const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []); 
  
  

    return (
      <div className="mainbg mx-2">
        <div className="col-12 p-0 mx-auto">
          <div className="row col-12 hero-main p-3 mx-auto">
            <div className="hero-col col-md-12 col-lg-8 col-12 p-2 pr-md-5">
              <div className="hero-email col-12 p-1">
                <div className="hero-email-box pl-md-3 p-3">
                  <h1 className="text-dark">Toastmaster - Connect</h1>
                  <p className="text-dark">
                    Wecome to Toastmaster-connect where you can automate your
                    toastmaster meeting and make your meeting exciting, smooth
                    as never before. With Toastmaster-connect, it doesn't take
                    you more than 5 minutes to prepare for the meeting.
                  </p>
                  {/* <div className="input-group">
                    <input type="text" className="form-control bg-dark" />
                    <div className="input-group-append">
                      <div className="btn btn btn-outline-dark">Sign Up</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="hero-col d-md-none d-lg-block col-lg-4 col-12 ">
              <div className="heading col-12 mx-auto row justify-content-between p-0">
                <h5>News</h5>
              </div>
              <div className="hero-voting col-12 d-flex justify-content-center align-items-center mx-auto">
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/ToastmastersInternationalOfficialFanPage"
                  data-tabs="timeline"
                  data-width=""
                  data-height="220"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/ToastmastersInternationalOfficialFanPage"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/ToastmastersInternationalOfficialFanPage">
                      Toastmasters International
                    </a>
                  </blockquote>
                </div>
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
                    <div className="single-app">
                      <div className="ribbon ribbon-top-left">
                        <span className="mx-auto pl-1"><AiFillStar className="ribbon-icon"/></span>
                      </div>
                      <div className="single-app-image col-12 p-0">
                        <img src={Image1} alt="" />
                      </div>
                      <div className="single-app-icon mx-auto">
                        <BsQuestionDiamondFill className="question-icon " />
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
      // <div className='container-fluid mx-auto p-0'>
      //     <div className="jumbotron hero my-3 mx-auto bg-3 ">
      //         <h1 className="display-4 text-light">Hello!</h1>
      //         <p className="lead text-light">Wecome to Toastmaster-connect where you can automate your toastmaster meeting and make your meeting exciting, smooth as never before. With Toastmaster-connect, it doesn't take you more than 5 minutes to prepare for the meeting.</p>
      //         <hr className="my-4"/>
      //         <p className='text-light'>Toastmaster-connect is going to bring all the toastmasters around the world into one single hub. Click here to learn more.</p>
      //         <p className="lead">
      //         <a className="btn bg-2  btn-lg" href="/apps" role="button">Learn more</a>
      //         </p>
      //     </div>
      //     <div className="row apps mx-auto p-0">
      //         <div className="appbox col-sm-12 col-md-4 p-2 ">
      //             <Link to='/sessions' className='m-auto link'>
      //                 <div className="singleapp col-12 d-flex bg-4">
      //                         <h2 className='text-center m-auto text-light '>Table Topics Program</h2>
      //                 </div>
      //             </Link>
      //         </div>
      //         <div className="appbox col-sm-12 col-md-4 p-2">
      //             <Link to='/timer' className='m-auto link'>
      //                 <div className="singleapp col-12 d-flex bg-4">
      //                     <h2 className='text-center m-auto text-decoration-none text-light'>Timer</h2>
      //                 </div>
      //             </Link>
      //         </div>
      //         <div className="appbox col-sm-12 col-md-4 p-2">
      //             <Link to='/ahcounter' className='m-auto link'>
      //                 <div className="singleapp col-12 d-flex bg-4">
      //                     <h2 className='text-center m-auto text-light'>Ah-counter</h2>
      //                 </div>
      //             </Link>
      //         </div>

      //     </div>
      //     {/* <div className="row col-12 mx-auto p-0">
      //         <Link to='/profile' className='link col-12 p-0'>
      //         <div className='col-12 bg-1 testing '>
      //             <h1 className='text-center p-1'>Testing</h1>
      //         </div>
      //         </Link>
      //     </div> */}
      // </div>
    );
}

export default Home
