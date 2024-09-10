import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import BootcampPage from "./screens/BootcampPage";
import BootcampDetails from "./screens/BootcampDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="scroll-smooth">
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/bootcamp" element={<BootcampPage />} />{" "}
            <Route path="/bootcamp/:bootcampName" element={<BootcampDetails />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
    </>
  );
}

export default App;
