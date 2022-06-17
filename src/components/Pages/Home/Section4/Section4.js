import "./Section4.css"
import Button from "../../../Utils/Button/Button";
import report_image from "../../../../assets/images/report_image.png";
import {useNavigate} from "react-router";

export default function Section4() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/contact");
    }
    return(<div className="section4">
        <div className="section4-content">
            <img src={report_image} alt=""/>
            <div className="section4-content-text">
                <h1>Don't want a brand new website?</h1>
                <h2><blue>Or did you build your website yourself?</blue></h2>
                <p>We understand that not everyone needs a <b>brand new</b> website. Some just need upgrading!</p>
                <p>That's why we also offer a full website writeup/report that will detail every single existing
                    aspect of your website that could be improved. Using common best practices and UI/UX laws, we
                    will backup our information using statistics. This will allow you to improve your website from home!</p>
                <Button text={"Contact Us"} onClick={handleClick}/>
            </div>
        </div>
    </div>)
}