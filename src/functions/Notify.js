import { toast, ToastContainer } from 'react-toastify';
const Notify = (messsage , type) => {
    switch (type){
        case 'success':
            toast.success(`${messsage}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });
            break;    
        case 'error':
            toast.error(`${messsage}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });     
            break;
        case 'info':
            toast.info(`${messsage}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });     
            break;
        case "":
            toast.dismiss();
            break;
        default:
            break           
    } 
    
}

export default Notify;