import {FormikContext} from 'formik';
import React from 'react';
import {Button} from '../../common/button/Button';
import {Spacer} from '../../common/spacer/Spacer';
import {Text} from '../../common/text/Text';
import {QuestionOne} from '../SurveyConfig';
import './SurveySteps.css';

// interface for StepOne props
interface P {
  onNext: () => void;
  onBack: () => void;
}

// StepOne component used in survey wrapper
const StepOne = (props: P) => {
  const form = React.useContext(FormikContext);
  return (
    <React.Fragment>
      <Text variant='h1' fontSize={20} weight='bold'>
        QUESTION 1
      </Text>
      <Text variant='p' fontSize={48} weight='bold'>
        How often do you visit this website?
      </Text>
      <div className='radioWrapper'>
        {QuestionOne.map((q, i) => (
          <div className='flex' key={i}>
            <input
              type='radio'
              className='radio-custom'
              value={q.points}
              name='questionOne'
              onChange={() => form.setFieldValue('questionOne', q)}
              checked={form.values.questionOne === q}
            />
            <label className='radio-custom-label'>
              <Text variant='p' fontSize={24}>
                {q.question}
              </Text>
            </label>
          </div>
        ))}
      </div>
      <Spacer margin='68px 0' />
      <Button
        withIcon
        onClick={props.onNext}
        disabled={!form.values.questionOne}
      >
        NEXT
      </Button>
      <Button backButton onClick={props.onBack}>
        BACK
      </Button>
    </React.Fragment>
  );
};

export {StepOne};
