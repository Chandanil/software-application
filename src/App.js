import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Components/Style/All.scss";
import "../src/Components/Style/Variables.scss";
import "../src/Components/Style/Mixin.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Navbar, Navs } from "./Components/Navbar/Navbar";
import { InfoCard } from "./Components/InfoCard/InfoCard";
import { Table } from "./Components/Table/Table";
import { LineChart } from "./Components/LineChart/LineChart";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navs />
      <InfoCard />
      <LineChart />
      <Table />
    </div>
  );
};
export default App;
