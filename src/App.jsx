import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Marque from "./components/Marque";
import Solutions from "./components/Solutions";
import Service from "./components/Service";
import Counter from "./components/Counter";
import Testimonals from "./components/Testimonals";
import Blog from "./components/Blog";
import Marque2 from "./components/Marque2";

function App() {
  return (
    <div>
      <Header/>
      <Home />
    <About/>
        <Work/>
      <Gallery/>
       <Marque/>
      <Solutions/>
      <Service/>
     <Counter/>
    <Testimonals/>
       {/*  <Blog/>
      <Marque2/>
      <Footer/> */}
    </div>
  );
}

export default App;
