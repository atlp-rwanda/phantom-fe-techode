import React from 'react'
import Links from '../links/Links';

import logo from '../../assets/svgs/logo.svg';
import line from '../../assets/svgs/sideBarline.svg';
import dashboard from '../../assets/svgs/dashboard.svg';
import driver from '../../assets/svgs/driver.svg'
import userSvg from '../../assets/svgs/user.svg';
import routes from '../../assets/svgs/routes.svg'
import operator from '../../assets/svgs/operator.svg'

const SideBar = ({shownav}) => {
    return ( 
        <div className={`text-2lg text-black  main-bg-gradient h-screen pt-5 px-4 transition-all ${shownav == true ? `` :  `sidebar none-active`}`}>
            <div className="flex items-center justify-center flex-col mt-6 mb-4">
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
                    <Links svgimage={dashboard} linkname="Dashboard" to="" color='text-white'/>  
                    <Links svgimage={driver} linkname="Driver" to="" color='text-active'/>
                    <Links svgimage={routes} linkname="Routes" to="" color='text-white'/>
                    <Links svgimage={userSvg} linkname="Users" to="" color='text-white'/>
                    <Links svgimage={operator} linkname="Operator" to="" color='text-white'/>
                </div>
            </div>
        </div>
    );
}
 
export default SideBar;