import "./Footer.css"

export default function Footer() {
    return (<footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="process">the process</a></li>
                            <li><a href="transformations">previous transformations</a></li>
                            <li><a href="contact">contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>help</h4>
                        <ul>
                            <li><a href="order-status">order status</a></li>
                            <li><a href="payment-options">payment options</a></li>
                            <li><a href="quote">get a quote</a></li>
                            <li><a href="faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>legal</h4>
                        <ul>
                            <li><a href="terms">terms & conditions</a></li>
                            <li><a href="privacy-policy">privacy policy</a></li>
                            <li><a href="adjustments-policy">adjustments policy</a></li>
                            <li><a href="legal-notice">legal notice</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>)
}