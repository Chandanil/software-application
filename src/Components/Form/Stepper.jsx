import React, { useState } from "react";
import { Form } from "./Form";

export const Stepper = () => {
  const [page, setPage] = useState(1);

  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goBackPage() {
    setPage((page) => page - 1);
  }

  const [style, setStyle] = useState(false);

  return (
    <div className="parent-div">
      <div className="arrow-container">
        <div className="arrow-div">
          <div className={page === 1 ? "active" : "completed"}>
            <p>Component 1</p>
          </div>
        </div>
        <div className="arrow-div">
          <div
            className={
              page === 2 ? "active" : page < 2 ? "inactive" : "completed"
            }
          >
            <p>Component 2</p>
          </div>
        </div>
        <div className="arrow-div">
          <div
            className={
              page === 3 ? "active" : page < 3 ? "inactive" : "completed"
            }
          >
            <p>Component 3</p>
          </div>
        </div>
        <div className="arrow-div">
          <div className={page === 4 ? "active" : "inactive"}>
            <p>Component 4</p>
          </div>
        </div>
      </div>

      <div className="component-div">
        <div className="display">
          {page === 1 && <Form />}
          {page === 2 && "two"}
          {page === 3 && "three"}
          {page === 4 && "four"}
        </div>

        <button onClick={goBackPage} className="btns">
          Back
        </button>
        <button onClick={goNextPage}>Next</button>
      </div>
    </div>
  );
};
