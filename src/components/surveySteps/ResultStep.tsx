import React, { useEffect } from "react";
import { Button } from "../common/button/Button";
import { ResultBar } from "../common/resultBar/ResultBar";
import { Spacer } from "../common/spacer/Spacer";
import { Text } from "../common/text/Text";
import { SurveyData } from "../surveyWrapper/SurveyWrapper";
import { surveyConfigData } from "./SurveyConfig";
import { FormikContext } from "formik";

interface P {
  onNext: () => void;
  surveyResult: SurveyData;
}

// ResultStep component used in survey wrapper
const ResultStep = (props: P) => {
  const [pointAchieved, setPointAchieved] = React.useState<number>(0);
  const form = React.useContext(FormikContext);
  const { onNext, surveyResult } = props;
  useEffect(() => {
    const { questionOne, questionTwo, questionThree } = surveyResult;
    if (questionOne && questionTwo && questionThree) {
      // calculate points
      const calculatedPoints =
        questionOne.points +
        questionTwo.reduce(
          (acc: number, cur: surveyConfigData) => acc + cur.points,
          0
        ) +
        questionThree.points;
      setPointAchieved(calculatedPoints);
    }
  }, [surveyResult]);

  // handle start new button click
  const startNew = () => {
    form.resetForm();
    onNext();
  };

  return (
    <React.Fragment>
      <Text variant="h3" fontSize={20} weight="bold">
        RESULT
      </Text>
      <Text className="marginZero" variant="h2" fontSize={48} weight="bold">
        Your Score
      </Text>
      <Text className="marginZero" variant="p" fontSize={32} weight="bold">
        {surveyResult.name}
      </Text>
      <Text
        style={{ margin: "24px 0px 0px 0px" }}
        variant="h1"
        fontSize={60}
        weight="bold"
      >
        {pointAchieved}
      </Text>
      <Text
        style={{ margin: "0px 0px 22px 0px" }}
        variant="p"
        fontSize={17}
        weight="bold"
      >
        Points
      </Text>
      {pointAchieved && <ResultBar achieved={pointAchieved} total={16} />}
      <Spacer margin="82px 0px" />
      <Button onClick={() => startNew()}>START NEW</Button>
    </React.Fragment>
  );
};

export { ResultStep };
