import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
// here we are creating a connection to any location where we use this button 
// and making it so we can style to the types we have made via props by 
// defining what btntype and what styling we want.
  <button 
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked} 
  > 
    {props.children} 
  </button>
);

export default button;