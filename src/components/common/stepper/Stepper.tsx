import React from 'react';
import {Text} from '../text/Text';
import './Stepper.css';

// interface for Stepper props
interface StepperProps {
  currentStep: number;
}

// Stepper component used in survey steps
const Stepper = (props: StepperProps) => {
  const {currentStep} = props;
  if (currentStep < 2 || currentStep > 4) return null;
  return (
    <div className='stepperWrapper'>
      <Text variant='p' fontSize={16} weight='bold' className='stepperText'>
        Question {currentStep - 1} out of 3
      </Text>
      <div className='stepper'>
        <div
          className='stepperBar'
          style={{
            width: `${((currentStep - 1) * 100) / 3}%`,
          }}
        />
      </div>
    </div>
  );
};

export {Stepper};
