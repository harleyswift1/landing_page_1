import "./PricingWidget.css";
import Button from "../../Utils/Button/Button";

export default function PricingWidget(props) {
    const title = props.title;
    const description = props.description;
    const price = props.price;
    const items = props.items;

    return (<article className="pricing-widget">
        <h1>{title}</h1>
        <blue>{description}</blue>
        <h2>From <blue><h1>${price}</h1></blue></h2>
        <div className={"divider"}/>
        <ul>
            {items.map((item, index) => {
                return <li key={index}><b>{item}</b></li>
            })}
        </ul>
        <Button width={"18rem"} text={"Customize Order"} />
    </article>)
}