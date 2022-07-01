import * as React from "react";
import * as ReactDOM from "react-dom";
import { useStepper, withStepper } from "react-usestepper";

const StepOne = () => {
  return (
    <div>
      <p>Step One</p>
    </div>
  );
};

const StepTwo = () => {
  //will fix this requirement in later version , so you can use useStepper() only here
  const { handlePrevious } = useStepper({ totalNumberOfSteps: 3 });
  return (
    <div>
      <p>Step Two</p>
      ooooh wanna go <button onClick={handlePrevious}>Back</button>
    </div>
  );
};

const StepThree = () => {
  return (
    <div>
      <p>Step Three</p>
    </div>
  );
};

export const StepForm = () => {
  const {
    handlePrevious,
    handleNext,
    body,
    currentStep,
    isFirstStep,
    isLastStep
  } = useStepper({
    totalNumberOfSteps: 3,
    onStepsComplete: () => alert("All steps completed!"),
    onBack: () => alert("Back!"),
    bodyComponents: [<StepOne />, <StepTwo />, <StepThree />]
  });
  return (
    <div>
      <h1>Step {currentStep}</h1>
      {body}
      <button onClick={handlePrevious}>
        {isFirstStep ? "Go Back" : "Previous Step"}
      </button>
      <button onClick={handleNext}>
        {" "}
        {isLastStep ? "Finish" : "Next Step"}
      </button>
    </div>
  );
};

const App = withStepper(StepForm);

ReactDOM.render(<App />, document.getElementById("root"));
