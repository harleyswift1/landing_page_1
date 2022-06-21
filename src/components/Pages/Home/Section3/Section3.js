import "./Section3.css";
import pc_icon from "../../../../assets/images/pc.png";

export default function Section3() {
    return (<section className={"section3"}>
        <div className="section3-content">
            <div className="section3-content-text">
                <h1>What's included?</h1>
                <div className="feature-list">
                    <p className="feature-list-item">• 1 year warranty</p>
                    <p className="feature-list-item">• First year hosting FREE</p>
                    <p className="feature-list-item">• Design breakdown report</p>
                    <div className="feature-list-break"></div>
                    <p className="feature-list-item">• Technical support</p>
                    <p className="feature-list-item">• Site maintenance</p>
                    <p className="feature-list-item">• Free design & UX advice</p>
                    <div className="feature-list-break"></div>
                    <p className="feature-list-item">• Downloadable site files</p>
                    <p className="feature-list-item">• DDoS protection</p>
                    <p className="feature-list-item">• Lots more...</p>
                    <div className="feature-list-break"></div>
                </div>
                <b>
                    <blue>And lots more...</blue>
                </b>
            </div>
            <img src={pc_icon} alt=""/>
        </div>
    </section>)
}