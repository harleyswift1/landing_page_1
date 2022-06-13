import "./Error404.css"
import error404image from "../../../assets/images/error404.png";
import Button from "../../Utils/Button/Button";
import {useNavigate} from "react-router";

export default function Error404() {
    const navigate = useNavigate();
    function sendHome() {
        navigate("/")
    }

    return (<div className="error-page">
        <div className="error-page-contents">
            <div className={"error-page-contents-text"}>
                <h1>Oops...</h1>
                <p>Look like this page doesn't exist, you should probably go back home!</p>
                <Button width={120} text={"Go Back"} onClick={sendHome}/>
            </div>
            <img src={error404image} alt=""/>
        </div>
    </div>)
}