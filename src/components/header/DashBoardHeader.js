import React from 'react';
import menu from '../../assets/svgs/menu.svg';
import search from '../../assets/svgs/search.svg';
import profile from "../../assets/img/profile.jpg";

const DashBoardHeader = ({ shownav ,show }) => {
    return ( 
        <div className="w-full h-16 md:h-20 shadow-lg bg-gray-50 flex justify-between items-center px-3 sm:px-9 ">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className={` bagger p-2 z-10 `}  onClick={() => show()} >
                <img src={menu} alt="phantom"  />     
            </div>
            <div className="w-2/3 ml-2 search-input sm:w-1/4 h-8 md:h-9 flex items-center "> 
=======
            <div className="bagger p-2" className={` sm:hidden `}  onClick={() => show()} >
                <img src={menu} alt="phantom"  />     
            </div>
            <div className="w-2/3 ml-2  search-input sm:w-1/4 h-8 md:h-9 flex items-center "> 
>>>>>>> ac27f0b (Delivering responsive dashboard layout)
=======
            <div className={` bagger p-2 z-10 sm:hidden `}  onClick={() => show()} >
=======
            <div className={` bagger p-2 z-10 `}  onClick={() => show()} >
>>>>>>> 51b1ae9 (Adding skeleton)
                <img src={menu} alt="phantom"  />     
            </div>
            <div className="w-2/3 ml-2 search-input sm:w-1/4 h-8 md:h-9 flex items-center "> 
>>>>>>> 295aa22 (Derivering responsiveness for drivers/operators)
                <div className="grouped-input bg-secondary-40 flex items-center shadow h-full w-full rounded-md">
                    <input type="text" name="search" className="h-full bg-transparent border-0 outline-none px-5 font-sans font-medium text-secondary-50 w-4/5" placeholder="Search..." />
                    <div className="w-1/5 flex justify-center">
                        <img src={search} alt="phantom"  />                        
                    </div>                    
                </div>                
            </div>     
            <div className="w-1/3 sm:w-2/4 h-12 flex items-center float-right mr-6 cursor-pointer  ">
                <div className="profile w-full">
                    <img src={profile} alt="phantom" className="rounded-full h-9 w-9 md:h-12 md:w-12 float-right border-2 border-mainColor" />    
                </div>                                        
            </div>            
        </div>
    );
}
 
export default DashBoardHeader;