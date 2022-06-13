import "./ContactForm.css"
import mail_icon from "../../../assets/icons/mail_icon.png"

export default function ContactForm() {
    return (<section className={"contact-section"}>
        <h1>Let's <blue>connect</blue>!</h1>
        <div className="contact-options-container">
            <div className="contact-options-container-item">
                <img src={mail_icon} alt=""/>
                <h2>harleyswiftus@icloud.com
                </h2>
            </div>
        </div>
    </section>)
}