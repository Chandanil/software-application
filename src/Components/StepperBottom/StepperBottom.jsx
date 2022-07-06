export const StepperBottom = (props) => {
  debugger;
  return (
    <div className="stepper-bottom">
      {props.chadanee}
      <div className="btn-group">
        {props.page !== 1 && (
          <button
            onClick={() => {
              props?.goBackPage();
            }}
            className="cl-btn"
          >
            Back
          </button>
        )}
        <button
          className="cl-btn cl-btn-op"
          onClick={() => {
            if (props.page !== 3) {
              props?.goNextPage();
            }
          }}
        >
          {props.setLastStep ? "save" : "next"}
        </button>
      </div>
    </div>
  );
};
