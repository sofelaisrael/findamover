import { useState } from "react"; 
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutFindaMover from "./components/AboutFindaMover";
import FindaMover from "./components/FindaMover";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutFindaMover />
      <FindaMover />
      <Services />
      <div className="h-52"></div>
    </>
  );
}

export default App;
