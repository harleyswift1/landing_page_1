import "./Hero.css";
import hero_image from "../../assets/images/hero_image.png";
import cloud from "../../assets/images/cloud.png";
import Button from "../Utils/Button/Button";

export default function Hero() {
    return (<div className={"hero"}>
        <div className="hero-content">
            <img src={hero_image} className={"hero-image"} alt=""/>
            <img src={cloud} className={"cloud-1"} alt=""/>
            <img src={cloud} className={"cloud-2"} alt=""/>
            <h1>The <blue>ultimate</blue> website solution for your business</h1>
            <Button text={"Learn More"} />
        </div>
    </div>)
}