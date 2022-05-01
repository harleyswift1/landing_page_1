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
            <Section2Card icon={icon1} title={"Responsive"} description={"All my websites look amazing no matter what device they're viewed on"}/>
            <Section2Card icon={icon2} title={"Optimised"} description={"Promising all my clients the fastest speeds on every CTA"}/>
            <Section2Card icon={icon3} title={"Quality Design"} description={"Professionally made designs inspired by the latest design trends"}/>
            <Section2Card icon={icon4} title={"Affordable"} description={"No matter your budget, we can make something work"}/>
        </div>
    </section>)
}