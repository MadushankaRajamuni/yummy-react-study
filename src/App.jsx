import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Chefs from "./components/Chefs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhyUs from "./components/WhyUs";
import StatsCounter from "./components/StatsCounter";
import BookATable from "./components/BookATable";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TestimonialsSection from "./components/TestimonialsSection";
import ImageSlider2 from "./components/ImageSlider2";






function App() {

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Home/>
                <About/>
                <WhyUs/>
                <StatsCounter/>
                <Menu/>
                <TestimonialsSection/>
                <Events/>
                <Chefs/>
                <BookATable/>
                <ImageSlider2/>
                {/*<Gallery/> //this is manually gallery if you like, you can use this component*/}
                <Contact/>

                <Footer/>
            </Router>
        </div>
    );
}

export default App;
