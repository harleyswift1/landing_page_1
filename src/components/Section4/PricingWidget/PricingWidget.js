import "./PricingWidget.css";

export default function PricingWidget() {
    return (<div className="pricing-widget">
        <h1>Personal</h1>
        <b>Perfect if you're wanting a personal website</b>
        <h2>From <blue>$49.99</blue></h2>
        <div className={"divider"}/>
        <ul>
            <li>Item wewe</li>
            <li>Item ewwe</li>
            <li>Item e</li>
            <li>Item Oewrweewne</li>
            <li>Item werewrOewrne</li>
            <li>Item ewOne</li>
            <li>Item eerne</li>
            <li>Item Oerewne</li>
        </ul>
        <button className="pricing-widget-purchase-content">Customise Order</button>
    </div>)
}