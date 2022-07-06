import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/Components/Style/All.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Navbar, Navs } from "./Components/Navbar/Navbar";
import { InfoCard } from "./Components/InfoCard/InfoCard";
import { Table } from "./Components/Table/Table";
import { LineChart } from "./Components/LineChart/LineChart";
import { Form } from "./Components/Form/Personal/PersonalForm";
import { Stepper } from "./Components/Form/Stepper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Homepage/Home";
// import { AllForm } from "./Components/AllForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navs />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/form" element={<Stepper />} />
      </Routes>
      </BrowserRouter>
      {/* <Navs />
      <InfoCard />
      <LineChart />
      <Table />
      <Stepper /> */}
    </div>
  );
};
export default App;
