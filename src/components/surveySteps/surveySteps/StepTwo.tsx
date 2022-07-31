import {FormikContext} from 'formik';
import React from 'react';
import {Button} from '../../common/button/Button';
import {Spacer} from '../../common/spacer/Spacer';
import {Text} from '../../common/text/Text';
import {QuestionTwo, surveyConfigData} from '../SurveyConfig';

interface P {
  onNext: () => void;
  onBack: () => void;
}

// StepTwo component used in survey wrapper
const StepTwo = (props: P) => {
  const form = React.useContext(FormikContext);
  const fieldValue = form?.values?.questionTwo;

  // set the value of the step two question
  const setValue = (value: surveyConfigData) => {
    if (fieldValue === null) {
      form.setFieldValue('questionTwo', [value]);
    } else if (fieldValue?.includes(value)) {
      form.setFieldValue(
        'questionTwo',
        fieldValue.filter((item: surveyConfigData) => item !== value)
      );
    } else {
      form.setFieldValue('questionTwo', [...fieldValue, value]);
    }
  };

  return (
    <React.Fragment>
      <Text variant='h1' fontSize={20} weight='bold'>
        QUESTION 2
      </Text>
      <Text variant='p' fontSize={48} weight='bold'>
        Please select at least one option
      </Text>
      <div className='radioWrapper'>
        {QuestionTwo.map((q, i) => (
          <div className='flex' key={i}>
            <input
              type='checkbox'
              className='checkbox-custom'
              value={q.points}
              name='questionTwo'
              onChange={() => setValue(q)}
              checked={fieldValue?.includes(q) || false}
            />
            <label className='checkbox-custom-label'>
              <Text variant='p' fontSize={24}>
                {q.question}
              </Text>
            </label>
          </div>
        ))}
      </div>
      <Spacer margin='68px 0' />
      <Button withIcon onClick={props.onNext} disabled={!fieldValue?.length}>
        NEXT
      </Button>
      <Button backButton onClick={props.onBack}>
        BACK
      </Button>
    </React.Fragment>
  );
};

export {StepTwo};
