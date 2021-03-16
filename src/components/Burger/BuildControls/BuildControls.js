import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Onion', type: 'onion'},
  {label: 'Tomato', type: 'tomato'},
]

const buildControls = (props) =>(
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong> </p>

    {controls.map(control =>(
      <BuildControl 
        key={control.label} 
        label={control.label}
        addIngredientHandler={()=> props.addIngredientHandler(control.type)}
        removeIngredientHandler={()=> props.removeIngredientHandler(control.type)}
        disabled ={props.disabledInfo[control.type]}
        />
    ))}

    <button 
    className={classes.OrderButton} 
    disabled={!props.purchasable}
    onClick={props.purchaseHandler}
    >
      CHECKOUT</button>

  </div>
);

export default buildControls;