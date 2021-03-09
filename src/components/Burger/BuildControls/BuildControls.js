import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) =>(
  <div className={classes.BuildControls}>

    {controls.map(control =>(
      <BuildControl 
        key={control.label} 
        label={control.label}
        addIngredientHandler={()=> props.addIngredientHandler(control.type)}
        removeIngredientHandler={()=> props.removeIngredientHandler(control.type)}
        disabledInfo ={props.disabledInfo}
        />
    ))}

  </div>
);

export default buildControls;