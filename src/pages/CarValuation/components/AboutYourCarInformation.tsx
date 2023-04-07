/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { Step, StepContent, StepLabel, Stepper } from "@mui/material";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { IconEdit } from "assets/images";
import { Checkbox, PrimaryButton, Radio } from "components";
import { useEffect, useState } from "react";

import CarOffer from "./CarOffer";

const STEPS = [
  {
    label: "About your car",
    id: 1,
  },
  {
    label: `Vehicle features`,
    id: 2,
  },
  { label: "Condition & History", id: 3 },
];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#F37C7C",
      borderLeftWidth: "3px",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#F37C7C",
      borderLeftWidth: "3px",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#E6E6E6",
    borderLeftWidth: "3px",
  },
}));

interface Props {
  setCompletedStep: (value: boolean) => void;
}

const AboutYourCarInformation = ({ setCompletedStep }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep === 3) {
      setCompletedStep(true);
    } else {
      setCompletedStep(false);
    }
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <div className="border-b-2 border-b-text-4 py-5">
              <p className="mb-3">Select the number of seat material for this vehicle</p>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                  <Checkbox
                    key={item}
                    className="rounded border-[1px] border-primary-2 px-5 py-2 text-primary"
                    label="Cloth"
                  />
                ))}
              </div>
            </div>
            <div className="border-b-2 border-b-text-4 py-5">
              <p className="mb-3">Select the number of keys you own for this vehicle</p>
              <div className="flex flex-wrap gap-14">
                {[1, 2, 3].map(item => (
                  <Radio key={item} label={item.toString()} id={"keys"} />
                ))}
              </div>
            </div>
            <div className="border-b-2 border-b-text-4 py-5">
              <p className="mb-3">Do you have tool pack?</p>
              <div className="flex flex-wrap gap-14">
                <Radio label="Yes" id="toolPack" />
                <Radio label="No" id="toolPack" />
              </div>
            </div>
            <div className="py-5">
              <p className="mb-3">Do you smoke in this vehicle?</p>
              <div className="flex flex-wrap gap-14">
                <Radio label="Yes" id="smoking" />
                <Radio label="No" id="smoking" />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <Checkbox key={item} className="px-5 py-2 text-text-7" label="Cloth" />
            ))}
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-5">
            <div className="flex gap-6 rounded-lg border-2 border-text-2 p-3">
              <Radio label="" />
              <div>
                <p className="pb-2 text-lg text-primary">Full</p>
                <p className="text-text-7">
                  It's had all services required by the the manufacturer and you have the supporting documentation.
                </p>
              </div>
            </div>
            <div className="flex gap-6 rounded-lg border-2 border-text-2 p-3">
              <Radio label="" />
              <div>
                <p className="pb-2 text-lg text-primary">Partial</p>
                <p className="text-text-7">
                  It’s had someone, but not all, services required by the manufacturer and you have the supporting
                  documentation.
                </p>
              </div>
            </div>
            <div className="flex gap-6 rounded-lg border-2 border-text-2 p-3">
              <Radio label="" />
              <p className="pb-2 text-lg text-primary">None</p>
            </div>
            <div className="flex gap-6 rounded-lg border-2 border-text-2 p-3">
              <Radio label="" />
              <p className="pb-2 text-lg text-primary">First service not yet due</p>
            </div>
          </div>
        );
    }
  };

  const renderOptional = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="flex flex-col gap-3 text-text-7">
            <p>
              Seat material: <span>4</span>
            </p>
            <p>
              Number of keys: <span>4</span>
            </p>
            <p>
              Tool pack: <span>No</span>
            </p>
            <p>
              Smoking: <span>No</span>
            </p>
          </div>
        );
      case 1:
        return <p>7 features</p>;

      case 2:
        return (
          <div className="flex flex-col gap-3 text-text-7">
            <p>
              Driving or mechanical:: <span>Yes</span>
            </p>
            <p>
              Warning lights displayed: <span>Yes</span>
            </p>
            <p>
              Damage on the windscreen: <span>No</span>
            </p>
            <p>
              Damage to the roof: <span>No</span>
            </p>
            <p>
              File docs: <span>Test.pdf</span>
            </p>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="flex gap-20">
      <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />} className="flex-1">
        {STEPS.map((step, index) => (
          <Step key={step.id} expanded={index < activeStep}>
            <StepLabel
              // optional={
              //   <Box sx={{ display: index < activeStep ? 'block' : 'none' }}>{renderOptional(formik, index)}</Box>
              // }
              sx={{
                "& .MuiStepLabel-label.Mui-completed,  & .MuiStepLabel-label.Mui-active ": {
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#1A1A1A",
                },
                "& .MuiStepLabel-label.Mui-disabled ": {
                  fontWeight: 500,
                  fontSize: 18,
                  color: "#4D4C4C",
                },
                alignItems: "flex-start",
                "& .MuiStepLabel-label": {
                  typography: "subtitle2",
                  color: "text.disabled",
                },

                "& .Mui-completed svg": {
                  fill: "#3AC922",
                },

                "& .MuiSvgIcon-root.Mui-active": {
                  border: "7px solid #ef4b4b",
                  borderRadius: "50%",
                  circle: {
                    fill: "white",
                  },
                  "& .MuiStepIcon-text": {
                    display: "none",
                  },
                },
                "& .Mui-disabled": {
                  circle: {
                    fill: "#F7F7F7",
                  },
                  "& .MuiStepIcon-text": {
                    fill: "unset",
                    color: "#666666",
                  },
                },
                "& .MuiStepLabel-iconContainer": {
                  paddingRight: "56px",
                },
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent
              sx={{
                position: "relative",
                borderLeft: index !== 2 ? (index < activeStep ? "3px solid #F37C7C" : "3px solid #E6E6E6") : "",
                paddingLeft: "65px",
              }}
              TransitionProps={{ unmountOnExit: false }}
            >
              {index < activeStep ? (
                <>
                  {renderOptional(index)}
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="absolute right-0 top-[-30px] "
                    style={{
                      display: activeStep === 0 ? "none" : "block",
                    }}
                  >
                    <IconEdit color="#EF4B4B" />
                  </button>
                </>
              ) : (
                <>
                  {renderContent()}

                  <div className="mt-2">
                    {/* {index < STEPS.length - 1 && ( */}
                    <PrimaryButton
                      type="secondary"
                      onClick={handleNext}
                      className="w-[140px] rounded bg-secondary-3 py-2 px-10 text-base font-medium text-white "
                      text="Next"
                    />
                    {/* )} */}
                  </div>
                </>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <CarOffer />
    </div>
  );
};

export default AboutYourCarInformation;
