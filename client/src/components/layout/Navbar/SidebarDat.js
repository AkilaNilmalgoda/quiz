import React from 'react'

const SidebarDat =[
    {
        title: 'Home',
        path: '/',
        icon:<i className="fas fa-home fa-fw fa-lg"/>,
        className:'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon:<i className="fas fa-search fa-fw fa-lg"/>,
        className:'nav-text'
    },
    {
        title: 'Apps',
        path: '/apps',
        icon:<i className="fas fa-laptop-code fa-fw fa-lg"/>,
        className:'nav-text'
    },
    {
        title: 'Coming Up',
        path: '/new',
        icon: <i className="fas fa-shipping-fast fa-fw fa-lg"/>,
        className:'nav-text'
    },
    {
        title: 'Contacts',
        path: '/contact',
        icon: <i className="fas fa-phone fa-fw fa-lg"/>,
        className:'nav-text'
    }
]

export default SidebarDat;

