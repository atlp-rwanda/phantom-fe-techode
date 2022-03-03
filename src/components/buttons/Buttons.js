import React from 'react'

export const DangerButton = ({ name ,onclick }) => {
    return ( 
        <button className="w-full p-2 bg-red-500 rounded text-white shadow hover:bg-red-400 font-sans font-medium text-1xl " onClick={onclick} >
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
        <button className={`w-full p-2 bg-blue-500 rounded text-white shadow hover:bg-blue-400 font-sans font-medium text-1xl ${styles}`} onClick={onclick} >
            {name}
        </button>
     );
}
export const PrimaryButton = ({ name, onClick }) => {
    return (<button type="submit" className="rounded-md bg-primary-600 text-white h-8 md:h-11 w-full md:w-5/6 mt-5 hover:bg-primary-600 mb-10">{name}</button>) 
}
 
export const Primary = ({ name ,onclick , styles }) => {
    return ( 
        <button className={`w-full bg-primary-600 rounded text-white shadow hover:bg-primary-400 font-sans sm:text-sm md:font-medium   text-xs p-1 px-2 ${styles}`} onClick={onclick}  >
            {name}
        </button>
     );
}
export const PermissionButton = ({ name ,onclick , styles, type, svg, alt, styleDelete }) => {
    return ( 
        <button className={`border border-${type}-600 hover:border-${type}-400 rounded text-${type}-600 shadow font-sans sm:text-sm md:font-medium   text-xs p-1 px-2 ${styles}`} onClick={onclick}  >
            {name}
            <img src={svg} alt={alt} className={styleDelete} />
        </button>
     );
}

