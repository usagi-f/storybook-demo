import React from 'react';
import './button.css';

const className = (color) => {
  if (!color) return 'btn';
  return `btn ${color}`;
};

const Button = (props) => {
  return (
    <button type="button" className={className(props.color)}>
      {props.children}
    </button>
  );
};

export default Button;
