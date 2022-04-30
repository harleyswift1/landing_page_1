import "./PricingWidget.css";

export default function PricingWidget(props) {
    const title = props.title;
    const description = props.description;
    const price = props.price;
    const items = props.items;

    return (<div className="pricing-widget">
        <h1>{title}</h1>
        <blue>{description}</blue>
        <h2>From <blue>${price}</blue></h2>
        <div className={"divider"}/>
        <ul>
            {items.map((item, index) => {
                return <li key={index}><b>{item}</b></li>
            })}
        </ul>
        <button className="pricing-widget-purchase-content">Customise Order</button>
    </div>)
}