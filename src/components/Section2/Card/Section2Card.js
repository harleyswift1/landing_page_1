import "./Section2Card.css"

export default function Section2Card(props) {
    const icon = props.icon;
    const title = props.title;
    const description = props.description;
    return(<article className={"section-2-card"}>
        <div className="section-2-card-content">
            <div className="section-2-card-content-header">
                <img src={icon} alt=""/>
                <h1>{title}</h1>
            </div>
            <p>{description}</p>
            <a href="learn"><blue>Learn More</blue></a>
        </div>
    </article>)
}
