import './App.css';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import InfoBar from "./components/InfoBar/InfoBar";
import Section2 from "./components/Section2/Section2";
import Section1 from "./components/Section1/Section1";
import Section3 from "./components/Section3/Section3";

function App() {

    return (<div className="App">
        <InfoBar/>
        <Header/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>);
}

export default App;
