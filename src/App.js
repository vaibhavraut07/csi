import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import BootcampPage from "./screens/BootcampPage";
import BootcampDetails from "./screens/BootcampDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function BootcampPrerequisites() {
  useEffect(() => {
      window.location.replace("https://www.notion.so/csiace/CSI-Bootcamp-Prerequisites-104764b863578079a322e5e096e44fd2?pvs=4");
    }, []);

  return null; 
}
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
            <Route path="/bootcamp/prerequisites" element={<BootcampPrerequisites />} />

          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
    </>
  );
}

export default App;
