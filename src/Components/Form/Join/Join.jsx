import React , { useState } from "react";
import { StepperBottom } from "../../StepperBottom/StepperBottom";
import { StepperHead } from "../../StepperHead/StepperHead";
import { AcDetailForm } from "../Personal/AcDetailForm";
import { DocumentForm } from "../Personal/DocumentForm";
import { JoinForm } from "./JoinForm";

export const Join = () => {
    const [page, setPage]= useState(1);

    const FormTitle=[
        {
            icon: <i className="fa fa-user-circle icon"></i>,
            label: "Company Details",
          },
          {
            icon: <i className="fa fa-user-circle icon"></i>,
            label: "Account  Details",
          },
          {
            icon: <i className="fa fa-user-circle icon"></i>,
            label: "Documents",
          },
          
    ]
    function goNextPage () {
        setPage((page)=> page + 1);
    }
    function goBackPage () {
        setPage ((page) => page - 1);
    }
    return (
         <>
         <div className="forms">
            <StepperHead page= {page} FormTitle={FormTitle}/>
            <div className="component-div">
                <div className="display">
                    {page === 1 && <JoinForm />}
                    {page === 2 && <AcDetailForm />}
                    {page === 3 && <DocumentForm />}
                </div>

                <StepperBottom page= {page} goBackPage={goBackPage} goNextPage={goNextPage} 
                setLastStep={page === 3 ? true : false} />
            </div>
         </div>
         </>
    );
}