import React from 'react';
import {Text} from '../common/text/Text';

interface P {
  currentStep: number;
  name: string;
}

const ParticipantName = (props: P) => {
  if (props.currentStep < 2 || props.currentStep > 4) return null;
  return (
    <Text variant='h1' className='topName' fontSize={16} weight='bold'>
      SURVEY FOR: {props.name.toUpperCase()}
    </Text>
  );
};

export {ParticipantName};
