import React from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
