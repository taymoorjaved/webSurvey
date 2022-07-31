import React from 'react';
import './ResultBar.css';

// interface for ResultBar props
interface ResultBarProps {
  achieved: number;
  total: number;
}

// ResultBar component used in result page
const ResultBar = (props: ResultBarProps) => {
  const {achieved, total} = props;
  return (
    <div className='resultBarWrapper'>
      <div
        className='resultBar'
        style={{
          width: `${(achieved / total) * 100.5}%`,
        }}
      />
    </div>
  );
};

export {ResultBar};
