import "./Section1A.css"
import icon1 from "../../../../assets/icons/design_icon.png"
import icon2 from "../../../../assets/icons/web_development.png";
import icon3 from "../../../../assets/icons/web_hosting.png";
import icon4 from "../../../../assets/icons/web_maintainance.png";
import Button from "../../../Utils/Button/Button";
import {useNavigate} from "react-router";

export default function Section1A() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/process");
    }
    return (<div className={"section1a"}>
        <div className="section1a-content">
            <div  className="section1a-content-cell">
                <h1>Web Design</h1>
                <img src={icon1} alt=""/>
                <Button onClick={handleClick} width={100} text={"Learn More"} />
            </div>
            <div className="section1a-content-cell-divider" />
            <div className="section1a-content-cell">
                <h1>Web Development</h1>
                <img src={icon2} alt=""/>
                <Button onClick={handleClick} width={100} text={"Learn More"} />
            </div>
            <div className="section1a-content-cell-divider" />
            <div className="section1a-content-cell">
                <h1>Web Hosting</h1>
                <img src={icon3} alt=""/>
                <Button onClick={handleClick} width={100} text={"Learn More"} />
            </div>
            <div className="section1a-content-cell-divider" />
            <div className="section1a-content-cell">
                <h1>Site Maintenance</h1>
                <img src={icon4} alt=""/>
                <Button onClick={handleClick} width={100} text={"Learn More"} />
            </div>

        </div>
    </div>)
}