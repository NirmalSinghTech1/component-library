import { LuCircleCheck } from "react-icons/lu";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { HiOutlineXCircle } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi2";

export default function Toast({message = 'Success'}) {
    
    let messageText = '';
    let messageIcon = '';
    let className = ''

    switch(message){
        case 'Success':
            messageText = 'Your work has been saved';
            messageIcon = <LuCircleCheck size='24px' />;
            className = 'success';
            break;
        case 'Warning':
            messageText = 'A network error was detected';
            messageIcon = <HiOutlineExclamationCircle size='24px' />;
            className = 'warning';
            break;
        case 'Information':
            messageText = 'Please read updated information';
            messageIcon = <HiOutlineInformationCircle size='24px' />;
            className = 'information';
            break;
        case 'Error':
            messageText = 'Please re-save your work again';
            messageIcon = <HiOutlineXCircle size='24px' />;
            className = 'error';
            break;
    }

    return (
        <div className={`toast ${className}`}>
            {messageIcon}
            <div>
                <h5>{message}</h5>
                <p>{messageText}</p>
            </div>
        </div>
    )
}