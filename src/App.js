import React from "react";
import Codex from "./web-portfoio/components/codex comp/Codex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./web-portfoio/components/navigation comp/navigation";
import "./App.css";
import About from "./web-portfoio/components/About comp/about";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useState } from "react";
import Loading from "./web-portfoio/components/Loading/Loading";
import Sidebar from "./web-portfoio/components/Side Bar comp/Sidebar";
function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const Loader = setInterval(() => {
      setLoad(true);
    }, 5000);
  }, [load]);
  return (
    <div className="App">
      {load ? (
        <Router>
          <ScrollToTop />
          <Sidebar />
          <Navigation />
          <Routes>
            <Route path="/" element={<Codex />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
