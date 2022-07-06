import React, { useState } from "react";
import { AcDetailForm } from "./Personal/AcDetailForm";
import { DocumentForm } from "./Personal/DocumentForm";
import { Form } from "./Personal/PersonalForm";

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
          <div className="input-group">
            <div className="group-item">
              <input type="radio" />
              <label>Institution</label>
            </div>
            <div className="group-item">
              <input type="radio" checked />
              <label>Personal</label>
            </div>
            <div className="group-item">
              <input type="radio" />
              <label>Join</label>
            </div>
          </div>
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
              <button className="cl-btn" onClick={goNextPage}>
                Save and next
              </button>
            ) : page === 3 ? (
              <button className="cl-btn cl-btn-op">Save</button>
            ) : (
              <>
                <div className="btn-group">
                  <button onClick={goBackPage} className="cl-btn">
                    Back
                  </button>
                  <button className="cl-btn cl-btn-op" onClick={goNextPage}>
                    Next
                  </button>
                </div>
              </>
            )}

            {/* if (someCase) {
          return (
            <div>someCase</div>
          )
        } else if (otherCase) {
          return (
            <div>otherCase</div>
          )
        } else {
          return (
            <div>catch all</div>
          )
        } */}
          </div>
        </div>
      </div>
    </div>
  );
};
