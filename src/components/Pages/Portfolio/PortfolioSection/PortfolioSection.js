import "./PortfolioSection.css";
import transform_icon from "../../../../assets/icons/transform_icon.png";
import portfolio_image_1 from "../../../../assets/images/website-1-before.png";
import portfolio_image_1_after from "../../../../assets/images/website-1-after.png";

export default function PortfolioSection() {
    return (<div className="portfolio-section">
        <div className="portfolio-section-content">
            <div className="portfolio-section-content-cell">
                <img className={"portfolio-section-content-image"} src={portfolio_image_1} alt=""/>
                <img className={"portfolio-section-content-icon"} src={transform_icon} alt=""/>
                <img className={"portfolio-section-content-image"} src={portfolio_image_1_after} alt=""/>
            </div>
            <div className="portfolio-section-content-cell">
                <img className={"portfolio-section-content-image"} src={portfolio_image_1} alt=""/>
                <img className={"portfolio-section-content-icon"} src={transform_icon} alt=""/>
                <img className={"portfolio-section-content-image"} src={portfolio_image_1_after} alt=""/>
            </div>
            <div className="portfolio-section-content-cell">
                <img className={"portfolio-section-content-image"} src={portfolio_image_1} alt=""/>
                <img className={"portfolio-section-content-icon"} src={transform_icon} alt=""/>
                <img className={"portfolio-section-content-image"} src={portfolio_image_1_after} alt=""/>
            </div>
            <div className="portfolio-section-content-cell">
                <img className={"portfolio-section-content-image"} src={portfolio_image_1} alt=""/>
                <img className={"portfolio-section-content-icon"} src={transform_icon} alt=""/>
                <img className={"portfolio-section-content-image"} src={portfolio_image_1_after} alt=""/>
            </div>
        </div>
        <h1>Dashboards, apps, websites, portfolios and more.</h1>
        <blue><h2>Get in touch today and let's build one together</h2></blue>
    </div>)
}