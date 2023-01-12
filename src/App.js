import React from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Appsidebar">
        <Sidebar />
      </div>
      <div className="AppContent">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
