import './App.css';
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import InfoBar from "./components/InfoBar/InfoBar";
import Section2 from "./components/Section2/Section2";
import Section1 from "./components/Section1/Section1";

function App() {

    return (<div className="App">
        <InfoBar/>
        <Header/>
        <Hero/>
        <Section1/>
        <Section2/>
    </div>);
}

export default App;
