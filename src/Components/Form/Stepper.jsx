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
