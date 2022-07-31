import {FormikContext} from 'formik';
import React, {useEffect} from 'react';
import {Button} from '../common/button/Button';
import {ResultBar} from '../common/resultBar/ResultBar';
import {Spacer} from '../common/spacer/Spacer';
import {Text} from '../common/text/Text';
import {surveyConfigData} from './SurveyConfig';

interface P {
  onNext: () => void;
}

// ResultStep component used in survey wrapper
const ResultStep = (props: P) => {
  const [pointAchieved, setPointAchieved] = React.useState<number>(0);
  const form = React.useContext(FormikContext);
  useEffect(() => {
    const {questionOne, questionTwo, questionThree} = form.values;
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
  }, [form.values]);

  // handle start new button click
  const startNew = () => {
    form.resetForm();
    props.onNext();
  };

  return (
    <React.Fragment>
      <Text variant='h3' fontSize={20} weight='bold'>
        RESULT
      </Text>
      <Text className='marginZero' variant='h2' fontSize={48} weight='bold'>
        Your Score
      </Text>
      <Text className='marginZero' variant='p' fontSize={32} weight='bold'>
        {form.values.name}
      </Text>
      <Text
        style={{margin: '24px 0px 0px 0px'}}
        variant='h1'
        fontSize={60}
        weight='bold'
      >
        {pointAchieved}
      </Text>
      <Text
        style={{margin: '0px 0px 22px 0px'}}
        variant='p'
        fontSize={17}
        weight='bold'
      >
        Points
      </Text>
      {pointAchieved && <ResultBar achieved={pointAchieved} total={16} />}
      <Spacer margin='82px 0px' />
      <Button onClick={() => startNew()}>START NEW</Button>
    </React.Fragment>
  );
};

export {ResultStep};
