import React from "react";
import "./App.css";
import PersistentDrawerRight from "./components/PersistentDrawerRight";
import HeroBanner from "./sections/HeroBanner";

const App = () => {
  return (
    <div className="App">
      <PersistentDrawerRight />
      <HeroBanner />
    </div>
  );
};

export default App;
