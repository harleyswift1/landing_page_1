import "./ContactForm.css"
import discord_icon from "../../assets/icons/discord_icon.png"
import gmail_icon from "../../assets/icons/gmail_icon.png"
import mcm_icon from "../../assets/icons/mc-market-icon.png"

export default function ContactForm() {
    return(<section className={"contact-section"}>
        <h1>Let's <blue>connect</blue>!</h1>
        <div className="contact-options-container">
            <div className="contact-options-container-item">
                <img src={discord_icon} alt=""/>
                <h2>Garys#7194</h2>
            </div>
            <div className="contact-options-container-item">
                <img src={gmail_icon} alt=""/>
                <h2>tomhender2001@gmail.com
                </h2>
            </div>
            <div className="contact-options-container-item">
                <img src={mcm_icon} alt=""/>
                <h2>Garys</h2>
            </div>
        </div>
    </section>)
}