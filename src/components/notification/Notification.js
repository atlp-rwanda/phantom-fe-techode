import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import notification from '../../assets/svgs/notification.svg'

const Notification = () => {
    const [showbadge, setShowbadge] = useState(true)

    notification = useSelector((state) => state.notifications);
    const hideShowbadge = () => {
        setShowbadge(false)
    }
    return ( 
        
        <div>
                <button onClick={hideShowbadge} id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" className="z-10 flex flex-row md:ml-12 md:pl-80 md:mb-0 rounded-lg text-sm px-4 py-2.5" type="button">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8999 17.7533L19.6732 17.5534C19.0302 16.9804 18.4673 16.3234 17.9999 15.6C17.4894 14.6017 17.1834 13.5115 17.0999 12.3934V9.10002C17.1043 7.34376 16.4672 5.64633 15.3084 4.32667C14.1495 3.007 12.5486 2.15592 10.8065 1.93335V1.07335C10.8065 0.837307 10.7128 0.610932 10.5459 0.444025C10.379 0.277117 10.1526 0.18335 9.91654 0.18335C9.68049 0.18335 9.45412 0.277117 9.28721 0.444025C9.1203 0.610932 9.02654 0.837307 9.02654 1.07335V1.94668C7.30004 2.1853 5.71852 3.04152 4.57489 4.35675C3.43126 5.67199 2.80302 7.35711 2.80654 9.10002V12.3934C2.72304 13.5115 2.41706 14.6017 1.90654 15.6C1.44712 16.3216 0.893333 16.9785 0.25987 17.5534L0.0332031 17.7533V19.6334H19.8999V17.7533Z" fill="#0384C6"/>
                <path d="M8.21289 20.3334C8.27135 20.756 8.48075 21.1431 8.80242 21.4233C9.12408 21.7036 9.53628 21.8579 9.96289 21.8579C10.3895 21.8579 10.8017 21.7036 11.1234 21.4233C11.445 21.1431 11.6544 20.756 11.7129 20.3334H8.21289Z" fill="#0384C6"/>
                </svg>{showbadge && <sup className="text-xs md:text-sm w-4 md:w-5 h-4 md:h-5 bg-danger-600 text-white rounded-full md:px-1 md:py-1/2">{notification.length}</sup>}
            </button>

            <div id="dropdownBottom" className="hidden z-10 w-44 md:w-80 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBottomButton">
                {notification.map( (msg, index) => (
                <li key={index}>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{msg.message}</a>
                </li>
                ))}
                </ul>
            </div>
        </div>
     );
}
 
export default Notification;