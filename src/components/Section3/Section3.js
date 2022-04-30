import "./Section3.css";
import pc_icon from "../../assets/images/pc.png";

export default function Section3() {
    return (<section className={"section3"}>
        <div className="section3-content">
            <img src={pc_icon} alt=""/>
            <div className="section3-content-right">
                <h1>Included <blue>features</blue></h1>
                <div className="feature-list">
                    <p className="feature-list-item">• Animations</p>
                    <p className="feature-list-item">• Transitions</p>
                    <div className="feature-list-break"></div>
                    <p className="feature-list-item">• Trending Design</p>
                    <p className="feature-list-item">• Amazing SEO</p>
                    <div className="feature-list-break"></div>
                    <p className="feature-list-item">• Perfect Colour Schemes</p>
                    <p className="feature-list-item">• Images/Icons</p>
                </div>
                <b><blue>And lots more...</blue></b>
            </div>
        </div>
    </section>)
}