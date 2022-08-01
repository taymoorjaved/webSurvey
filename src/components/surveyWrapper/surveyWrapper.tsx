import React, { useState } from "react";
import { Stepper } from "../common/stepper/Stepper";
import { NameStep } from "../surveySteps/preSurveySteps/NameStep";
import { StepOne } from "../surveySteps/surveySteps/StepOne";
import { StepTwo } from "../surveySteps/surveySteps/StepTwo";
import { WelcomeStep } from "../surveySteps/preSurveySteps/WelcomeStep";
import { StepThree } from "../surveySteps/surveySteps/StepThree";
import { ResultStep } from "../surveySteps/ResultStep";
import "./SurveyWrapper.css";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { surveyConfigData } from "../surveySteps/SurveyConfig";
import { ParticipantName } from "./ParticipantName";

// all survey steps data interface
export interface SurveyData {
  name: string;
  questionOne: surveyConfigData | null;
  questionTwo: surveyConfigData[] | null;
  questionThree: surveyConfigData | null;
}

// currently empty because no validation was required
const validation = Yup.object({});

// main Survey wrapper component
const SurveyWrapper = () => {
  // step state
  const [step, setStep] = useState<number>(0);
  // survey survey result
  const [surveyResult, setSurveyResult] = useState<SurveyData>();

  // initial survey data
  const initialValues: SurveyData = {
    name: "",
    questionOne: null,
    questionTwo: null,
    questionThree: null,
  };

  // move to next step
  const onNext = () => {
    if (step === 5) {
      setStep(0);
    } else setStep(step + 1);
  };

  // move to previous step
  const onBack = () => {
    setStep(step - 1);
  };

  // common props for all survey steps
  const commonProps = { onNext, onBack };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => setSurveyResult(values)}
      validationSchema={validation}
    >
      {({ values }) => {
        return (
          <div className="startPage">
            <ParticipantName currentStep={step} name={values.name} />
            <div className="startPage-content">
              <Form>
                {step === 0 && <WelcomeStep {...commonProps} />}
                {step === 1 && <NameStep {...commonProps} />}
                {step === 2 && <StepOne {...commonProps} />}
                {step === 3 && <StepTwo {...commonProps} />}
                {step === 4 && <StepThree {...commonProps} />}
                {step === 5 && surveyResult && (
                  <ResultStep {...commonProps} surveyResult={surveyResult} />
                )}
              </Form>
            </div>
            <Stepper currentStep={step} />
          </div>
        );
      }}
    </Formik>
  );
};
export { SurveyWrapper };
