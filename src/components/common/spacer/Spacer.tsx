import React from 'react';

// interface SpacerProps
interface SpacerProps {
  margin?: string;
  padding?: string;
}

// common spacer component for all components
const Spacer = (props: SpacerProps) => {
  const {margin, padding} = props;
  return <div style={{margin: margin, padding: padding}} />;
};

export {Spacer};
