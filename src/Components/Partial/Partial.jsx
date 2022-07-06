import React, { useState } from "react";
import { AcDetailForm } from "../Form/Personal/AcDetailForm";
import { DocumentForm } from "../Form/Personal/DocumentForm";
import { PersonalForm } from "../Form/Personal/PersonalForm";

export const Partial = () => {
    const [page, setPage] = useState(1);
    const FormTitle = ["Personal Details", "Account Detail", "Document"];
    function goNextPage() {
      setPage((page) => page + 1);
    }
  
    function goBackPage() {
      setPage((page) => page - 1);
    }
  
    return (
        <>
      <div className="forms">
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
              {page === 1 && <PersonalForm />}
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
                  <button className="cl-btn cl-btn-op" onClick={goNextPage}>
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
          </div> 
        </>
    )
}