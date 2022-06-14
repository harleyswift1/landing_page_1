import "./Section4.css"
import PricingWidget from "../PricingWidget/PricingWidget";
import {featureList} from "./featureList";

export default function Section4() {
    const featuresJson = featureList;
    return (<section className="section4">
        <h1>Pricing <blue>&</blue> Packages</h1>
        <div className="section4-content">
            <PricingWidget title={"Personal"} description={"Perfect for freelancers or emerging businesses"} price={"49.99"} items={featuresJson.features1}/>
            <PricingWidget title={"Professional"} description={"Suitable for existing businesses to increase exposure"} price={"249.99"} items={featuresJson.features2}/>
            <PricingWidget title={"Business"} description={"For large enterprises with many purposes"} price={"500+"} items={featuresJson.features3}/>
        </div>
    </section>)
}