import "./Section2.css"
import icon1 from "../../../../assets/icons/responsive_icon.png";
import icon2 from "../../../../assets/icons/optimised_icon.png";
import icon3 from "../../../../assets/icons/modern_ico.png";
import icon4 from "../../../../assets/icons/price_icon.png";
import icon5 from "../../../../assets/icons/trending_icon.png";
import icon6 from "../../../../assets/icons/bespoke_icon.png";
import icon7 from "../../../../assets/icons/functional_icon.png";
import icon8 from "../../../../assets/icons/easy_process_icon.png";
import Section2Card from "./Card/Section2Card";
import {useState} from "react";

function OneRow() {
    return (<section className={"section2"}>
        <h1>The <blue>simple</blue> solution</h1>
        <div className="section2-cards">
            <Section2Card icon={icon1} title={"Responsive"} description={"All our websites look amazing no matter what device they're viewed on"}/>
            <Section2Card icon={icon2} title={"Optimised"} description={"Promising all our clients the fastest speeds on every click-to-action"}/>
            <Section2Card icon={icon3} title={"Quality Design"} description={"Professionally made designs inspired by the latest design trends"}/>
            <Section2Card icon={icon4} title={"Affordable"} description={"No matter your budget, we can make something work for you"}/>
        </div>
    </section>);
}

function TwoRows() {
    return (<section className={"section2"}>
        <h1>The <blue>simple</blue> solution</h1>
        <div className="section2-cards">
            <Section2Card icon={icon1} title={"Responsive"} description={"All our websites look amazing no matter what device they're viewed on"}/>
            <Section2Card icon={icon2} title={"Optimised"} description={"Promising all our clients the fastest speeds on every click-to-action"}/>
            <Section2Card icon={icon3} title={"Quality Design"} description={"Professionally made designs inspired by the latest design trends"}/>
            <Section2Card icon={icon4} title={"Affordable"} description={"No matter your budget, we can make something work for you"}/>

            <Section2Card icon={icon5} title={"Trending"} description={"We are constantly researching the newest design trends"}/>
            <Section2Card icon={icon6} title={"Bespoke"} description={"Your business, your website - we can make them match"}/>
            <Section2Card icon={icon7} title={"Functional"} description={"Multifunctional websites allow for better customer interaction"}/>
            <Section2Card icon={icon8} title={"Easy Process"} description={"An easy process that includes no hidden costs or agreements"}/>
        </div>
    </section>);
}

export default function Section2() {

    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth);
    });

    if (width <= 800) {
        return(<OneRow />)
    } else {
        return(<TwoRows />)
    }
}