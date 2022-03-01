import React, { useState } from 'react'
import SideBar from '../sidebar/SideBar';
import DashBoardHeader from '../header/DashBoardHeader';
import '../../assets/style/siderbar.css';
import main from '../../assets/js/main'


const DashBoardLayout = ({ children }) => {
    const [showNav , setShowNav] = useState(true);
<<<<<<< HEAD
    const [showModel , setShowModel] = useState(false);
=======
>>>>>>> ac27f0b (Delivering responsive dashboard layout)
    const showNavSecion = () => {
        let show = !showNav;
        setShowNav(show);
    }
    return ( 
        <div className="flex flex-wrap w-screen h-screen overflow-hidden "   style={main.style} >
            {/* =============  Start::left ================= */}
<<<<<<< HEAD
                <div className= {`transition-all  ${showNav == true ? ` w-4/12 lg:w-2/12 2xl:w-1/12` :  ` sidebar none-active`}` } >
=======
                <div className= {`transition-all ${showNav == true ? ` w-4/12 lg:w-2/12 2xl:w-1/12` :  ` sidebar none-active`}` } >
>>>>>>> ac27f0b (Delivering responsive dashboard layout)
                    {/*  Start::left side bar */}
                        <SideBar shownav={showNav} show={showNavSecion}  />
                    {/*  End::left side bar */}
                </div>
<<<<<<< HEAD
            {/* ============= End::left ============= */}

            {/* ============= Start:: Right ============= */}
                <div className={`max-w-full max-h-full overflow-hidden ${showNav == true ? ` w-8/12 lg:w-10/12 2xl:w-11/12` :  ` w-screen`}`}>
=======
            {/* ============= Start::left ============= */}

            {/* ============= Start:: Right ============= */}
                <div className={`${showNav == true ? ` w-8/12 lg:w-10/12 2xl:w-11/12` :  `w-screen`}`}>
>>>>>>> ac27f0b (Delivering responsive dashboard layout)
                  
                    {/* Start:: header  */}
                        <DashBoardHeader shownav={showNav} show={showNavSecion}  /> 
                    {/* End:: Header */}
                    {/* Start:: Content */}
<<<<<<< HEAD
                    <div className="flex flex-wrap max-w-full h-95p overflow-x-hidden overflow-y-auto p-3 ">
=======
                    <div className="flex flex-wrap max-w-full max-h-full overflow-y-auto ">
>>>>>>> ac27f0b (Delivering responsive dashboard layout)
                        { children }
                    </div>                        
                    {/* End:: Content */}
                </div>
            {/* ============= End:: Right =============== */}
        </div>
    );
}
 
export default DashBoardLayout;