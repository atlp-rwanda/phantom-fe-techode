import React from 'react';
export const LebalButton = ({ type ,svg, onclick }) => {
    return (        
        <button onClick={onclick} className={`p-1 md:p-2 border border-${type}-600 rounded-md  bg-${type}-100 hover:border-${type}-400 hover:bg-${type}-200 mr-2`} >
            <img src={svg} alt="Phantom"  />                                                                        
        </button> 
     );
}
 
, style = "" 
const buttonMaker = (color , text, style = "" , onclick ) => {
    switch(color){
        case "info":
            return(
                <button onClick={onclick} className={`p-1 ${style} md:px-2 border border-info-600 rounded-md text-info-600 text-xs  w-full h-full bg-info-100 hover:border-info-400 hover:bg-info-200 mr-2`} >
                    <p> 
                        {text}
                    </p>                                                                        
                </button> 
            );
        case "primary":
            return(
                <button onClick={onclick} className={`p-1 ${style} md:px-2 border border-primary-600 rounded-md text-primary-600 text-xs  bg-primary-100 hover:border-primary-400 hover:bg-primary-200 mr-2`} >
                    <p> 
                        {text}
                    </p>                                                                        
                </button> 
            );
        case "danger":
            return(
                <button onClick={onclick} className={`p-1 ${style} md:px-2 border border-danger-600 rounded-md text-danger-600 text-xs  w-full h-full bg-danger-100 hover:border-danger-400 hover:bg-danger-200 mr-2`} >
                    <p> 
                        {text}
                    </p>                                                                        
                </button> 
            );
        case "secondary":
            return(
                <button onClick={onclick} className={`p-1 ${style} md:px-2 border border-secondary-600 rounded-md text-secondary-600 text-xs  bg-secondary-100 hover:border-secondary-400 hover:bg-secondary-200 mr-2`} >
                    <p> 
                        {text}
                    </p>                                                                        
                </button> 
            );
        case "success":
            return(
                <button onClick={onclick} className={`p-1 ${style} md:px-2 border border-success-600 rounded-md text-success-600 text-xs  bg-success-100 hover:border-success-400 hover:bg-success-200 mr-2`} >
                    <p> 
                        {text}
                    </p>                                                                        
                </button> 
            );     
        default:
            return(
                <button onClick={onclick} >
                    {text == "" ? "Default button" : text }
                </button>
            )    
    }
}

export const LebalTextButton = ({ type : colorType , text , style , onclick  }) => {
    const Button = buttonMaker(colorType , text , style , onclick);
    return (Button);
}
 
