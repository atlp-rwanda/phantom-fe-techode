import React from 'react';
const SkeletonElem= ({type}) =>{
    const classes = `skeleton ${type}`

    return (
        <div className={classes}>

        </div>
    )
}

export default SkeletonElem;