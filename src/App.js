import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/Components/Style/All.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Navbar, Navs } from "./Components/Navbar/Navbar";
import { InfoCard } from "./Components/InfoCard/InfoCard";
import { Table } from "./Components/Table/Table";
import { LineChart } from "./Components/LineChart/LineChart";
import { Form } from "./Components/Form/Form";
import { useState } from "react";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Navs />
      <InfoCard />
      <LineChart />
      <Table />
      <Form />
    </div>
  );
};
export default App;
