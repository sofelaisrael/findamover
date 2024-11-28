import { useState } from "react"; 
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutFindaMover from "./components/AboutFindaMover";
import FindaMover from "./components/FindaMover";
import Services from "./components/Services";
import WhyFind from "./components/WhyFind";
import Standards from "./components/Standards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutFindaMover />
      <FindaMover />
      <Services />
      <WhyFind />
      <Standards />
      <Footer />
      <div className="h-52"></div>
    </>
  );
}

export default App;
