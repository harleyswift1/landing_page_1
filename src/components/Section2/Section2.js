import "./Section2.css"
import icon1 from "../../assets/icons/responsive_icon.png";
import icon2 from "../../assets/icons/optimised_icon.png";
import icon3 from "../../assets/icons/modern_ico.png";
import icon4 from "../../assets/icons/price_icon.png";
import Section2Card from "./Card/Section2Card";

export default function Section2() {
    return (<section className={"section2"}>
        <h1>The <blue>simple</blue> solution</h1>
        <div className="section2-cards">
            <Section2Card icon={icon1} title={"Responsive"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, temporibus."}/>
            <Section2Card icon={icon2} title={"Optimised"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, temporibus."}/>
            <Section2Card icon={icon3} title={"Quality Design"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, temporibus."}/>
            <Section2Card icon={icon4} title={"Affordable"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, temporibus."}/>
        </div>
    </section>)
}