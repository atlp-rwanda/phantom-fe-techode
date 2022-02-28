import React from "react";
import { Link } from "react-router-dom";


const Links = ({svgimage , linkname , to , color}) => {
    return ( 
        <Link to={to} className="flex items-center  mt-9 link md:px-3" >
            <span className="link-log w-1/3 md:w-8"> 
                <img src={svgimage} alt="phantom"   />                                                
            </span>
            <span className={`link-name ${color} font-sans text-xs md:text-sm md:font-bold  w-1/3 text-left`}>
                {linkname}
            </span>                
        </Link>    
     );
}
 
export default Links;