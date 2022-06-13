import "./Section1.css";
import pc_icon from "../../../../assets/images/pc.png";
import Button from "../../../Utils/Button/Button";
import {useNavigate} from "react-router";

export default function Section1() {
    const navigate = useNavigate();

    const handleClick = function () {
        navigate("/contact")
    }

    return (<section id={"section1"} className={"section1"}>
        <div className="section1-content">
            <div className="section1-content-left">
                <h1>What <blue>we</blue> do</h1>
                <p>Your website is the face of your business - and a badly designed website can statistically decrease sales and recognition.</p>
                <p>We offer various types of custom-made websites including blogs, business, and personal websites, personalised for you.</p>
                <Button onClick={handleClick} text={"Get A Quote"}/>
            </div>
            <img src={pc_icon} alt=""/>
        </div>
    </section>)
}