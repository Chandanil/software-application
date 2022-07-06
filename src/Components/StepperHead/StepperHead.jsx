import { useState } from "react";

export const StepperHead = (props) => {
  const [page, setPage] = useState(1);

  return (
    <div className="stepper-head">
      <div className="forms">
        <div className="step-item">
          <ul>
            {props?.FormTitle?.map((item, index) => {
              return (
                <li className={`${page > index && "active"}`} key={index}>
                  {item.icon}
                  <span>{item.label}</span>
                  {/* {item} */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
