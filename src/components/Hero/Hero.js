import "./Hero.css";
import hero_image from "../../assets/images/hero_image.png";
import cloud from "../../assets/images/cloud.png";
import scroll_down_icon from "../../assets/icons/scroll_down_icon.png";

export default function Hero() {
    return (<section className={"hero"}>
        <div className="hero-content">
            <img src={hero_image} className={"hero-image"} alt=""/>
            <img src={cloud} className={"cloud-1"} alt=""/>
            <img src={cloud} className={"cloud-2"} alt=""/>
            <h1>Your website should <blue>define</blue> your business</h1>
            <h2>and not ruin it...</h2>
            <img className={"hero-scroll-down-icon"} src={scroll_down_icon} alt=""/>
        </div>
    </section>)
}