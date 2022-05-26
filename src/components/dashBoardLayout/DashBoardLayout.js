import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import SideBar from '../sidebar/SideBar';
import DashBoardHeader from '../header/DashBoardHeader';
import '../../assets/style/siderbar.css';
import main from '../../assets/js/main'

import { update } from '../../redux/actions/userActions'
import  checkAuth from '../../functions/checkAuth'

const DashBoardLayout = ({ children , revealModel, update, user }) => {
    const [showNav , setShowNav] = useState(false);
    const [deviceWidth, setWidth] = useState(window.innerWidth);
    const [loading, setLoading] = useState(true)

    const isMobile = deviceWidth <= 768;
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        if(isMobile) setShowNav(false);     
    }

    useEffect(async () => {
        await checkAuth(user, update)
        setLoading(false);
    });


    useEffect(() => {
            window.addEventListener('resize',() =>{
                handleWindowSizeChange();
                // console.log(window.innerHeight);
            } );
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []); 

    const showNavSecion = () => {
        let show = !showNav;
        setShowNav(show);
    }
    return ( 
        !loading &&
        <div className="flex flex-wrap w-screen h-screen overflow-hidden "   style={main.style} >
            {/* =============  Start::left ================= */}
                <div className= {`transition-all z-40 ${showNav == true ? `absolute sm:relative w-4/12 sm:w-3/12 lg:w-2/12 2xl:w-1/12` :  ` sidebar none-active`}` } >
                    {/*  Start::left side bar */}
                        <SideBar shownav={showNav} show={showNavSecion} id="sidebar"   />
                    {/*  End::left side bar */}
                </div>
            {/* ============= End::left ============= */}

            {/* ============= Start:: Right ============= */}
                <div className={`max-w-full max-h-full overflow-hidden ${showNav == true ? ` w-full sm:w-9/12 lg:w-10/12 2xl:w-11/12` :  ` w-screen`}`}>

                    {/* Start:: header  */}
                        <DashBoardHeader revealModel={revealModel} shownav={showNav} show={showNavSecion} id="header" /> 
                    {/* End:: Header */}

                    {/* Start:: Content */}
                        <div className="flex flex-wrap max-w-full h-95p overflow-x-hidden overflow-y-auto p-3 ">
                            { children }
                        </div>                        
                    {/* End:: Content */}
                </div>
            {/* ============= End:: Right =============== */}
        </div>
    );
}

const mapToState = (state) => {
    return{
        user: state.user
    }    
}
 
export default connect(mapToState, { update})(DashBoardLayout);