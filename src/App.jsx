import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
