import React from 'react'

export const DangerButton = ({ name ,onclick }) => {
    return ( 
        <button className="w-full p-2 bg-danger-500 rounded text-white shadow hover:bg-danger-400 font-sans font-medium text-1xl " onClick={onclick} >
            {name}
        </button>
     );
}
export const WarningButton = ({ name ,onclick }) => {
    return ( 
        <button className="w-full p-2 bg-warning-100 rounded text-white shadow hover:bg-warning-100 font-sans font-medium text-1xl " onClick={onclick} >
            {name}
        </button>
     );
}
export const SuccessButton = ({ name ,onclick }) => {
    return ( 
        <button className="w-full p-2 bg-green-500 rounded text-white shadow hover:bg-green-400 font-sans font-medium text-1xl " onClick={onclick} >
            {name}
        </button>
     );
}
export const InfoButton = ({ name ,onclick, styles }) => {
    return ( 
        <button className={`p-1 md:px-2 border border-info-600 rounded-md text-info-600 text-xs  bg-info-100 hover:border-info-400 hover:bg-info-200 mr-2 ${styles}`} onClick={onclick} >
            {name}
        </button>
     );
}

export const PrimaryButton = ({ name, onclick }) => {
    return (<button type="submit" onClick={onclick} className="rounded-md bg-primary-600 text-white h-8 md:h-11 w-full md:w-5/6 mt-5 hover:bg-primary-600 mb-10">{name}</button>) 
}
 
export const Primary = ({ name ,onclick , styles }) => {
    return ( 
        <button className={`w-full bg-primary-600 rounded text-white shadow hover:bg-primary-400 font-sans sm:text-sm md:font-medium   text-xs p-1 px-2 ${styles}`} onClick={onclick}  >
            {name}
        </button>
     );
}
export const PermissionButton = ({ name ,onclick , styles, type, svg, alt }) => {
    return ( 
        <button className={` rounded-md text-${type}-600 bg-${type}-200 font-sans text-sm flex items-center  justify-between p-1 my-1  mx-2 ${styles}`} onClick={onclick}  >
            {name}
            <img src={svg} alt={alt} className={`mx-2`} />
        </button>
     );
}


export const ActionLabel = ({ name ,onclick , styles, svg, alt }) => {
    return ( 
        <button className={` rounded-md text-primary-600 bg-primary-200 font-sans text-sm flex items-center  justify-between p-1 my-1  mx-2 ${styles}`} onClick={onclick}  >
            {name}
            <img src={svg} alt={alt} className={`mx-2`} />
        </button>
     );
}

