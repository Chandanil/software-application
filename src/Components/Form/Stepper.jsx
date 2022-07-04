import React, { useState } from "react";
import { AcDetailForm } from "./AcDetailForm";
import { DocumentForm } from "./DocumentForm";
import { Form } from "./Form";

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
        <div className="step-item">
        <ul>
          {FormTitle.map((item, index) => {
            return (
              <li className={`${page > index && "active"}`} key={index}>
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
          <button className="cl-btn"onClick={goNextPage}>Save and next</button>
        ) : (
          <>
            <div className="btn-group">
            <button onClick={goBackPage} className="cl-btn">
              Back
            </button>

            <button className="cl-btn cl-btn-op"onClick={goNextPage}>Next</button>
            </div>
          </>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};
