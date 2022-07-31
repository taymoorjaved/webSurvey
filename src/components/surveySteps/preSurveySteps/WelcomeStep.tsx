import React from 'react';
import {Button} from '../../common/button/Button';
import {Spacer} from '../../common/spacer/Spacer';
import {Text} from '../../common/text/Text';

interface P {
  onNext: () => void;
}

// WelcomeStep component used in survey wrapper
const WelcomeStep = (props: P) => {
  return (
    <React.Fragment>
      <Text variant='h1' fontSize={80} weight='bold'>
        Welcome to our Survey.
      </Text>
      <Text variant='p' fontSize={20} lineHeight={32}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A consequatur
        fugiat voluptatibus porro, ullam nostrum quis laudantium adipisci vero
        veniam voluptatum accusantium incidunt nam commodi nesciunt quisquam
        exercitationem! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. A consequatur fugiat voluptatibus porro, ullam nostrum quis
        laudantium adipisci vero veniam voluptatum accusantium incidunt nam
        commodi nesciunt quisquam consectetur, adipisicing elit. A consequatur
        fugiat voluptatibus porro, ullam nostrum quis laudantium adipisci vero
        veniam voluptatum accusantium incidunt nam commodi nesciunt quisquam
        exercitationem!Itaque, ullam?
      </Text>
      <Spacer margin='68px 0' />
      <Button withIcon onClick={props.onNext}>
        START THE SURVEY
      </Button>
    </React.Fragment>
  );
};

export {WelcomeStep};
