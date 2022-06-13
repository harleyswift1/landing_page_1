import "./Section2Card.css"
import {useNavigate} from "react-router";

export default function Section2Card(props) {
    const icon = props.icon;
    const title = props.title;
    const description = props.description;
    const navigate = useNavigate();

    function handleClick() {
        navigate("/process");
    }
    return (<article className={"section-2-card"}>
        <div className="section-2-card-content">
            <div className="section-2-card-content-header">
                <img src={icon} alt=""/>
                <h1>{title}</h1>
            </div>
            <p>{description}</p>
                <blue onClick={handleClick} >Learn More</blue>
        </div>
    </article>)
}
