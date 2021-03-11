import React from 'react';
import classes from './BuildControl.module.css';

const buildControls =(props) =>(

  <div className={classes.BuildControl} >
    <div className={classes.Label} >{props.label}</div>
    <button 
      className={classes.More} 
      onClick={props.addIngredientHandler} >More
    </button>
    <button 
      className={classes.Less} 
      onClick={props.removeIngredientHandler}
      disabled={props.disabled}>Less
    </button>
  </div>

);

export default buildControls;