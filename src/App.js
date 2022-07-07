import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/Components/Style/All.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import {  Navs } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Home } from "./Components/Homepage/Home";
// import { Tab, Tabs } from "react-tabs";
import { ClTab } from "./Components/Tab/Tab";
// import { AllForm } from "./Components/AllForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navs />
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/form" element={<ClTab />} />
        </Routes>
        {/* <Stepper/> */}
      </BrowserRouter>
    </div>
  );
};
export default App;
