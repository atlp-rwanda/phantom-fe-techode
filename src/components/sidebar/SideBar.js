import React from 'react'
import { useEffect } from 'react'
import Links from '../links/Links';

import logo from '../../assets/svgs/logo.svg';
import line from '../../assets/svgs/sideBarline.svg';
import dashboard from '../../assets/svgs/dashboard.svg';
import driver from '../../assets/svgs/driver.svg'
import userSvg from '../../assets/svgs/user.svg';
import routes from '../../assets/svgs/routes.svg';
import bus from '../../assets/svgs/bus.svg';
import operatorIM from '../../assets/svgs/operator.svg';
import roles from '../../assets/svgs/roles.svg'
import busLink from '../../assets/svgs/busLink.svg';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { update } from '../../redux/actions/userActions'
import  checkAuth from '../../functions/checkAuth'

const SideBar = ({user,shownav, update}) => {
   
    const location = useLocation();
    const { type: userType } = user;

    useEffect(()=> {
        checkAuth(user, update);
    })


    /* ======== Start:: Public routes ===========  */ 
    let navLinks = [
        {   id: 1,
            linkName : userType == "admin" || userType == "operator"  ? 'Dashboard' : "Home" ,
            svgImage : dashboard,
            to: userType == "admin" || userType == "driver"  || userType == "" ? 'dashboard' : "dashboard_operator"
        },
        {
            id: 2,
            linkName : 'Drivers',
            svgImage : driver,
            to:'drivers'
        },
        {
            id: 3,
            linkName : 'Buses',
            svgImage : bus,
            to:'buses'
        }
    ]
    /* ======== End:: Public routes ===========  */ 
    const navProtector = () =>{
        if(userType == "admin"  || userType == "Admin"){
            navLinks.push( 
                {
                    id: navLinks.length + 1,
                    linkName : 'Operators',
                    svgImage : operatorIM,
                    to:'operators'
                }
            );
            navLinks.push( 
                {
                    id: navLinks.length + 1,
                    linkName : 'Roles',
                    svgImage : roles,
                    to:'roles'
                }
            );
           
           
        }   

        if(userType == "operator" || userType == "Operator" || userType.toLowerCase() == "admin"){
            navLinks.push(
                {
                    id: navLinks.length + 1,
                    linkName : 'Routes',
                    svgImage : routes,
                    to:'routes'
                }
            )
            navLinks.push(
                {
                    id: navLinks.length + 1,
                    linkName : 'Assign Buses',
                    svgImage : routes,
                    to:'assign_drivers_buses'
                }
            )
            navLinks.push(
                {
                    id: navLinks.length + 1,
                    linkName : 'Assign Routes',
                    svgImage : bus,
                    to:'assign_bus_route'
                }
            )
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

            <div className={`nav-bar ${  userType == "admin" ? 'mt-4' :  "mt-14"  } flex flex-col align-middle justify-center `}>
                <div className="nav-links ">
                    {
                        navLinks.map( (nav , index) => (
                            <Links key={"nav"+index} svgimage={nav.svgImage} linkname={nav.linkName} to={`/${nav.to}`} color={ `/${nav.to}` == location.pathname ? `text-active` : `text-white`}/>
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
export default connect(mapToState,{update})(SideBar);

