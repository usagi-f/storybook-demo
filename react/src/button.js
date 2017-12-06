import React from 'react';
import './button.css';

const className = (color) => {
  if (!color) return 'btn';
  return `btn ${color}`;
};

const handleClick = (color) => {
  console.log(`click: ${color ? color : 'default'}`);
};

const Button = (props) => {
  return (
    <button
      type="button"
      className={className(props.color)}
      onClick={() => handleClick(props.color)}
    >
      {props.children}
    </button>
  );
};

export default Button;
