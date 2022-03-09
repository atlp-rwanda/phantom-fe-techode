import React from 'react';
export const LebalButton = ({ type ,svg, onclick }) => {
    return (        
        <button className={`p-1 md:p-2 border border-${type}-600 rounded-md  bg-${type}-100 hover:border-${type}-400 hover:bg-${type}-200 mr-2`} >
            <img src={svg} alt="Phantom" onClick={onclick} />                                                                        
        </button> 
     );
}
 

const buttonMaker = (color , text) => {
    if(color == 'info' ){
        return(
            <button className={`p-1 md:px-2 border border-info-600 rounded-md text-info-600 text-xs  bg-info-100 hover:border-info-400 hover:bg-info-200 mr-2`} >
                <p> 
                    {text}
                </p>                                                                        
            </button> 
        )
    }
    if(color == 'primary' ){
        return(
            <button className={`p-1 md:px-2 border border-primary-600 rounded-md text-primary-600 text-xs  bg-primary-100 hover:border-primary-400 hover:bg-primary-200 mr-2`} >
                <p> 
                    {text}
                </p>                                                                        
            </button> 
        )
    }
    if(color == 'danger' ){
        return(
            <button className={`p-1 md:px-2 border border-danger-600 rounded-md text-danger-600 text-xs  bg-danger-100 hover:border-danger-400 hover:bg-danger-200 mr-2`} >
                <p> 
                    {text}
                </p>                                                                        
            </button> 
        )
    }
    if(color == 'secondary' ){
        return(
            <button className={`p-1 md:px-2 border border-secondary-600 rounded-md text-secondary-600 text-xs  bg-secondary-100 hover:border-secondary-400 hover:bg-secondary-200 mr-2`} >
                <p> 
                    {text}
                </p>                                                                        
            </button> 
        )
    }
}

export const LebalTextButton = ({ type : colorType , text  }) => {
    const button = buttonMaker(colorType , text);
    return (<button />);
}
 
