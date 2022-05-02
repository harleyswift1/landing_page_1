import "./PortfolioSection.css";
import portfolio_image_1 from "../../assets/images/portfolio-image.PNG";
import portfolio_image_2 from "../../assets/images/portfolio-image2.PNG";
import portfolio_image_3 from "../../assets/images/portfolio-image3.PNG";
import portfolio_image_4 from "../../assets/images/portfolio-image4.PNG";
import portfolio_image_5 from "../../assets/images/portfolio-image5.PNG";
import portfolio_image_6 from "../../assets/images/portfolio-image6.PNG";
import portfolio_image_7 from "../../assets/images/portfolio-image7.PNG";
import portfolio_image_8 from "../../assets/images/portfolio_image8.PNG";

export default function PortfolioSection() {
    return(<div className="portfolio-section">
        <h1>My <blue>portfolio</blue></h1>
        <div className="portfolio-section-content">
            <img src={portfolio_image_6} alt=""/>
            <img src={portfolio_image_5} alt=""/>
            <img src={portfolio_image_8} alt=""/>
            <img src={portfolio_image_2} alt=""/>
            <img src={portfolio_image_7} alt=""/>
            <img src={portfolio_image_1} alt=""/>
            <img src={portfolio_image_3} alt=""/>
            <img src={portfolio_image_4} alt=""/>
        </div>
        <h1>Dashboards, apps, websites, portfolios and more.</h1>
        <blue><h2>Get in touch today and let's build one together</h2></blue>
    </div>)
}