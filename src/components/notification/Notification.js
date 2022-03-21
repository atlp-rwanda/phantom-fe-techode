import React from "react";
import notification from '../../assets/svgs/notification.svg'

const Notification = ({ onClick }) => {
    return ( 
        <img src={notification} onClick={onClick} alt="phantom" className='md:ml-12 md:pl-80'/>
     );
}
 
export default Notification;