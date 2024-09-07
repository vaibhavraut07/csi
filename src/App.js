import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import BootcampPage from "./screens/BootcampPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/bootcamp" element={<BootcampPage />} />{" "}
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
