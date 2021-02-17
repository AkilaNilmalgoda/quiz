import React, { useState, Fragment, useContext } from 'react'
import {Link} from 'react-router-dom'
import SidebarDat from './SidebarDat'
import './Navbar.css'
import AuthContext from '../../../context/auth/authContext'
import SessionContext from '../../../context/session/sessionContext'

function Navbar  () {
    const authContext = useContext(AuthContext);
    const sessionContext = useContext(SessionContext);

    const {isAuthenticated, logout, user} = authContext;
    const {clearSessions} = sessionContext

    const onLogout = () => {
        logout(); 
        clearSessions()
    }

    const authLinks = (
        <Fragment>
            <li className='welcome p-1 mr-4 text-4'><h5>Hi {user && user.name}</h5></li>
            <li className='logout p-1'>
                <a onClick={onLogout} href="#!">
                    <span className='menu-bars-span text-4'> <i className="fas fa-sign-out-alt fa-2x"></i></span>
                    {/* <h4 className=' text-4'>Logout</h4> */}
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <Link to='/register' className='link'>
            <li className='nav-li p-1 mr-2 text-light'>
                <h5 className='text-4'>Register</h5>
            </li>
            </Link>
            <Link to='/login' className='link'>
            <li className='nav-li p-1 text-light'>
                <h5 className='text-4'>Login</h5>
            </li>
            </Link>
        </Fragment>
    )

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="navbar-main mx-auto container-fluid p-0">
            <section className="container p-0">

            
            <div className=" row navbar mx-auto p-0">
                <div className='col-3 p-0'>
                <Link to='#' className='menu-bars '>
                    <span onClick={showSidebar} className='menu-bars-span text-4 '>
                    <i className="fas fa-bars fa-fw fa-2x" ></i>
                    </span>
                </Link>
                </div>
                <div className='d-none d-md-block'>
                    <Link to='/' className='link'>
                        <h3 className='text-2'>Toastmaster-Connect</h3>
                    </Link>
                </div>
                <div className='col-3 '>
                    <div className='justify-content-end d-flex'>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
                
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className="menu-bars">
                            <span className='text-4'>
                            <i className="far fa-window-close fa-lg"></i>
                            </span>
                        </Link>
                    </li>
                    {SidebarDat.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path} className='link'>
                                    <span className='nav-text-icon text-4'>
                                    {item.icon}
                                    </span>
                                    <span className='nav-text-title text-2'>
                                    {item.title}
                                    </span>
                                    
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
            
            </section>
        </div>
        </>
    )
}

export default Navbar


