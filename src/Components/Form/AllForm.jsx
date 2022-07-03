import React from "react";

export default function AllForm() {
  const [step, setStep] = useState();
  const [next, setNext] = useState();
  const [changeHandle, setChangeHandle] = useState();
  const prevStep = () => {
    setStep({ step: step - 1 });
  };
  const nextStep = () => {
    setStep({ step: step + 1 });
  };
  return <div></div>;
}
