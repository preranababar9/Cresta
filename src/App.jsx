import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
