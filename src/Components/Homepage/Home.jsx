import React from "react";
import { Table } from "../Table/Table";
import { InfoCard } from "../InfoCard/InfoCard";
import { LineChart } from "../LineChart/LineChart";
import { DocumentForm } from "../Form/Personal/DocumentForm";

export const Home = () => {
  return (
    <>
      {/* <div style={{ margin: "40px" }}>
        <DocumentForm />
      </div> */}
      <InfoCard />
      <LineChart />
      <Table />
    </>
  );
};
