import "./Header.css"
import swift_logo from "../../assets/images/logo.png"

export default function Header(props) {
    const selected = props.selected;
    return (<nav>
            <div className="header-content">
                <img src={swift_logo} alt=""/>
                <nav>
                    <a href="/" className={selected === 0 ? "selected" : null}>Home</a>
                    <a href="/portfolio/" className={selected === 1 ? "selected" : null}>Portfolio</a>
                    <a href="/contact/" className={selected === 2 ? "selected" : null}>Contact</a>
                </nav>
                <p/>
            </div>
        </nav>)
}