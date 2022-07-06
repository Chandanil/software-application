import React, { useState } from "react";
import { AcDetailForm } from "./Personal/AcDetailForm";
import { DocumentForm } from "./Personal/DocumentForm";
import { Form } from "./Personal/PersonalForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { InstitutionForm } from "./Institution/InstitutionForm";

export const Stepper = () => {
  const [page, setPage] = useState(1);
  const FormTitle = ["Personal Details", "Account Detail", "Document"];
  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goBackPage() {
    setPage((page) => page - 1);
  }

  return (
    <div className="parent-div body-section">
      <div className="container-fluid">
        <div className="cl-form">
          <h5 className="title">Customer Creation Form</h5>
          <Tabs className="cl-tabs">
            <TabList>
              <Tab>Institution</Tab>
              <Tab>Personal</Tab>
              <Tab>Join</Tab>
            </TabList>
            <TabPanel>
              <InstitutionForm />
            </TabPanel>
            <TabPanel>
              <div className="forms">
                <div className="step-item">
                  <ul>
                    {FormTitle.map((item, index) => {
                      return (
                        <li
                          className={`${page > index && "active"}`}
                          key={index}
                        >
                          <i className="fa fa-user-circle icon"></i>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="component-div">
                  <div className="display">
                    {page === 1 && <Form />}
                    {page === 2 && <AcDetailForm />}
                    {page === 3 && <DocumentForm />}
                  </div>

                  {page === 1 ? (
                    <button className="cl-btn" onClick={goNextPage}>
                      Save and next
                    </button>
                  ) : page === 3 ? (
                    <div className="btn-group">
                      <button onClick={goBackPage} className="cl-btn">
                        Back
                      </button>
                      <button className="cl-btn cl-btn-op">Save</button>
                    </div>
                  ) : (
                    <>
                      <div className="btn-group">
                        <button onClick={goBackPage} className="cl-btn">
                          Back
                        </button>
                        <button
                          className="cl-btn cl-btn-op"
                          onClick={goNextPage}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
