import React from 'react';
import './Text.css';

// interface for Text props
interface TextProps {
  children: React.ReactNode;
  className?: string;
  key?: string | number;
  onClick?: () => void;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  fontSize?: number;
  lineHeight?: number;
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500';
  style?: React.CSSProperties;
}

// Text component used in survey steps
const Text = (props: TextProps) => {
  return (
    <props.variant
      key={props.key}
      style={{
        lineHeight: `${props.lineHeight}px`,
        fontSize: `${props.fontSize}px`,
        fontWeight: props.weight || 'normal',
        ...props.style,
      }}
      className={`commonText  ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </props.variant>
  );
};

export {Text};
