import "./ContactForm.css"
import mail_icon from "../../../assets/icons/mail_icon.png";
import clock_icon from "../../../assets/icons/clock_icon.png";

export default function ContactForm() {
    return (<section className={"contact"}>
        <div className="contact-header">
            <div className="contact-form">
                <form>
                    <ul>
                        <li>
                            <label htmlFor="mail"><span>Email</span></label>
                            <input type="email" id="mail" name="user_email"/>
                        </li>
                        <li>
                            <label htmlFor="existingSite"><span>Your Website (optional)</span></label>
                            <input type="email" id="existingSite" name="existing_site"/>
                        </li>
                        <li>
                            <label htmlFor="msg"><span>Your Request</span></label>
                            <textarea rows="6" cols="20"></textarea>
                        </li>
                        <li>
                            <input type="submit"/>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="contact-header-text">
                <div className={"contact-header-text-info"}><img src={mail_icon} alt="email"/>
                    <p>harleyswiftus@icloud.com</p></div>
                <div className={"contact-header-text-info"}><img src={clock_icon} alt="email"/>
                    <p>Mon - Sat, 10am-7pm</p></div>
                <h1>
                    <blue>Contact Us</blue>
                </h1>
                <p>We can build your dream website that will attract more traffic to your site, increasing exposure, recognition, and
                    reputation. It's a one time cost, for a lifetime of change. Get in touch for a free quote!</p>
            </div>
        </div>

    </section>)
}