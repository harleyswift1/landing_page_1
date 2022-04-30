import "./Header.css"
import swift_logo from "../../assets/images/swift-logo.png"

export default function Header() {
    return(
        <nav>
           <div className="header-content">
               <img src={swift_logo} alt=""/>
               <nav>
                   <a href="/" className={"selected"}>Home</a>
                   <a href="/portfolio/">Portfolio</a>
                   <a href="/contact/">Contact</a>
               </nav>
               <p />
           </div>
        </nav>
    )
}