import "./TheProcess.css"
import ProcessCard from "./Card/ProcessCard";
import icon1 from "../../../assets/icons/responsive_icon.png";
import icon2 from "../../../assets/icons/optimised_icon.png";
import icon3 from "../../../assets/icons/modern_ico.png";
import icon4 from "../../../assets/icons/price_icon.png";
import arrow_icon from "../../../assets/icons/right_arrow.png"
import process_image from "../../../assets/images/process_image.png"

export default function TheProcess() {
    return (<section className={"process"}>
        <div className="process-header">
            <div className="process-header-text">
                <h1>
                    <blue>The Process</blue>
                </h1>
                <p>From beginning to end, your website production will consist of 4 main stages. Briefing, Development, Overview and Deployment. All
                    customers will receive aftercare for their website which will include assistance with general enquiries.</p>
            </div>
            <img src={process_image} alt=""/>
        </div>
        <div className="process-cards">
            <ProcessCard icon={icon1} title={"Briefing"} text={"Your Developer will chat to you about the goal you’re wanting to accomplish with your website, the theme of your website, and the style. A one-time-payment quote, a time frame and other information will be discussed."}/>
            <img className={"arrow-icon"} src={arrow_icon} alt=""/>
            <ProcessCard icon={icon2} title={"Development"} text={"Development will start on your website and your developer will open a private testing page where you can see your site's progress. Your developer might as you questions along the way to make sure the website is exactly as you want it!"}/>
            <img className={"arrow-icon"} src={arrow_icon} alt=""/>
            <ProcessCard icon={icon3} title={"Overview"} text={"After the final draft of your website is completed, your developer will chat to you about what could be added, removed or changed. After both parties have agreed on a final draft, deployment will begin"}/>
            <img className={"arrow-icon"} src={arrow_icon} alt=""/>
            <ProcessCard icon={icon4} title={"Deployment"} text={"Your site will be hosting using a custom domain of your choice with secure DDoS protection. You will have access to a dashboard where you can change all your hosting settings. Aftercare will be provided to help you with managing your site."}/>
        </div>
    </section>)
}