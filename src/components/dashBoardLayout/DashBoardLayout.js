import React, { useEffect, useState } from 'react'
import SideBar from '../sidebar/SideBar';
import DashBoardHeader from '../header/DashBoardHeader';
import '../../assets/style/siderbar.css';
import main from '../../assets/js/main'


const DashBoardLayout = ({ children }) => {
    const [showNav , setShowNav] = useState(true);
    const [showModel , setShowModel] = useState(false);
    const [deviceWidth, setWidth] = useState(window.innerWidth);

    const isMobile = deviceWidth <= 768;
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        if(isMobile) setShowNav(false);     
    }
    useEffect(() => {
            window.addEventListener('resize',() =>{
                handleWindowSizeChange();
                console.log(window.innerHeight);
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
        <div className="flex flex-wrap w-screen h-screen overflow-hidden "   style={main.style} >
            {/* =============  Start::left ================= */}
                <div className= {`transition-all  ${showNav == true ? ` w-4/12 lg:w-2/12 2xl:w-1/12` :  ` sidebar none-active`}` } >
                    {/*  Start::left side bar */}
                        <SideBar shownav={showNav} show={showNavSecion} id="sidebar"   />
                    {/*  End::left side bar */}
                </div>
            {/* ============= End::left ============= */}

            {/* ============= Start:: Right ============= */}
                <div className={`max-w-full max-h-full overflow-hidden ${showNav == true ? ` w-8/12 lg:w-10/12 2xl:w-11/12` :  ` w-screen`}`}>

                    {/* Start:: header  */}
                        <DashBoardHeader shownav={showNav} show={showNavSecion} id="header" /> 
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
 
export default DashBoardLayout;