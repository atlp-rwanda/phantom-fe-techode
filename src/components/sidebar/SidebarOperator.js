import React from 'react'
import Links from '../links/Links';

import logo from '../../assets/svgs/logo.svg';
import line from '../../assets/svgs/sideBarline.svg';
import dashboard from '../../assets/svgs/dashboard.svg';
import driver from '../../assets/svgs/driver.svg'
import bus from '../../assets/svgs/bus.svg';
import routes from '../../assets/svgs/routes.svg';
import { useLocation } from 'react-router-dom';

const SideBar = ({shownav}) => {
   
    const location = useLocation();
    const navLinks = [
        {   id: 1,
            linkName : 'Dashboard',
            svgImage : dashboard,
            to:'dashboard_operator'
        },
        {
            id: 2,
            linkName : 'Drivers',
            svgImage : driver,
            to:'assign_drivers_buses'
        },
        {
            id: 3,
            linkName : 'Routes',
            svgImage : routes,
            to:'routes'
        },
        {
            id: 4,
            linkName : 'Buses',
            svgImage : bus,
            to:'buses'
        },
    ]

    return ( 
        <div className={`text-2lg text-black  main-bg-gradient h-screen pt-5 px-4 transition-all ${shownav == true ? `` :  `sidebar none-active`}`}>
            <div className="flex items-center justify-center flex-col mt-6 mb-4">
                <div className="logo">
                    <img src={logo} alt="phantom app"  />
                </div>
                <div className="logo-name text-mainColor text-1xl font-bold font-sans mt-2 ">
                    Phantom
                </div>
            </div>
          
            <img src={line} alt="phantom"  />

            <div className="nav-bar mt-14 flex flex-col align-middle justify-center ">
                <div className="nav-links ">
                    {
                        navLinks.map( nav => (
                            <Links key={nav.id} svgimage={nav.svgImage} linkname={nav.linkName} to={`/${nav.to}`} color={ `/${nav.to}` == location.pathname ? `text-active` : `text-white`}/>
                        ))
                    }                    
                </div>
            </div>
        </div>
    );
}
 
export default SideBar;