import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/Components/Style/All.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
// import {  Navs } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Home } from "./Components/Homepage/Home";
// import { Tab, Tabs } from "react-tabs";
import { ClTab } from "./Components/Tab/Tab";
import { MainNavbar } from "./Components/Navbar/MainNavbar";
import { LoginForm } from "./Components/Login/LoginForm";
// import { AllForm } from "./Components/AllForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainNavbar />
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/form" element={<ClTab />} />
          <Route path="/login" element={ <LoginForm /> } />
        </Routes>
        {/* <Stepper/> */}
      </BrowserRouter>
    </div>
  );
};
export default App;
