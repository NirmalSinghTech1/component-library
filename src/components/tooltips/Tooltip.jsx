import { HiOutlineInbox } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export default function Tooltip({theme = 'black', style = 'bold'}) {
    return (
        <div className={`tooltip-container ${style}-${theme}`}>
            <HiOutlineInbox size='32px' />
            <div className="tooltip-content">
                <h4>Achieve notes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
            </div>
            <IoCloseOutline className="close-svg" />
        </div>   
    )
}