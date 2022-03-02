import React from "react";
import "../../assets/style/SkeletonSignIn.css" 
 
const SkeletonElement = ({ type, styles }) => {
    const classes = `skeleton ${type}`
    return ( 
        <div className={`${classes} ${styles}`}></div>
     );
}
 
export default SkeletonElement;