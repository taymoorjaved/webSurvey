import React from 'react';
import './Button.css';
import ArrowRight from '../../../media/arrow-circle-right.png';
import ArrowLeft from '../../../media/arrow-left.png';

//interface for button props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  withIcon?: boolean;
  backButton?: boolean;
  disabled?: boolean;
}

// common button component for all components
const Button = (props: ButtonProps) => {
  const {children, onClick, withIcon, backButton, disabled} = props;
  return (
    <button
      className={backButton ? 'backButton' : 'commonButton'}
      onClick={onClick}
      disabled={disabled}
    >
      {backButton && (
        <img src={ArrowLeft} alt='arrowLeft' className='arrowLeft' />
      )}
      {children}
      {withIcon && (
        <img src={ArrowRight} alt='ArrowRight' className='arrowRight' />
      )}
    </button>
  );
};

export {Button};
