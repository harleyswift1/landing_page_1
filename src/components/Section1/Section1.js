import "./Section1.css";
import pc_icon from "../../assets/images/pc.png";
import Button from "../Utils/Button/Button";

export default function Section1() {
    return(<div className={"section1"}>
        <div className="section1-content">
            <div className="section1-content-left">
                <h1>My <blue>Services</blue></h1>
                <p>Swift Development offers various types of custom-made websites including blogs, business and personal websites, personalised for you.</p>
                <Button text={"Get A Quote"} />
            </div>
            <img src={pc_icon} alt=""/>
        </div>
    </div>)
}