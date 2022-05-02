import './App.css';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import InfoBar from "./components/InfoBar/InfoBar";
import Section2 from "./components/Section2/Section2";
import Section1 from "./components/Section1/Section1";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactForm from "./components/ContactForm/ContactForm";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import {Fragment} from "react";

function Top(props) {
    return (<Fragment>
        <InfoBar/>
        <Header selected={props.selected}/>
    </Fragment>)
}

function Home() {
    return (<div className="App">
        <Top selected={0}></Top>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>);
}

function Portfolio() {
    return (<div className="App">
        <Top selected={1}></Top>
        <PortfolioSection/>
    </div>);
}


function Contact() {
    return (<div className="App">
        <Top selected={2}></Top>
        <ContactForm/>
    </div>);
}

function App() {

    return (<div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/portfolio" element={<Portfolio/>}/>


                    <Route path="/contact" element={<Contact/>}/>

                </Routes>
            </Router>

        </div>

    )
}


export default App;
