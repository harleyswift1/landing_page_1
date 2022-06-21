import "./Header.css"
import swift_logo from "../../assets/images/logo.png"
import toggle_icon from "../../assets/icons/expand.png";
import {useState} from "react";
import {NavLink} from "react-router-dom";


export default function Header(props) {

    const [expanded, setExpanded] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    let selected = props.selected;

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth);
    });


    function expandHeader() {
        console.log("Expanded")
        setExpanded(true)
    }

    function collapseHeader() {
        console.log("Collapsed")
        setExpanded(false)
    }

    function handleClick() {
        expanded ? collapseHeader() : expandHeader();
    }

    if (width <= 800) {
        if (expanded) {
            return (<div className={"navbar-extended"}>
                <nav className={"navbar-extended-links"}>
                    <img onClick={handleClick} src={toggle_icon} className={"navbar-toggle-icon"} alt=""/>
                    <NavLink
                        exact
                        to="/"
                    >
                        <p className={selected === 0 ? "selected" : "default-border"}>Home</p>
                    </NavLink>
                    <NavLink
                        exact
                        to="/process"
                    >
                        <p className={selected === 1 ? "selected" : "default-border"}>The Process</p>
                    </NavLink>
                    <NavLink
                        exact
                        to="/transformations"
                    >

                        <p className={selected === 2 ? "selected" : "default-border"}>Transformations</p>
                    </NavLink>
                    <NavLink
                        exact
                        to="/contact"
                    >
                        <p className={selected === 3 ? "selected" : "default-border"}>Contact</p>
                    </NavLink>
                </nav>
            </div>)
        } else {
            return (<div className={"navbar-extended"}>
                <nav className={"navbar-extended-links"}>
                    <img onClick={handleClick} src={toggle_icon} className={"navbar-toggle-icon"} alt=""/>

                </nav>
            </div>)
        }
    } else {
        return (<div>
            <nav>
                <div className="header-full-content">
                    <img className={"navbar-toggle-icon"} src={swift_logo} alt=""/>
                    <nav>
                        <NavLink
                            exact
                            to="/"
                        >
                            <p className={selected === 0 ? "selected" : null}>Home</p>
                        </NavLink>
                        <NavLink
                            exact
                            to="/process"
                        >
                            <p className={selected === 1 ? "selected" : null}>The Process</p>
                        </NavLink>
                        <NavLink
                            exact
                            to="/transformations"
                        >
                            <p className={selected === 2 ? "selected" : null}>Transformations</p>
                        </NavLink>
                        <NavLink
                            exact
                            to="/contact"
                        >
                            <p className={selected === 3 ? "selected" : null}>Contact</p>
                        </NavLink>
                    </nav>
                    <p/>
                </div>
            </nav>
        </div>)
    }
}