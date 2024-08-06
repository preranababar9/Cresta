import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <About/>
      <Work/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
