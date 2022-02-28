import React from 'react';
export const LebalButton = ({ type ,svg }) => {
    return (        
        <button className={`p-1 md:p-2 border border-${type}-600 rounded-md  bg-${type}-100 hover:border-${type}-400 hover:bg-${type}-200 mr-2`} >
            <img src={svg} alt="Phantom" />                                                                        
        </button> 
     );
}
 
export const LebalTextButton = ({ type , text  }) => {
    console.log();
    return ( 
        <button className={`p-1 md:px-2 border border-${type}-600 rounded-md text-${type}-600 text-xs  bg-${type}-100 hover:border-${type}-400 hover:bg-${type}-200 mr-2`} >
            <p> 
                {text}
            </p>                                                                        
        </button>
      
     );
}
 
