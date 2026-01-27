import Avatar from '../../assets/avatar.png'
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialWithImg() {
    return (
        <div className="testimonial-img-container">
            <img 
                src={Avatar} 
                alt="Deadpool avatar" 
            />
            <div className='testimonial-content'>
                <RiDoubleQuotesL size='48px' style={{opacity: '0.3'}} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                <p className='name-address'>
                    <span>May Andersons</span><br />
                    Workcation, CTO
                </p>
            </div>
        </div>
    )
}