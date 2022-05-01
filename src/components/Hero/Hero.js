import "./Hero.css";
import hero_image from "../../assets/images/hero_image.png";
import cloud from "../../assets/images/cloud.png";
import Button from "../Utils/Button/Button";

export default function Hero() {

    const handleClick = function() {
        alert("Clicked");
    }
    return (<section className={"hero"}>
        <div className="hero-content">
            <img src={hero_image} className={"hero-image"} alt=""/>
            <img src={cloud} className={"cloud-1"} alt=""/>
            <img src={cloud} className={"cloud-2"} alt=""/>
            <h1>The <blue>ultimate</blue> website solution for your business</h1>
            <Button onClick={handleClick} text={"Learn More"} />
        </div>
    </section>)
}