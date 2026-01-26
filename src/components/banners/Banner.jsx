import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiWarningFill } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi2";

export default function Banner({theme, message}) {

    let title = ''
    let text = ''

    switch(theme){
        case 'success':
            title = 'Congratulations!'
            text = 'Lorem ipsum dolor sit amet.'
            break;
        case 'warning':
            title = 'Attention'
            text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur?'
            break;
        case 'error':
            title = 'There is a problem with your application'
            text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, dolorem! Nihil, excepturi consequatur. Voluptatem.'
            break;
        case 'neutral':
            title = "Update available"
            text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque iste fuga maiores tempora. Reprehenderit voluptas eaque unde quas blanditiis assumenda nulla quis quod eius.'
            break;
    }

    return (
        <div className={`banner ${theme}`} >
            {theme === 'success' && <IoIosCheckmarkCircle size="20px" />}
            {theme === 'warning' && <PiWarningFill size='20px' />}
            {theme === 'error' && <IoIosCloseCircle size='20px' />}
            {theme === 'neutral' && <HiInformationCircle size='20px' />}
            <div>
                <h2>{title}</h2>
                {message === 'multiline' && <p>{text}</p>}
            </div>
        </div>
    )
}