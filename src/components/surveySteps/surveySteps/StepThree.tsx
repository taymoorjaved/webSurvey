import { FormikContext } from "formik";
import React from "react";
import { Button } from "../../common/button/Button";
import { Spacer } from "../../common/spacer/Spacer";
import { Text } from "../../common/text/Text";
import { QuestionThree } from "../SurveyConfig";

interface P {
  onNext: () => void;
  onBack: () => void;
}

// StepThree component used in survey wrapper
const StepThree = (props: P) => {
  const form = React.useContext(FormikContext);

  // handle form submit
  const submitForm = () => {
    form.submitForm();
    props.onNext();
  };

  return (
    <React.Fragment>
      <Text variant="h1" fontSize={20} weight="bold">
        QUESTION 3
      </Text>
      <Text variant="p" fontSize={48} weight="bold">
        Where are you from?
      </Text>
      <div>
        <select
          name="questionThree"
          className="customSelector"
          onChange={(e: React.ChangeEvent<any>) => {
            form.setFieldValue("questionThree", QuestionThree[e.target.value]);
          }}
        >
          <option value="" hidden>
            Please chose your country?
          </option>
          {QuestionThree.map((q, i) => (
            <option key={i} value={i}>
              {q.question}
            </option>
          ))}
        </select>
      </div>
      <Spacer margin="68px 0" />
      <Button
        withIcon
        onClick={submitForm}
        disabled={!form.values.questionThree}
      >
        FINISH
      </Button>
      <Button backButton onClick={props.onBack}>
        BACK
      </Button>
    </React.Fragment>
  );
};

export { StepThree };
