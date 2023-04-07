/* eslint-disable react/no-unescaped-entities */
import MobileStepper from "@mui/material/MobileStepper";
import { PrimaryButton } from "components";
import { useState } from "react";
import { Link } from "react-router-dom";

import AboutYourCarInformation from "./components/AboutYourCarInformation";

function CarValuationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedStep, setCompletedStep] = useState(false);
  const maxSteps = 5;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const renderContent = () => {
    switch (activeStep) {
      default:
        return <AboutYourCarInformation setCompletedStep={setCompletedStep} />;
    }
  };

  const checkLabelNextButton = () => {
    let labelNextButton = "Continue";
    switch (activeStep) {
      case 4:
        labelNextButton = "Submit oder";
        break;

      default:
        labelNextButton = "Continue";
        break;
    }
    return labelNextButton;
  };

  return (
    <div className="pt-44 pb-32">
      <div className="mb-12 text-center">
        <p className="text-secondary--dark mb-4 text-5xl font-bold">About your car</p>
        <p className="text-2xl font-medium text-primary">Tell us about your car</p>
      </div>
      {/* <MobileStepper
        nextButton={<></>}
        backButton={<></>}
        sx={{
          justifyContent: "center",
          "& .MuiMobileStepper-dot": {
            width: "80px",
            height: "8px",
            margin: "0 12px",
            background: "#E6E6E6",
            borderRadius: "33px",
          },
          "& .MuiMobileStepper-dotActive": {
            background: "#4B7196",
          },
        }}
        steps={maxSteps}
        activeStep={activeStep}
        position="static"
      /> */}
      <div>
        {renderContent()}
        {/* <div className="flex justify-between w-full absolute bottom-[-50px]"> */}
        <div className="mt-32">
          <p className="mb-6 text-text-8">
            By selecting 'See my valuation', you are agreeing to the{" "}
            <span className="font-bold text-primary ">
              <Link to={"/how-gear-work/about-us"}>Gear terms of use.</Link>
            </span>
          </p>
          <div className="flex gap-10">
            {activeStep !== 0 && (
              <PrimaryButton type="outline" className="w-[106px]" onClick={handleBack} text="Go back" />
            )}
            {activeStep !== maxSteps && (
              <PrimaryButton
                disabled={!completedStep}
                className="w-[205px]"
                onClick={handleNext}
                text={checkLabelNextButton()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarValuationPage;
