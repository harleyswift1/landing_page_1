import './App.css';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import InfoBar from "./components/InfoBar/InfoBar";
import Section2 from "./components/Pages/Home/Section2/Section2";
import Section1 from "./components/Pages/Home/Section1/Section1";
import Section3 from "./components/Pages/Home/Section3/Section3";
import Section4 from "./components/Pages/Home/Section4/Section4";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TransformationsSection from "./components/Pages/Portfolio/PortfolioSection/PortfolioSection";
import {Fragment} from "react";
import TheProcess from "./components/Pages/Process/TheProcess";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Pages/Contact/ContactForm";
import Error404 from "./components/Pages/Error404/Error404";
import Section1A from "./components/Pages/Home/Section1A/Section1A";

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
        <Section1A />
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
    </div>);
}

function Process() {
    return (<div className="App">
        <Top selected={1}></Top>
        <TheProcess/>
        <Footer/>
    </div>);
}

function Transformations() {
    return (<div className="App">
        <Top selected={2}></Top>
        <TransformationsSection/>
        <Footer/>
    </div>);
}


function Contact() {
    return (<div className="App">
        <Top selected={3}></Top>
        <ContactForm/>
        <Footer/>
    </div>);
}

function NotFound() {
    return (<div className="App">
        <Top />
        <Error404 />
        <Footer />
    </div>);
}


function App() {

    return (<div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/process" element={<Process/>}/>
                    <Route path="/transformations" element={<Transformations/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Router>
        </div>

    )
}


export default App;
//
// const handleClick = function () {
//     const elmntToView = document.getElementById("section1");
//     elmntToView.scrollIntoView();
// }