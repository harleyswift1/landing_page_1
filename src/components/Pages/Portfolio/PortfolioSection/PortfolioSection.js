import "./PortfolioSection.css";
import transformation_header_image from "../../../../assets/images/transformation_header_image.png";

import portfolio_image_1 from "../../../../assets/images/website-1-after.png";

export default function PortfolioSection() {
    return (<section className="portfolio-section">
        <div className="portfolio-header">
            <img src={transformation_header_image} alt=""/>
            <div className="portfolio-header-text">
                <h1>
                    <h3>
                        <blue>Our Transformations</blue>
                    </h3>
                </h1>
                <p>Below you can find a few of our previous transformations from our clients.</p>
            </div>
        </div>
        <div className="portfolio-images-section">
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
            <div className="portfolio-image-cell">
                <img src={portfolio_image_1} alt=""/>
            </div>
        </div>
    </section>)
}