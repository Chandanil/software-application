import React, { useState } from "react";
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
    <div className="parent-div">
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
          {page === 2 && "two"}
          {page === 3 && "three"}
          {page === 4 && "four"}
        </div>

        {page === 1 ? (
          <button onClick={goNextPage}>Save and next</button>
        ) : (
          <>
            <button onClick={goBackPage} className="btns">
              Back
            </button>

            <button onClick={goNextPage}>Next</button>
          </>
        )}
      </div>
    </div>
  );
};
