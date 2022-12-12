import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import TeslaReport from "./components/TeslaReport";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <TeslaReport />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
