import React, { useState } from "react";
import { StepperBottom } from "../../StepperBottom/StepperBottom";
import { StepperHead } from "../../StepperHead/StepperHead";
import { AcDetailForm } from "./AcDetailForm";
import { DocumentForm } from "./DocumentForm";
import { PersonalForm } from "./PersonalForm";

export const Personal = () => {
  const [page, setPage] = useState(1);

  const FormTitle = [
    {
      icon: <i className="fa fa-user-circle icon"></i>,
      label: "Personal Details",
    },
    {
      icon: <i className="fa fa-user icon"></i>,
      label: "Account Detail",
    },
    {
      icon: <i className="fa fa-file-o icon"></i>,
      label: "Document",
    },
  ];
  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goBackPage() {
    setPage((page) => page - 1);
  }

  return (
    <>
      <div className="forms">
        <StepperHead page={page} FormTitle={FormTitle} />
        <div className="component-div">
          <div className="display">
            {page === 1 && <PersonalForm />}
            {page === 2 && <AcDetailForm />}
            {page === 3 && <DocumentForm />}
          </div>

          <StepperBottom
            page={page}
            goNextPage={goNextPage}
            goBackPage={goBackPage}
            chadanee="my name is chandanee"
            setLastStep={page === 3 ? true : false}
          />
        </div>
      </div>
    </>
  );
};
