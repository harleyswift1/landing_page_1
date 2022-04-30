import "./Section4.css"
import PricingWidget from "./PricingWidget/PricingWidget";

export default function Section4() {
    return (<div className="section4">
        <h1>Pricing <blue>&</blue> Packages</h1>
        <div className="section4-content">
            <PricingWidget/>
            <PricingWidget/>
            <PricingWidget/>
        </div>
    </div>)
}