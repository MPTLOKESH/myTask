import "./App.css";
import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Dashboard from "../src/components/Dashboard/Dashboard";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
