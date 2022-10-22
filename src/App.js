import React from "react";

import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Info />
      <div className="bck-grnd">
        <About />
        <Interests />
      </div>
      <Footer />
    </>
  );
};

export default App;
