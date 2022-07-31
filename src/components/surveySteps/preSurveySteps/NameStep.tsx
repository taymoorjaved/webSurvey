import {FormikContext} from 'formik';
import React from 'react';
import {Button} from '../../common/button/Button';
import {Spacer} from '../../common/spacer/Spacer';
import {Text} from '../../common/text/Text';
import './PreSurveySteps.css';

interface P {
  onNext: () => void;
  onBack: () => void;
}

// NameStep component used in survey wrapper
const NameStep = (props: P) => {
  const form = React.useContext(FormikContext);
  return (
    <React.Fragment>
      <Text variant='h1' fontSize={20} weight='bold'>
        WHO ARE YOU?
      </Text>
      <Text variant='p' fontSize={48} weight='bold'>
        Please enter your name.
      </Text>
      <input
        className='nameInput'
        type='text'
        value={form.values.name}
        placeholder='John Doe'
        onChange={(e) => form.setFieldValue('name', e.target.value)}
      />
      <Spacer margin='68px 0' />
      <Button withIcon onClick={props.onNext} disabled={!form.values.name}>
        NEXT
      </Button>
      <Button backButton onClick={props.onBack}>
        BACK
      </Button>
    </React.Fragment>
  );
};

export {NameStep};
