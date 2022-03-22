import React from 'react'
import Links from '../links/Links';

import logo from '../../assets/svgs/logo.svg';
import line from '../../assets/svgs/sideBarline.svg';
import dashboard from '../../assets/svgs/dashboard.svg';
import driver from '../../assets/svgs/driver.svg'
import userSvg from '../../assets/svgs/user.svg';
import routes from '../../assets/svgs/routes.svg';
import operatorIM from '../../assets/svgs/operator.svg';
import roles from '../../assets/svgs/roles.svg'
import busLink from '../../assets/svgs/busLink.svg';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const SideBar = ({user,shownav}) => {
   
    const location = useLocation();
    const { type: userType } = user;
    const navLinks = [
        {   id: 1,
            linkName : userType == "admin" || userType == "operator"  ? 'Dashboard' : "Home" ,
            svgImage : dashboard,
            to:'dashboard'
        },
        {
            id: 2,
            linkName : 'Track',
            svgImage : busLink,
            to:'simulation'
        },
        {
            id: 3,
            linkName : 'Drivers',
            svgImage : driver,
            to:'drivers'
        },
        {
            id: 4,
            linkName : 'Routes',
            svgImage : routes,
            to:'routes'
        },
        {
            id: 5,
            linkName : 'users',
            svgImage : userSvg,
            to:'Users'
        },
        {
            id: 6,
            linkName : 'Operators',
            svgImage : operatorIM,
            to:'operators'
        },
       
    ]

    const navProtector = () =>{
        if(userType == "admin"){
            navLinks.push( 
                {
                    id: navLinks.length + 1,
                    linkName : 'Roles',
                    svgImage : roles,
                    to:'roles'
                }
            );
        }        
    }
    navProtector();
    return ( 
        <div className={`text-2lg text-black  main-bg-gradient h-screen pt-5 px-4 transition-all ${shownav == true ? `` :  `sidebar none-active`}`}>
            <div className="flex items-center justify-center flex-col mt-8 mb-4">
                <div className="logo">
                    <img src={logo} alt="phantom"  />
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
 
const mapToState = (state) => {
    return{
        user :  state.user
    }
}
export default connect(mapToState,{})(SideBar);