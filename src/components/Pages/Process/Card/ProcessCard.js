import "./ProcessCard.css"

export default function ProcessCard(props) {
    const icon = props.icon;
    const title = props.title;
    const text = props.text;

    return (<article className={"process-card"}>
        <div className="process-card-content">
                <img src={icon} alt=""/>
                <div className="divider" />
                <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </article>)
}
