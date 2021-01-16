import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SidebarDat from './SidebarDat'
//import BlueLogo from '../../images/BlueLogo.png'
import './Navbar.css'
//import Logo_Blue from '../images/BlueLogo.png'

function Navbar  () {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <div className="navbar-main  container-fluid p-0">
            <section className="container p-0">

            
            <div className="navbar p-0 ">
                <Link to='#' className='menu-bars '>
                    <span onClick={showSidebar} className='menu-bars-span'>
                    <i className="fas fa-bars fa-fw fa-2x" ></i>
                    </span>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className="menu-bars">
                        <i class="far fa-window-close fa-lg"></i>
                        </Link>
                    </li>
                    {SidebarDat.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    <span className='nav-text-icon'>
                                    {item.icon}
                                    </span>
                                    <span className='nav-text-title'>
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


