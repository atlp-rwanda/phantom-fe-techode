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
export const InfoButton = ({ name ,onclick }) => {
    return ( 
        <button className="w-full p-2 bg-blue-500 rounded text-white shadow hover:bg-blue-400 font-sans font-medium text-1xl " onClick={onclick} >
            {name}
        </button>
     );
}
 
export const Primary = ({ name ,onclick }) => {
    return ( 
        <button className="w-full bg-primary-600 rounded text-white shadow hover:bg-primary-400 font-sans sm:text-base md:font-medium md:text-sm  text-xs p-1 px-2" onClick={onclick} >
            {name}
        </button>
     );
}